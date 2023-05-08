'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Pokemons from '../data/Pokemons'
import Types from '../data/Types'

const Form = dynamic(() => import('../components/Form'), { ssr: false })
const Search = dynamic(() => import('../components/Search'), { ssr: false })
const Input = dynamic(() => import('../components/Input'), { ssr: false })
const Number = dynamic(() => import("../components/Input").then((mod) => mod.Number))

const AddForm = () => {

    const [pokemons, setPokemons] = useState()
    const [types, setTypes] = useState()

    useEffect(() => {
        setPokemons(Pokemons)
        setTypes(Types)
    }, [])

    return <Form className='grid grid-cols-6 gap-6 bg-gray-100 p-10'>
        {pokemons && <Search options={pokemons} name='pokemon' placeholder='Pokémon' className='col-span-4' />}
        {types && <Search options={types} name='types' placeholder='Types' className='col-span-2' />}
        <Number name='numero' placeholder='N° carte' />
        <button type='submit'>Envoyer</button>
    </Form>
}

export default AddForm