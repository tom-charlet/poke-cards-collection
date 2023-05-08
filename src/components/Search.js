import { useState, useRef } from 'react';
import Fuse from 'fuse.js';
import dynamic from 'next/dynamic'
import useOutsideClick from "./OutsideClick";

const Icon = dynamic(() => import('./Icon'), { ssr: false })

export default function Search({ options, className, ...props }) {
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

        if (value === '') {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    const handleSelect = (e) => {
        setValue(e.currentTarget.innerText)
        setShow(false)
        setResults('')
    }

    const handleShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return <label ref={ref} className={`flex flex-col gap-2 relative ${className ?? ""}`}>
        <input {...props} className={`py-3 px-5 border focus:outline-0 ${(value === '' && !show) ? 'border-transparent' : 'border-gray-600'}`}
            type="text"
            onChange={handleChange}
            value={value}
        />
        {show && <ul className='z-20 absolute bg-white top-[48px] w-full border border-gray-600 border-t-0'>
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