export default function LogoMark({ className = "logo-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" role="img" aria-label="Contractus">
      {/* granatowe „C" otwarte z prawej */}
      <path
        d="M44.85 46.85A21 21 0 1 1 44.85 17.15"
        stroke="#123A5E"
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      {/* złoty ptaszek z wydłużonym ogonem */}
      <path
        d="M22 33l6 7 20-24"
        stroke="#DB9830"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
