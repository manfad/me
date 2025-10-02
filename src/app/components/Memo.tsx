"use client";
import { useState } from 'react';

interface MemoProps {
  title?: string;
  rotation?: number;
  position?: { x: number; y: number };
  children?: React.ReactNode;
  size?:{width:number; height:number }
}

export function Memo({children, title = '', rotation = -5,size, position = { x: 200, y: 400 } }: MemoProps) {
  const [text, setText] = useState(title);

  return (
    <div
      className="absolute bg-yellow-100 shadow-lg border border-yellow-200 p-4"
      style={{
        width: size?.width,
        height: size?.height,
        transform: `rotate(${rotation}deg)`,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="text-center font-handwriting text-sm mb-2 font-semibold">{title}</div>
      {children}
    </div>
  );
}
