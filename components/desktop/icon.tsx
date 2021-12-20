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
        <div className="block text-center m-4">
            <Link href={props.hyperlink}>
                <a className="hover:opacity-75">
                    <Image
                        src={props.src}
                        width={props.height}
                        height={props.height}
                    />
                <h1 className="text-black text-xl font-retro"><span className="bg-gray-100 bg-opacity-75 p-1">{props.title}</span></h1>
                </a>
            </Link>
    </div>
    )
}