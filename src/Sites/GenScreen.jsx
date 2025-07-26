export const GenScreen = () => (
  <>
    <div className="flex items-center justify-center flex-1 p-4 pt-8 text-2xl">
      Generate a QR-Code with a link
    </div>
    <div className="flex flex-wrap items-center justify-center max-w-5xl gap-2.5 px-2 m-2 mx-auto">
      <input
        type="text"
        placeholder="Enter your link here"
        className="flex-1 min-w-[250px] p-3 border border-gray-200 rounded-lg"
      />
      <button className="w-full px-4 py-3 text-white bg-blue-600 rounded sm:w-auto">
        Generate QR Code
      </button>
    </div>
  </>
)
