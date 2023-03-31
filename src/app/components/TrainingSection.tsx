import { ActionButton } from "../../../components/ActionButton";
import { ImageWrapper } from "../../../components/ImageWrapper";

export const TrainingSection = () => {
    return (
        <div className="flex flex-col">
            <p>SZKOLENIA</p>
            <div className="flex">
                <div>
                <h2>Szkolenie z przedłużania rzęs</h2>
                <p>some subheadline here</p>
                <ActionButton />
                </div>
                <ImageWrapper alt="" src="/images/szkolenia_1.png" height={600} width={600} />
            </div>
            <div className="flex">
                <ImageWrapper alt="" src="/images/szkolenia_2.png" height={600} width={600} />
                <div>
                <h2>Szkolenie ze stylizacji brwi</h2>
                <p>some subheadline here</p>
                <ActionButton />
                </div>
            </div>
        </div>
    )
};