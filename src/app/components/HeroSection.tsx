'use client';
import Image from "next/image";
import { ActionButton } from "../../../components/ActionButton";
import { ImageWrapper } from "../../../components/ImageWrapper";

export const HeroSection = () => {
    return (
        <div className="flex w-full justify-between max-w-6xl">
            <div className="flex flex-col justify-between">
                <h2 className="text-4xl font-bold">Headline</h2>
                <ImageWrapper alt="hero" src="/images/hero2.png" width={600} height={450} />
            </div>
            <div className="flex flex-col items-end">
                <Image alt="hero" src="/images/hero.png" width={450} height={600} />
                <p className="self-start my-10">some description</p>
                <ActionButton label="Zobacz ofertę" onClick={() => null} />
            </div>
        </div>
    )
};