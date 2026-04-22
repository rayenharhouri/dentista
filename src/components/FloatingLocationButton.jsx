export default function FloatingLocationButton({ label, tooltip }) {
  return (
    <a
      className="floating-location"
      href="#location"
      aria-label={label}
      title={label}
    >
      <span className="floating-location-tooltip">{tooltip}</span>
      <span className="floating-location-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <path d="M12 2.5a7.1 7.1 0 0 0-7.1 7.1c0 5.2 5.8 10.9 6.5 11.5a.9.9 0 0 0 1.2 0c.7-.6 6.5-6.3 6.5-11.5A7.1 7.1 0 0 0 12 2.5Zm0 10.3a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z" />
        </svg>
      </span>
    </a>
  );
}
