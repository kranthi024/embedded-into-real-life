"use client";

import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  // Close popup when Escape is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const phoneNumber = "+916309117193";

  const whatsappMessage = encodeURIComponent(
    "Hello G Kranthi Kumar, I am interested in your Embedded Into Real Life products/services."
  );

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact popup"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          ×
        </button>

        {/* Header */}
        <div className="border-b border-white/10 px-7 pb-6 pt-8">

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-black">
            ⚡
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Embedded Into Real Life
          </p>

          <h2
            id="contact-modal-title"
            className="mt-3 text-3xl font-bold tracking-tight text-white"
          >
            Let&apos;s talk.
          </h2>

          <p className="mt-3 leading-6 text-gray-400">
            Have a project, product requirement or embedded-system idea?
            Contact us directly.
          </p>

        </div>

        {/* Contact details */}
        <div className="px-7 py-6">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Founder
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              G Kranthi Kumar
            </h3>

            <div className="mt-5 border-t border-white/10 pt-5">

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Phone
              </p>

              <a
                href={`tel:${phoneNumber}`}
                className="mt-2 block text-xl font-medium text-white transition hover:text-gray-300"
              >
                +91 6309117193
              </a>

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 font-semibold text-black transition hover:bg-gray-200"
            >
              <span>📞</span>
              Call Now
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              <span>💬</span>
              WhatsApp
            </a>

          </div>

          {/* Login */}
          <a
            href="/login"
            className="mt-4 flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            Customer Login →
          </a>

          <p className="mt-5 text-center text-xs leading-5 text-gray-600">
            Click outside this window or press Escape to close.
          </p>

        </div>

      </div>
    </div>
  );
}
