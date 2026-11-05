interface PageOverlayProps {
  isVisible: boolean;
}

export function PageOverlay({ isVisible }: PageOverlayProps) {
  return (
    <div
      data-overlay
      aria-hidden
      className={
        'fixed inset-0 z-[70] flex items-end bg-ink px-6 pb-10 transition-transform duration-700 ease-out-quart ' +
        (isVisible ? 'translate-y-0' : 'pointer-events-none -translate-y-full')
      }
    >
      <div className="flex w-full items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
        <span>Anis Zamoum — Portfolio 2026</span>
        <span>Tizi Ouzou</span>
      </div>
    </div>
  );
}
