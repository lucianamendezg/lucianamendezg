interface ParentProps {
    Desktop:React.ComponentType;
    Taskbar: React.ComponentType;
}

export default function Screen(props:ParentProps) {
    return (
      <div className="flex flex-col h-screen">
        <main className="flex-auto">
            <props.Desktop/>
        </main>
        <footer>
            <props.Taskbar/>
        </footer>
      </div>
    )
  }