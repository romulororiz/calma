'use client'

import { useEffect } from 'react'

// make calm mode a global state and pass as prop
export default function ModeToggle({
  calmMode,
  setCalmMode,
}: {
  calmMode: boolean
  setCalmMode: (calmMode: boolean) => void
}) {
  // use local storage to store the state
  useEffect(() => {
    localStorage.setItem('calmMode', calmMode.toString())
  }, [calmMode])

  return (
    <button
      onClick={() => setCalmMode(!calmMode)}
      className="glass-bg fixed right-4 bottom-5 z-[1001] rounded-full px-3 py-2 text-xs font-medium whitespace-nowrap text-[var(--text-primary)] shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[var(--purple-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] focus:outline-none sm:px-4 sm:text-sm"
      aria-label={calmMode ? 'Disable calm mode' : 'Enable calm mode'}
    >
      <span className="hidden sm:inline">
        {calmMode ? '🌟 Full Experience' : '🧘 Calm Mode'}
      </span>
      <span className="sm:hidden">{calmMode ? '🌟' : '🧘'}</span>
    </button>
  )
}
