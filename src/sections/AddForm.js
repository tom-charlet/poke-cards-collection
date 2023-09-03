'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { dataPokemons } from '../data/Pokemons'
import { dataTypes } from '../data/Types'
import { dataBlocs } from '../data/Blocs'

const Form = dynamic(() => import('../components/Form'), { ssr: false })
const Search = dynamic(() => import('../components/Search'), { ssr: false })
const Input = dynamic(() => import('../components/Input'), { ssr: false })
const Button = dynamic(() => import('../components/Button'), { ssr: false })
const Number = dynamic(() => import("../components/Input").then((mod) => mod.Number))

const AddForm = () => {
    const [blocs, setBlocs] = useState([])
    const [bloc, setBloc] = useState()
    const [extentions, setExtentions] = useState([])

    useEffect(() => {
        const newBlocs = blocs
        const newExtentions = extentions

        dataBlocs.map(item => {
            newBlocs.push(item.name)
            item.extentions.map(item => newExtentions.push(item))
        })

        setBlocs(newBlocs)
        setExtentions(newExtentions)
    }, [])

    useEffect(() => {

    }, [bloc]);

    // console.log(bloc, extentions)

    return <Form className='grid grid-cols-12 gap-6 bg-red-600 px-10 py-14 max-w-[800px] rounded-lg border-2 border-gray-800 mx-auto'>
        <Search options={dataPokemons} name='pokemon' placeholder='Pokémon' className='col-span-8' />
        <Search options={dataTypes} name='type' placeholder='Type' className='col-span-4' />
        <Search options={blocs} updateBloc={setBloc} name='Bloc' placeholder='Bloc' className='col-span-6' />
        <Search options={extentions} name='Extension' placeholder='Extension' className='col-span-6' />
        <Number name='numero' placeholder='N° carte' className='col-span-3' />
        <Button type='submit' className='col-span-3'>Ajouter</Button>
    </Form>
}

export default AddForm