import Image from "next/image";

export const Footer = () => {
    return (
        <div className='bg-secondary w-full px-20 p-2 text-xl'>
            <div className="flex justify-between">
                <div>
                    <p className="mb-2 font-bold">Beautiq Studio</p>
                    <p>Czestochowska 15a</p>
                    <p>46-040 Ozimek</p>
                    <p>+48 533 571 745</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Przedłużanie rzęs</p>
                    <p>Stylizacja brwi</p>
                    <p>Lifting rzęs</p>
                    <p>Makijaż permanentny</p>
                    <p>Cennik</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Szkolenie z przedłużania rzęs</p>
                    <p>Szkolenie ze stylizacji brwi</p>
                    <p>Szkolenie z laminacji rzęs</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p>O mnie</p>
                    <Image src='icons/instagram.svg' alt='instagram' width={40} height={40} />
                    <Image src='icons/facebook.svg' alt='facebook' width={40} height={40} />
                </div>
            </div>
            <p className="text-center text-sm">Copyrights BeautiQ Studio</p>
        </div>
    )
};