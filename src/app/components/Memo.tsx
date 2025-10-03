interface MemoProps {
  title?: string
  rotation?: number
  position?: { x: number; y: number }
  children?: React.ReactNode
  size?: { width: number; height: number }
}

export function Memo({
  children,
  title = "",
  rotation = -5,
  size = { width: 200, height: 150 },
  position = { x: 200, y: 400 },
}: MemoProps) {
  return (
    <div
      className="relative bg-yellow-100 shadow-lg border border-yellow-200 p-3 sm:p-4"
      style={{
        width: "100%",
        maxWidth: `min(${size.width}px, 80vw)`,
        aspectRatio: 2 / 1,
        transform: `rotate(${rotation}deg)`,
        left: `min(${position.x}px, 10vw)`,
        top: `min(${position.y}px, 5vh)`,
      }}
    >
      <div className="text-center text-xs sm:text-sm mb-2 font-semibold">{title}</div>
      {children}
    </div>
  )
}
