import Image from 'next/image';
import Link from 'next/link'

interface ParentProps {
    src: StaticImageData;
    width: number;
    height: number;
    title: string;
    hyperlink:string;
}

export default function Icon(props:ParentProps) {
    return (
        <div className="block text-center m-6">
        <Link href={props.hyperlink}>
        <a>
        <Image
            src={props.src}
            width={props.height}
            height={props.height}
        />
        <h1 className="p-3 text-white font-retro hover:text-red-800">{props.title}</h1>
        </a>
        </Link>
    </div>
    )
}