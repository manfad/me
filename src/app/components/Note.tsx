"use client"

import type React from "react"

import Paper from "./Paper"
import Bookmark from "./Bookmark"
interface NoteProps {
  rotation?: number
  children?: React.ReactNode
  bookmarkText?: string
  bookmarkColor?: string
  onClick?: () => void
  isActive?: boolean
}

export default function Note({ rotation, children, bookmarkText, bookmarkColor, onClick, isActive }: NoteProps) {
  return (
    <div
      className="w-full max-w-[85vw] sm:max-w-[380px] md:max-w-[430px] lg:max-w-[430px] min-h-[400px] sm:min-h-[480px] md:min-h-[520px] rounded-lg"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <Bookmark
        text={bookmarkText}
        color={bookmarkColor}
        position="absolute top-2 -right-6 sm:-right-9 z-10"
        onClick={onClick}
        isActive={isActive}
      />
      <Paper>{children}</Paper>
    </div>
  )
}
