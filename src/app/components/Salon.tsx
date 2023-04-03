import Image from "next/image";
import { ImageWrapper } from "../../../components/ImageWrapper";

export const Salon = () => {
    return (
        <div>
            <p>Beautiq studio</p>
            <div className="flex gap-4">
                <div className="h-full flex flex-col">
                    <p>Some Headline here</p>
                    <p>some subheadline here</p>
                    <iframe
                        title="googleMap"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1264.0815897972802!2d18.217179!3d50.679796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd95450835cbf065d!2sBeautiQ%20Studio%20-%20Natalia%20Golomb!5e0!3m2!1spl!2spl!4v1591524463363!5m2!1spl!2spl"
                        width="320"
                        height="300"
                        style={{ border: 0 }}
                        aria-hidden="false"
                    />
                </div>
                <ImageWrapper alt="Beautiq studio" src="/images/salon_1.jpg" width={300} height={450} />
                <ImageWrapper alt="Beautiq studio" src="/images/salon_2.jpg" width={300} height={450} />
            </div>
        </div>
    )
};