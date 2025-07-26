import { useState } from "react"
import { ScanQrCode, ImagePlus } from "lucide-react"
import { ScanScreen } from "./Sites/ScanScreen"
import { GenScreen } from "./Sites/GenScreen"

function App() {
  const [activeTab, setActiveTab] = useState("scan")

  return (
    <>
      <div className="flex flex-col h-[100dvh] overflow-hidden bg-gray-100">
        <div className="flex-1">
          {activeTab === "scan" ? <ScanScreen /> : <GenScreen />}
        </div>

        <nav className="flex items-center justify-around h-16 bg-white border-t">
          <button
            onClick={() => setActiveTab("scan")}
            className={`flex flex-col items-center text-sm ${activeTab === "scan" ? "text-blue-600" : "text-gray-500"}`}
          >
            <ScanQrCode size={24} />
            <span>Scan</span>
          </button>
          <button
            onClick={() => setActiveTab("generate")}
            className={`flex flex-col items-center text-sm ${activeTab === "generate" ? "text-blue-600" : "text-gray-500"}`}
          >
            <ImagePlus size={24} />
            <span>Generate</span>
          </button>
        </nav>
      </div>
    </>
  )
}

export default App
