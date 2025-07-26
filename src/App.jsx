import { GenScreen } from "./Sites/GenScreen"

function App() {
  return (
    <>
      <div className="flex flex-col h-[100dvh] overflow-hidden bg-gray-100">
        <div className="flex-1">
          <GenScreen />
        </div>
      </div>
    </>
  )
}

export default App
