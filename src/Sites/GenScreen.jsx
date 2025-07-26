import { useState, useRef } from "react"
import QRCode from "react-qr-code"

export const GenScreen = () => {
  const [link, setLink] = useState("")
  const [qrValue, setQrValue] = useState("")
  const svgRef = useRef(null)

  const generateQRCode = () => {
    if (!link.trim()) return
    setQrValue(link.trim())
  }

  const downloadQRCode = () => {
    if (!svgRef.current) return

    const svgElement = svgRef.current.querySelector("svg")
    if (!svgElement) return

    const svgData = new XMLSerializer().serializeToString(svgElement)

    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(svgBlob)

    const canvas = document.createElement("canvas")
    const size = 256
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      ctx.clearRect(0, 0, size, size)
      ctx.drawImage(img, 0, 0, size, size)
      URL.revokeObjectURL(url)

      canvas.toBlob(blob => {
        if (!blob) return
        const pngUrl = URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = pngUrl
        a.download = "qrcode.png"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        URL.revokeObjectURL(pngUrl)
      })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  return (
    <>
      <div className="flex items-center justify-center flex-1 p-4 pt-8 text-2xl">
        Generate a QR-Code with a link
      </div>

      <div className="flex flex-wrap items-center justify-center max-w-5xl gap-2.5 px-2 m-2 mx-auto">
        <input
          type="text"
          placeholder="Enter your link here"
          className="flex-1 min-w-[250px] p-3 border border-gray-200 rounded-lg"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <button
          className="w-full px-4 py-3 text-white bg-blue-600 rounded sm:w-auto"
          onClick={generateQRCode}
        >
          Generate QR Code
        </button>
      </div>

      <div className="box-border w-full max-w-5xl px-2 py-2 mx-auto mt-6 rounded ">
        {qrValue && (
          <div className="flex flex-col items-center w-full gap-6 py-4 bg-gray-200 rounded-md ">
            <div ref={svgRef} className="w-full max-w-xs mx-auto sm:max-w-md">
              <QRCode value={qrValue} className="w-full aspect-square" />
            </div>

            <button
              onClick={downloadQRCode}
              className="w-64 py-3 text-white transition-colors duration-200 bg-green-600 rounded hover:bg-green-700"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </>
  )
}
