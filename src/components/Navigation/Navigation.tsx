'use client'
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image'

const links = [
    {
        href: 'szkolenia',
        label: 'Szkolenia'
    },
    {
        href: 'oferta',
        label: 'Oferta'
    },
    {
        href: 'cennik',
        label: 'Cennik'
    }
]

export const Navigation = () => {
    const segment = useSelectedLayoutSegment()

    return (
        <nav className='bg-secondary p-2 flex justify-between px-20 text-xl mb-6'>
            <Image
                src="/logo.svg"
                alt="Beautiq Studio Logo"
                width={100}
                height={24}
                priority
            />
            <div className='flex gap-4'>
                <ul className='flex gap-4 justify-end'>
                    {links.map((link, i) =>
                        <li key={`${link.href}_${i}`} className={`hover:text-primary ${segment === link.href ? 'font-bold' : ''}`}>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    )}
                </ul>
                <div className='border-l-2 border-black pl-2'>
                    <p>+48 123 456 789</p>
                </div>
            </div>
        </nav>
    )
};