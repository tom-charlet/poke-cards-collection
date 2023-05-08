"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AddForm = dynamic(() => import('../src/sections/AddForm'), { ssr: false })

export default function Home() {

  return (
    <main className="px-6 md:px-10 lg:px-16 lg:container lg:mx-auto">
      <h1>Pokémons</h1>
      <AddForm />
    </main>
  )
}
