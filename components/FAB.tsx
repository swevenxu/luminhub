"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div
      className="fixed z-50"
      style={{
        right: "calc(1rem + env(safe-area-inset-right))",
        bottom: "calc(1rem + env(safe-area-inset-bottom))",
      }}
    >
      {/* Popup Card - positioned above button */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/40 transition-opacity duration-200 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
          />

          {/* Popup */}
          <div
            className={`absolute bottom-14 right-0 w-[280px] p-5 rounded-2xl shadow-2xl transition-all duration-200 ease-out ${
              isAnimating
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-2 scale-95"
            }`}
            style={{
              background: "rgba(20, 20, 20, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Small triangle pointer */}
            <div
              className="absolute -bottom-2 right-6 w-4 h-4 rotate-45"
              style={{
                background: "rgba(20, 20, 20, 0.95)",
                borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            />

            {/* Content */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#7f7cff]/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#7f7cff]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
                  <path d="M7 9h10v2H7zm0-3h10v2H7z" />
                </svg>
              </div>
              <h2
                className="text-lg font-bold text-white mb-1 uppercase tracking-wide"
                style={{ fontFamily: "'Khand', sans-serif" }}
              >
                Need Help?
              </h2>
              <p
                className="text-gray-400 text-sm mb-4"
                style={{ fontFamily: "'Bespoke Sans', sans-serif" }}
              >
                We&apos;re here to assist you
              </p>

              {/* Open Ticket Button */}
              <Link
                href="https://discord.com/invite/luminhub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-white text-sm font-medium uppercase transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "#7f7cff",
                  fontFamily: "'Expose', sans-serif",
                }}
                onClick={handleClose}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                Open Ticket
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Floating Support Button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        aria-label={isOpen ? "Close support" : "Open support"}
        className={`relative flex items-center gap-2 h-11 px-4 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7f7cff]/25 ${
          isOpen ? "bg-[#6b68e0] scale-95" : "bg-[#7f7cff] hover:scale-105"
        }`}
        style={{
          border: "1px solid rgba(127, 124, 255, 0.5)",
        }}
      >
        {/* Message Bubble Icon */}
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
          {isOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            </svg>
          )}
        </div>
        <span
          className="text-sm font-medium uppercase"
          style={{ fontFamily: "'Expose', sans-serif" }}
        >
          {isOpen ? "Close" : "Support"}
        </span>
      </button>
    </div>
  );
}
