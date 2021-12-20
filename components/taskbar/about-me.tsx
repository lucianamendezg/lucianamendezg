import MenuSections from "./menu-sections"
import one from './../../public/icons/menu-icons/1.png'
import two from './../../public/icons/menu-icons/2.png'
import three from './../../public/icons/menu-icons/3.png'
import four from './../../public/icons/menu-icons/4.png'
import five from './../../public/icons/menu-icons/5.png'
import six from './../../public/icons/menu-icons/6.png'
import seven from './../../public/icons/menu-icons/7.png'


type MenuProps = {
  key:number;
  src: StaticImageData;
  text: string;
}

let menuMap:MenuProps[] = [
  {
    key: 1,
    src: one,
    text: "H! I'm Luciana [she/her]!"
  },
  {
    key: 2,
    src: two,
    text: "I am a software engineer and data scientist based in Chicago, IL."
  },
  {
    key: 3,
    src: three,
    text: "I currently work at First Look Appraisals, where I work with Javascript/Typescript, Python, and AWS."
  },
  {
    key: 4,
    src: four,
    text: "I am also an Advisory Board Member and founder Techical Lead for Chicago Artist Guide. "
  },
  {
    key: 5,
    src: five,
    text: "I graduated from DePaul University with a degree in Mathematics and Computer Science June 2019."
  },
  {
    key: 6,
    src: six,
    text: "In my free time I enjoy listening to music, reading, and riding public transit."
  },
  {
    key: 7,
    src: seven,
    text: "Thank you for visiting my website ♡"
  },
]

export default function AboutMe() {
  return (
        <div className="flex grid grid-cols-5 md:w-96  border-b-4 border-r-4 border-black">

          <div className="col-span-1 bg-gradient-to-b from-pink-400 to-pink-300 border-l-4 border-t-4 border-white font-bold">
          </div>

          <div className="col-span-4 bg-gray-300 border-t-4 border-l-2 border-white">
            {
              menuMap.map(ms => 
                <div key={ms.key}>
                  <MenuSections
                    src={ms.src}
                    text={ms.text}
                  />
                </div>
              )
            }
          </div>
              
        </div>
    )
  }
  