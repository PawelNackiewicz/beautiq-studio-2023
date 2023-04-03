'use client';

import { ActionButton } from "../../../components/ActionButton";
import { ImageWrapper } from "../../../components/ImageWrapper";

export const TrainingSection = () => {
    return (
        <div className="w-full bg-white flex justify-center">
            <div className="flex flex-col w-full max-w-6xl">
                <h3 className="font-bold text-primary text-lg">SZKOLENIA</h3>
                <div className="flex w-full justify-between mb-10">
                    <div>
                        <h2 className="font-bold text-4xl mb-20">Szkolenie z przedłużania rzęs</h2>
                        <p>some subheadline here</p>
                        <ActionButton label="Więcej" onClick={() => null} />
                    </div>
                    <ImageWrapper alt="" src="/images/szkolenia_1.png" height={600} width={600} />
                </div>
                <div className="flex w-full justify-between">
                    <ImageWrapper alt="" src="/images/szkolenia_2.png" height={600} width={600} />
                    <div className="flex flex-col items-end">
                        <h2 className="font-bold text-4xl mb-20">Szkolenie ze stylizacji brwi</h2>
                        <p>some subheadline here</p>
                        <ActionButton label="Więcej" onClick={() => null} />
                    </div>
                </div>
            </div>
        </div>
    )
};