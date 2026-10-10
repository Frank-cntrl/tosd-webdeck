// Visible placeholder for copy the mockup flagged but did not supply.
export default function Tbd({ children, className = '' }) {
  return (
    <div
      className={`rounded-sm border border-dashed border-sky-500/60 bg-sky-500/5 px-4 py-3 text-center ${className}`}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
        TBD — {children}
      </span>
    </div>
  )
}
