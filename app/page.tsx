"use client"

import { startBackgroundJob } from './actions'

export default function Home() {
  async function handleClick() {
    await startBackgroundJob()
  };

  return (
    <main className="flex h-lvh items-center justify-center">
      <button
        onClick={handleClick}
        className="btn btn-primary w-1/2 h-56 bg-green-500 text-xl sm:text-3xl rounded-lg hover:bg-green-600"
      >
        Start Background Job
      </button>
    </main>
    
  )
}