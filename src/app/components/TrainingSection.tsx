'use client';

import { ActionButton } from "../../../components/ActionButton";
import { ImageWrapper } from "../../../components/ImageWrapper";

export const TrainingSection = () => {
    return (
        <div className="flex flex-col w-full bg-white">
            <p>SZKOLENIA</p>
            <div className="flex w-full justify-center">
                <div>
                    <h2>Szkolenie z przedłużania rzęs</h2>
                    <p>some subheadline here</p>
                    <ActionButton label="Więcej" onClick={() => null} />
                </div>
                <ImageWrapper alt="" src="/images/szkolenia_1.png" height={600} width={600} />
            </div>
            <div className="flex w-full justify-center">
                <ImageWrapper alt="" src="/images/szkolenia_2.png" height={600} width={600} />
                <div>
                    <h2>Szkolenie ze stylizacji brwi</h2>
                    <p>some subheadline here</p>
                    <ActionButton label="Więcej" onClick={() => null} />
                </div>
            </div>
        </div>
    )
};