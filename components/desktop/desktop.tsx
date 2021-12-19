import Icon from './icon'
import ContactMe from './../../public/icons/contact-me.png'
import Github from './../../public/icons/github.png'
import Linkedin from './../../public/icons/linkedin.png'
import Resume from './../../public/icons/resume.png'
import Personal from './../../public/icons/personal.png'

type IconProps = {
  src: StaticImageData;
  width: number;
  height: number;
  title: string;
  hyperlink: string;
}

let iconsMap:IconProps[] = [
  {
    src: ContactMe,
    width: 50,
    height: 50,
    title: "Contact Me",
    hyperlink: "mailto:luciana.mendezg@gmail.com"
  },
  {
    src: Github,
    width: 50,
    height: 50,
    title: "Github",
    hyperlink: "https://github.com/lucianamendezg"
  },
  {
    src: Linkedin,
    width: 50,
    height: 50,
    title: "Linkedin",
    hyperlink: "https://www.linkedin.com/in/lmg25/"
  },
  {
    src: Resume,
    width: 50,
    height: 50,
    title: "CV",
    hyperlink: "https://drive.google.com/file/d/1-6ak4frXxWlXOGTaQuStFEV2DtrIMWMY/view?usp=sharing"
  },
  {
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
        <div className="flex grid grid-cols-2 lg:grid-rows-3 lg:grid-cols-5 gap-4">
          <div className="hidden lg:flex lg:row-span-3 lg:col-span-3">
            {/*Empty for aesthetics*/}
          </div>
          {
            iconsMap.map(icon => 
            <div>
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