import { useState, useRef } from 'react';
import Fuse from 'fuse.js';
import dynamic from 'next/dynamic'
import useOutsideClick from "./OutsideClick";

const Icon = dynamic(() => import('./Icon'), { ssr: false })

export default function Search({ options, className, updateBloc, ...props }) {
    const [results, setResults] = useState();
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        setShow(false)
    });

    const handleChange = (e) => {
        const { value } = e.currentTarget
        const fuse = new Fuse(options)
        setResults(fuse.search(value))
        setValue(value)

        if (value === '') setShow(false)
        else setShow(true)

        if (updateBloc) updateBloc(value)
    }

    const handleSelect = (e) => {
        const value = e.currentTarget.innerText
        setValue(value)
        setShow(false)
        setResults('')

        if (updateBloc) updateBloc(value)
    }

    const handleShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return <label ref={ref} className={`flex flex-col gap-2 relative ${className ?? ""}`}>
        <input {...props} className={`py-3 px-5 rounded border-2 focus:outline-0 placeholder:text-gray-300 ${(value === '' && !show) ? 'border-gray-800' : 'border-gray-800'}`}
            type="text"
            onChange={handleChange}
            value={value}
        />
        {show && <ul className='z-20 absolute bg-white top-[48px] w-full rounded-b border-2 border-gray-800 border-t-0 max-h-[500px] overflow-auto'>
            {(results && results.length)
                ? results.map((item, index) => <ListItem key={index} onClick={handleSelect} >{item.item}</ListItem>)
                : options.map((item, index) => <ListItem key={index} onClick={handleSelect} >{item}</ListItem>)
            }
        </ul>}
        <button onClick={handleShow} className='flex justify-center items-center aspect-square absolute h-[48px] top-0 right-0'>
            <Icon name='down' className='w-[16px] h-[16px]' />
        </button>
    </label>
}

const ListItem = ({ children, ...props }) => {
    return <li {...props}>
        <button className='py-2 px-5 w-full hover:bg-gray-100 text-left focus:outline-0 focus:bg-gray-100'>
            {children}
        </button>
    </li>
}