import { Camera, Copy } from "lucide-react"

export const ScanScreen = () => (
  <>
    <div className="flex items-center justify-center flex-1 p-4 pt-8 text-2xl">
      Scan a QR-Code
    </div>
    <div className="flex flex-col items-center justify-center px-6">
      <button className="flex items-center justify-center w-full max-w-sm bg-gray-300 rounded-lg aspect-square">
        <Camera size={256} />
      </button>
      <button className="w-full max-w-sm py-4 mt-3 text-white bg-blue-600 rounded">
        Upload
      </button>
      <section className="flex items-center justify-between w-full h-auto max-w-sm px-3 mt-3 bg-gray-300 rounded max-h-xl">
        <p className="flex-1 py-4 mr-3 overflow-hidden break-words">
          gAQyBwgHEAAYgAQyBwgIEAAY7wXSAQg0NzEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
        </p>
        <Copy className="flex-shrink-0 w-6 h-6 cursor-pointer" />
      </section>
    </div>
  </>
)
