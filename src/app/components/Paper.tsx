interface PaperProps {
  children: React.ReactNode
}

export default function Paper({ children }: PaperProps) {
  return (
    <div
      className="w-full max-w-[85vw] sm:max-w-[380px] md:max-w-[430px] lg:max-w-[430px] min-h-[500px] sm:min-h-[550px] md:min-h-[560px] bg-white rounded-sm relative p-4 sm:p-6 md:p-8 sm:pr-8 md:pr-10 sm:pl-5 md:pl-6 sm:pt-6 md:pt-8"
      style={{
        boxShadow: "0 2px 5px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.4), inset 0 0 100px rgba(101, 67, 33, 0.08)",
      }}
    >
      {/* Line pattern */}
      <div
        className="absolute top-6 sm:top-8 left-3 right-3 bottom-0 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
        transparent,
        transparent 1.8em,
        rgba(150, 130, 110, 0.35) 1.8em,
        rgba(150, 130, 110, 0.35) calc(1.8em + 1px)
      )`,
        }}
      />

      {/* Text content */}
      <div
        className="relative z-10 text-[#1a1a1a] text-sm sm:text-base md:text-lg leading-[1.65em]"
        style={{ wordWrap: "break-word" }}
      >
        {children}
      </div>
    </div>
  )
}
