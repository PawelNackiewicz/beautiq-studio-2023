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
        <nav className='border-b-2 border-gray-200 p-2 flex justify-between px-20'>
            <Image
                src="/vercel.svg"
                alt="Beautiq Studio Logo"
                width={100}
                height={24}
                priority
            />
            <ul className='flex gap-4 justify-end'>
                {links.map((link, i) =>
                    <li key={`${link.href}_${i}`} className={`hover:text-sky-500 ${segment === link.href ? 'font-bold' : ''}`}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
};