// components/OldNotebook.js
'use client' // Add this if using Next.js 13+ App Router

import { useState } from 'react'
import styles from './style.module.css'

export default function Paper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.notebookContainer}>
      <div className={styles.notebook}>
        <div className={styles.lines}></div>
        <div className={styles.marginLine}></div>
        
        <div 
          className={`${styles.content} ${styles.active}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}