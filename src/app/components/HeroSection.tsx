'use client';

import { ActionButton } from "../../../components/ActionButton";
import { ImageWrapper } from "../../../components/ImageWrapper";

export const HeroSection = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col justify-between">
                <h2>Headline</h2>
                <ImageWrapper alt="hero" src="/images/hero2.png" width={450} height={600} />
            </div>
            <div className="flex flex-col">
                <ImageWrapper alt="hero" src="/images/hero.png" width={600} height={450} />
                <h2>Headline</h2>
                <p>some description</p>
                <ActionButton label="Zobacz ofertę" onClick={() => null} />
            </div>
        </div>
    )
};