import AboutMeButton from "./about-me-button"
import Clock from "./clock"
import AboutMe from "./about-me"

interface ScreenProps {
  aboutMeClicked:()=>void;
  aboutMe:boolean;
}

export default function Taskbar(props:ScreenProps) {
    return (
      <>
      {props.aboutMe && <AboutMe/>}
        <div className="flex bg-gray-400 py-1 px-2 border-2 border-white justify-between">
            <AboutMeButton
              aboutMe={props.aboutMe}
              aboutMeClicked={props.aboutMeClicked}/>
            <Clock/>
        </div>
      </>
    )
  }