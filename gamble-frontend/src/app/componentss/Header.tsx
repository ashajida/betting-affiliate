'use client'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react'

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleResize = useCallback(() => {
        if(window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            if(isOpen) setIsOpen(false);
        }
    }, [isOpen]);
     
    const path = usePathname()
    
    const isActive = (href: string) => path == href;

    const searchInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(window.innerWidth < 768) {
            setIsMobile(true);
        }

        window.addEventListener('resize', handleResize)

        return () => {
            setIsMobile(false);
            document.removeEventListener('resize', handleResize);
            //setIsOpen(false)
        }
    }, [isMobile, handleResize])

  return (
    <header className='h-[67px] flex items-center bg-dark text-light'>
        <div className='container'>
            <div className={`flex items-center relative ${isMobile ? 'gap-4 overflow-hidden' : 'justify-between'}`}>
                <Link href="/">Logo</Link>
                <button  onClick={() => setIsOpen(!isOpen)} className={`${isMobile ? 'block -order-first' : 'hidden'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
                <nav className={`flex gap-4 ${isMobile ? 'flex-col absolute top-0 left-0 h-[100dvh] w-[100vw] bg-dark justify-center text-center transition-transform translate-x-full' : ''} ${isOpen ? 'translate-x-0' : ''}`}>
                    <button className={`absolute top-5 right-5 ${!isMobile ? 'hidden' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg tran" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </button>
                    <Link onClick={() => setIsOpen(!isOpen)} className={`block p-3 hover:text-primary hover:transition-color hover:duration-150 ${isActive('/games') && 'text-primary'}`} href="/games">Games</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className={`block p-3 hover:text-primary hover:transition-color hover:duration-150 ${isActive('/bonuses') && 'text-primary'}`} href="/bonuses">Bonuses</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className={`block p-3 hover:text-primary hover:transition-color hover:duration-150 ${isActive('/news') && 'text-primary'}`} href="/news">News</Link>
                </nav>
                <button onClick={() => {
                    setShowSearch(!showSearch);
                    searchInput.current?.focus();
                    console.log( searchInput.current);
                }} className={`${isMobile ? 'ml-auto' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
                <div className={` ${!showSearch && 'hidden'} transition-all flex flex-col justify-center fixed top-0 left-0 h-[100dvh] w-[100vw] bg-dark`}>
                    <button className={`absolute top-16 right-16`} onClick={() => setShowSearch(!showSearch)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg tran" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </button>
                    <form className='mx-auto block w-[60%]' action={(formData) => {
                       const value = formData.get('search');
                       redirect(`/search?q=${value}`);
                    }}>
                        <label htmlFor='search' className='border-b-2 w-full flex pb-3 has:[:focus]:border-b-primary has-[:focus-visible]:border-b-primary' >
                            <input ref={searchInput} name='search' id='search' className='px-4 bg-transparent border-0 outline-0 w-full text-[2rem]' placeholder='Search....' />
                            <button type='submit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </label>
                    </form>
                </div>
                <div className={`absolute right-0 bottom-[-80px] h-fit w-[300px] bg-light rounded-md p-4 translate-y-[-200%]  transition duration-150 ${showSearch && 'translate-y-0'}`}>
                    <form>
                        <input className='w-full p-2 text-dark'/>
                    </form>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header