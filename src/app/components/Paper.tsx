'use client'

interface PaperProps {
  children: React.ReactNode;
}

export default function Paper({ children }: PaperProps) {
  return (
    <div className="w-full min-w-[500px] min-h-[650px] bg-white rounded-sm relative p-8 pr-10 pl-6 pt-8" 
         style={{
           boxShadow: '0 2px 5px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.4), inset 0 0 100px rgba(101, 67, 33, 0.08)'
         }}>
      {/* Horizontal lines */}
      <div className="absolute top-8 left-3 right-3 bottom-0 pointer-events-none z-0"
           style={{
             backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(150, 130, 110, 0.4) 31px, rgba(150, 130, 110, 0.4) 32px)'
           }}
      />
      
      <div className="relative z-10 text-[#1a1a1a]" 
           style={{ lineHeight: '32px', wordWrap: 'break-word' }}>
        {children}
      </div>
    </div>
  )
}