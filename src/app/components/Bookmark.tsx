"use client"

interface BookmarkProps {
  text?: string
  color?: string
  position?: string
  onClick?: () => void
  isActive?: boolean
}

export default function Bookmark({ text, color, position, onClick, isActive }: BookmarkProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: `${color}`,
        color: "black",
      }}
      className={`w-16 sm:w-20 h-6 sm:h-7 [clip-path:polygon(20%_0,100%_0,100%_100%,20%_100%,0%_50%)] flex items-center justify-center ${position}
            hover:scale-105 transition-all duration-200 cursor-pointer text-[8px] sm:text-[10px] font-semibold font-sans
            ${isActive ? "scale-110" : ""}
            `}
    >
      <span className="text-[8px] sm:text-[10px]">{text}</span>
    </div>
  )
}
