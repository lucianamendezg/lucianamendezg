interface TaskbarProps {
  aboutMeClicked:()=>void;
  aboutMe:boolean;
}

export default function AboutMeButton (props:TaskbarProps) {
    return (
      <>
      {
        !props.aboutMe ?
        <button className = "border-b-2 border-r-2 border-black drop-shadow-2xl hover:bg-gray-300"
          onClick={props.aboutMeClicked}>
          <div className="px-1 border-t-2 border-l-2 border-white">
            <h1 className="font-retro text-lg text-black">
                    About Luciana
            </h1>
          </div>
        </button>
        :
        <button className = "border-b-2 border-r-2 border-white hover:bg-gray-500"
        onClick={props.aboutMeClicked}>
        <div className="px-1 border-t-2 border-l-2 border-black">
          <h1 className="font-retro text-lg text-black">
                  About Luciana
          </h1>
        </div>
      </button>
    }
    </>
    )
  }