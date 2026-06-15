export function CinematicOverlay() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden="true">
      <div className="cinematic-vignette absolute inset-0" />
      <div className="cinematic-readability absolute inset-0" />
      <div className="cinematic-bottom-fade absolute inset-x-0 bottom-0 h-[40vh]" />
    </div>
  )
}