export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {diagonal ? <path d="M5 19 19 5M5 5h14v14" /> : <path d="M3 12h17m-7-7 7 7-7 7" />}
    </svg>
  );
}

export function Star({ className = '' }: { className?: string }) {
  return <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><path d="m20 0 3.8 16.2L40 20l-16.2 3.8L20 40l-3.8-16.2L0 20l16.2-3.8z" /></svg>;
}
