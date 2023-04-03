import React from 'react';
import Image from 'next/image';

interface ActionButtonProps {
    label: string,
    onClick: () => void
}

export const ActionButton = ({ label, onClick }: ActionButtonProps) => {
    return (
        <button className='bg-primary rounded-sm w-72 h-12' onClick={onClick}>
            <div className='flex w-full justify-center text-white gap-4'>
                <p className='font-bold text-2xl'>{label}</p>
                <Image src='icons/arrowButton.svg' alt='arrow' width={30} height={30} />
            </div>
        </button>
    )
};