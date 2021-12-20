import { useState } from 'react'; 
import Desktop from '../components/desktop/desktop'
import Taskbar from '../components/taskbar/taskbar'


export default function Screen() {
  const [aboutMe, setAboutMe] = useState(false);

  function aboutMeClicked () {
    setAboutMe(!aboutMe);
  }

  return (
      <div
      className="flex flex-col h-screen"
      style={{backgroundImage: 'url(images/desktop-image.png)'}}
      >
        <main className="flex-auto">
            <Desktop/>
        </main>
        <footer>
            <Taskbar
            aboutMeClicked={aboutMeClicked}
            aboutMe={aboutMe}
          />
        </footer>
      </div>
    )
  }