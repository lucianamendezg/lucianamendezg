import Image from 'next/image';

interface ParentProps {
    src: StaticImageData;
    text:string;
}

export default function MenuSections(props:ParentProps) {
    return (
        <div className="flex grid grid-cols-4 items-center border-b-2 border-b-white p-1 hover:bg-pink-300">
            <div className="col-span-1 text-center">
                <Image
                    src={props.src}
                    width={30}
                    height={30}
                />
            </div>

            <div className="col-span-3">
                <p className="text-black text-md font-retro">{props.text}</p>
            </div>
    </div>
    )
}