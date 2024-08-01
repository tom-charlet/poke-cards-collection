'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import TCGdex from '@tcgdex/sdk'

const tcgdex = new TCGdex('fr')

const Content = () => {
    const [data, setData] = useState([])

    const getData = async (type) => {
        switch (type) {
            case "cards":
                tcgdex.fetch('cards').then(res => setData({ ...data, cards: res }))
                break;
            case "series":
                tcgdex.fetch('series').then(res => setData({ ...data, series: res }))
                break;
            case "sets":
                tcgdex.fetchSets().then(res => setData({ ...data, sets: res }))
                break;
            case "categories":
                tcgdex.fetch('categories').then(res => setData({ ...data, categories: res }))
                break;
            case "types":
                tcgdex.fetch('types').then(res => setData({ ...data, types: res }))
                break;
            case "stages":
                tcgdex.fetch('stages').then(res => setData({ ...data, stages: res }))
                break;
            case "suffixes":
                tcgdex.fetch('suffixes').then(res => setData({ ...data, suffixes: res }))
                break;
            case "variants":
                tcgdex.fetch('variants').then(res => setData({ ...data, variants: res }))
                break;
            case "rarity":
                tcgdex.fetch('rarities').then(res => setData({ ...data, rarity: res }))
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return <section className='flex flex-col justify-center items-center gap-6'>
        <div className='px-4 py-3 flex gap-2 flex-wrap justify-center items-center bg-slate-200 rounded-xl'>
            <Button onClick={() => getData("cards")}>Cards</Button>
            <Button onClick={() => getData("series")}>Series</Button>
            <Button onClick={() => getData("sets")}>Sets</Button>
            <Button onClick={() => getData("categories")}>Catégories</Button>
            <Button onClick={() => getData("types")}>Types</Button>
            <Button onClick={() => getData("stages")}>Niveaux</Button>
            <Button onClick={() => getData("suffixes")}>Suffixes</Button>
            <Button onClick={() => getData("variants")}>Variantes</Button>
            <Button onClick={() => getData("rarity")}>Raretés</Button>
        </div>
    </section>

}

export default Content

const Button = ({ children, ...props }) => {
    return <button {...props} className='bg-white rounded-lg font-semibold px-4 py-2'>
        {children}
    </button>
}