// components/OldNotebook.js
'use client' // Add this if using Next.js 13+ App Router

import { useState } from 'react'
import styles from './style.module.css'

interface PaperProps {
  children: React.ReactNode;
}

export default function Paper({  children }: PaperProps) {
  return (
    <div className={styles.notebookContainer}>
      <div className={styles.notebook}>
        <div className={styles.lines}></div>
        
        <div 
          className={`${styles.content} ${styles.active}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}