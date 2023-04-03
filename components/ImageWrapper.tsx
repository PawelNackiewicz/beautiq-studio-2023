import Image from "next/image"

interface ImageWrapperProps {
    src: string,
    alt: string,
    width: number,
    height: number
}

export const ImageWrapper = ({ src, alt, height, width }: ImageWrapperProps) => {
    return <Image alt={alt} src={src} height={height} width={width} className='rounded-sm' />
};