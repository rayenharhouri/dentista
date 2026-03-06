const normalizePhone = (value) => String(value || "").replace(/\D/g, "");

export default function FloatingWhatsAppButton({
  phoneNumber,
  label,
  tooltip,
  prefilledMessage,
}) {
  const target = normalizePhone(phoneNumber);
  const base = `https://wa.me/${target}`;
  const href = prefilledMessage
    ? `${base}?text=${encodeURIComponent(prefilledMessage)}`
    : base;

  return (
    <a
      className="floating-whatsapp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <span className="floating-whatsapp-tooltip">{tooltip}</span>
      <span className="floating-whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img" focusable="false">
          <path d="M27.2 4.8A15.1 15.1 0 0 0 3.9 23.1L2 30l7-1.8a15.1 15.1 0 0 0 7 1.8h.1A15.1 15.1 0 0 0 27.2 4.8Zm-11.1 22.6h-.1a12.4 12.4 0 0 1-6.3-1.7l-.5-.3-4.2 1.1 1.1-4.1-.3-.5a12.4 12.4 0 1 1 10.3 5.5Zm6.8-9.3c-.4-.2-2.4-1.2-2.8-1.4-.4-.1-.7-.2-.9.2-.3.4-1 1.4-1.2 1.6-.2.2-.4.3-.8.1a10.2 10.2 0 0 1-3-1.8 11.1 11.1 0 0 1-2-2.5c-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.3-1.2-3.1-.3-.8-.6-.6-.9-.6h-.7c-.2 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.7 4.2 6.6 5.9.9.4 1.6.6 2.1.8.9.3 1.8.2 2.4.1.8-.1 2.4-1 2.8-2 .3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z" />
        </svg>
      </span>
    </a>
  );
}
