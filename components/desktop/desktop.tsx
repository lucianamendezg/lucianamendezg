import Icon from './icon'
import ContactMe from './../../public/icons/desktop-icons/contact-me.png'
import Github from './../../public/icons/desktop-icons/github.png'
import Linkedin from './../../public/icons/desktop-icons/linkedin.png'
import Resume from './../../public/icons/desktop-icons/resume.png'
import Personal from './../../public/icons/desktop-icons/personal.png'

type IconProps = {
  key:number;
  src: StaticImageData;
  width: number;
  height: number;
  title: string;
  hyperlink: string;
}

let iconsMap:IconProps[] = [
  {
    key: 1,
    src: ContactMe,
    width: 50,
    height: 50,
    title: "Contact Me",
    hyperlink: "mailto:luciana.mendezg@gmail.com"
  },
  {
    key: 2,
    src: Github,
    width: 50,
    height: 50,
    title: "Github",
    hyperlink: "https://github.com/lucianamendezg"
  },
  {
    key: 3,
    src: Linkedin,
    width: 50,
    height: 50,
    title: "Linkedin",
    hyperlink: "https://www.linkedin.com/in/lmg25/"
  },
  {
    key: 4,
    src: Resume,
    width: 50,
    height: 50,
    title: "CV",
    hyperlink: "https://drive.google.com/file/d/1-6ak4frXxWlXOGTaQuStFEV2DtrIMWMY/view?usp=sharing"
  },
  {
    key: 5,
    src: Personal,
    width: 50,
    height: 50,
    title: "Personal Blog",
    hyperlink: ""
  },
]

export default function Desktop() {
    return (
      <div>
        <div className="flex grid grid-cols-2 lg:grid-rows-3 lg:grid-cols-5 gap-2 w-ful">
          <div className="hidden lg:flex lg:row-span-3 lg:col-span-3">
            {/*Empty for aesthetics*/}
          </div>
          {
            iconsMap.map(icon => 
            <div key={icon.key}>
              <Icon
                src={icon.src}
                width={icon.width}
                height={icon.height}
                title={icon.title}
                hyperlink={icon.hyperlink}
              />
            </div>)
          }
        </div>
      </div>
    )
  }