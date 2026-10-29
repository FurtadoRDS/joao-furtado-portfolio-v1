import { useEffect, useRef, useState } from 'react';
import { profile } from '../content/profile';
import { Arrow } from './Icons';

type ContactKind = 'email' | 'phone';

export function ContactChannels() {
  const [copied, setCopied] = useState<ContactKind | null>(null);
  const [feedback, setFeedback] = useState('');
  const feedbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyRequest = useRef(0);

  useEffect(() => () => {
    if (feedbackTimeout.current !== null) clearTimeout(feedbackTimeout.current);
    copyRequest.current += 1;
  }, []);

  const copyContact = async (kind: ContactKind) => {
    const request = ++copyRequest.current;
    if (feedbackTimeout.current !== null) clearTimeout(feedbackTimeout.current);
    setCopied(null);
    setFeedback('');

    try {
      if (!navigator.clipboard?.writeText) throw new Error('Área de transferência indisponível');
      await navigator.clipboard.writeText(kind === 'email' ? profile.contact.email : profile.contact.phone);
      if (copyRequest.current !== request) return;
      setCopied(kind);
      setFeedback(kind === 'email' ? 'E-mail copiado.' : 'Telefone copiado.');
    } catch {
      if (copyRequest.current !== request) return;
      setFeedback('Não foi possível copiar. Selecione o contato e copie manualmente.');
    }

    feedbackTimeout.current = setTimeout(() => {
      setCopied(null);
      setFeedback('');
      feedbackTimeout.current = null;
    }, 5000);
  };

  const emailHref = `mailto:${profile.contact.email}?subject=${encodeURIComponent('Contato pelo portfólio')}`;
  const whatsappHref = `https://wa.me/${profile.contact.phone.replace(/\D/g, '')}`;

  return (
    <div className="contact-channels">
      <div className="contact-channel">
        <span className="contact-channel-label">E-mail</span>
        <a className="contact-channel-value" href={emailHref} title="Abrir aplicativo de e-mail">{profile.contact.email}</a>
        <button className="contact-copy-button" type="button" aria-label="Copiar e-mail" onClick={() => void copyContact('email')}>
          {copied === 'email' ? 'Copiado' : 'Copiar'}
        </button>
      </div>

      <div className="contact-channel">
        <span className="contact-channel-label">Telefone</span>
        <a className="contact-channel-value" href={`tel:${profile.contact.phone}`} title="Ligar para João Furtado">{profile.contact.phoneDisplay}</a>
        <button className="contact-copy-button" type="button" aria-label="Copiar telefone" onClick={() => void copyContact('phone')}>
          {copied === 'phone' ? 'Copiado' : 'Copiar'}
        </button>
      </div>

      <p className="contact-feedback" role="status" aria-live="polite" aria-atomic="true">{feedback}</p>

      <div className="contact-actions">
        <a className="text-link" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a>
        <a className="text-link" href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
      </div>
    </div>
  );
}
