"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AddForm = dynamic(() => import('../src/sections/AddForm'), {ssr: false})

export default function Home() {

  return (
    <main className="flex flex-col items-center p-24">
      <h1>Pokémons</h1>
      <AddForm />
    </main>
  )
}
