import Image from "next/image";

const data = [
    {
        id: '1',
        img: '/images/reviever.jpg',
        name: 'Patrycja',
        text: 'jakiś bardzo dzługi i miły tekst o profesjonalizmie Natali, bardzo dobrzych usługach i fantastycznej atmosferze w salonie'
    },
    {
        id: '2',
        img: '/images/reviever.jpg',
        name: 'Patrycja',
        text: 'jakiś bardzo dzługi i miły tekst o profesjonalizmie Natali, bardzo dobrzych usługach i fantastycznej atmosferze w salonie'
    },
    {
        id: '3',
        img: '/images/reviever.jpg',
        name: 'Patrycja',
        text: 'jakiś bardzo dzługi i miły tekst o profesjonalizmie Natali, bardzo dobrzych usługach i fantastycznej atmosferze w salonie'
    },
    {
        id: '4',
        img: '/images/reviever.jpg',
        name: 'Patrycja',
        text: 'jakiś bardzo dzługi i miły tekst o profesjonalizmie Natali, bardzo dobrzych usługach i fantastycznej atmosferze w salonie'
    }
]

export const Reviews = () => {
    return (
        <div className="w-full bg-secondary flex flex-col justify-center items-center py-20">
            <h2 className="font-bold text-4xl mb-20">Opinie klientów</h2>
            <div className="flex gap-14">
                {data.map(e => <Review key={e.id} name={e.name} text={e.text} img={e.img} />)}
            </div>
        </div>
    )
};

interface ReviewProps {
    img: string,
    name: string,
    text: string
}

const Review = ({ img, name, text }: ReviewProps) => {
    return (
        <div className="flex flex-col w-64 bg-white rounded-sm relative items-center">
            <Image src={img} alt={`photo_${name}`} width={50} height={50} className='rounded-full absolute -top-6 border-2 border-white' />
            <p className="pt-10">{name}</p>
            <p className="p-4 text-center">{text}</p>
        </div>
    )
}