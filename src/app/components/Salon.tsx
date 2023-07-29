import Image from "next/image";
import { ImageWrapper } from "@/components";

export const Salon = () => {
    return (
        <div className="py-10 w-full max-w-6xl">
            <h3 className="font-bold text-primary text-lg">BEAUTIQ STUDIO</h3>
            <div className="flex justify-between">
                <div className="h-full flex flex-col justify-between w-1/2">
                    <h2 className="font-bold text-4xl mb-20">Headline</h2>
                    <p>some subheadline here</p>
                    <iframe
                        title="googleMap"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1264.0815897972802!2d18.217179!3d50.679796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd95450835cbf065d!2sBeautiQ%20Studio%20-%20Natalia%20Golomb!5e0!3m2!1spl!2spl!4v1591524463363!5m2!1spl!2spl"
                        width="500"
                        height="300"
                        style={{ border: 0 }}
                        aria-hidden="false"
                    />
                </div>
                <div className="flex gap-4">
                    <ImageWrapper alt="Beautiq studio" src="/images/salon_1.jpg" width={300} height={450} />
                    <ImageWrapper alt="Beautiq studio" src="/images/salon_2.jpg" width={300} height={450} />
                </div>
            </div>
            <div className="flex justify-center gap-5 mt-6">
                <div className="flex gap-2">
                    <Image src='icons/location.svg' alt='location' width={20} height={20} />
                    <p>ul. Czestochowska 15a, 00-000 Ozimek</p>
                </div>
                <div className="flex gap-2">
                    <Image src='icons/phone.svg' alt='phone' width={20} height={20} />
                    <p>+ 48 123 456 789</p>
                </div>
            </div>
        </div>
    )
};