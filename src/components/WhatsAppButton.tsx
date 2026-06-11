const WHATSAPP_URL =
  "https://wa.me/2349026155550?text=" +
  encodeURIComponent("Hi Xtratech, I'd like to learn more about your services.");

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Xtratech on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elevated transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ backgroundColor: "#25D366" }} />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.36c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.9 0-10.69 4.78-10.69 10.67 0 1.88.5 3.72 1.44 5.34l-1.53 5.59 5.73-1.5a10.66 10.66 0 0 0 5.05 1.27h.01c5.9 0 10.69-4.78 10.69-10.67 0-2.85-1.11-5.53-3.13-7.55a10.62 10.62 0 0 0-7.57-3.15zm0 19.46h-.01a8.8 8.8 0 0 1-4.48-1.22l-.32-.19-3.33.87.89-3.25-.21-.33a8.77 8.77 0 0 1-1.36-4.69c0-4.85 3.96-8.79 8.83-8.79 2.36 0 4.57.92 6.24 2.58a8.77 8.77 0 0 1 2.58 6.22c0 4.85-3.96 8.8-8.83 8.8z" />
      </svg>
    </a>
  );
}
