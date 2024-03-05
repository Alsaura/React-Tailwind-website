const Portofolio = () => {
  return (
    <>
      <div className="flex items-center justify-around">
        <div className="flex items-center bg-transparent p-5">
          <img
            className="w-30 mr-5 h-16 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/D5603AQHrWv4VtTI2ww/profile-displayphoto-shrink_200_200/0/1675255055295?e=2147483647&v=beta&t=leg_p2jE6lg6HVEXUg-MW4KI14zpSmPEp-bMDXP5cIw"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-lg">
            <p className="font-bold leading-none text-blue-900">
              Alsaura Alifi Siddik
            </p>
            <p className="text-sm text-gray-600">Graphic Design</p>
          </div>
        </div>
        <div className="">
          <button
            type="button"
            className="mb-2 me-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-4 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Hire Me
          </button>
        </div>
      </div>
      <div className="flex h-auto w-full max-w-xs flex-row flex-wrap gap-4 p-4 pt-6">
        <h1 className="p-0">Adobe Photoshop</h1>
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2.5 rounded-full bg-blue-600"
            style={{ width: "80%" }}
          />
        </div>
        <h1 className="p-0">Adobe Premier</h1>
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2.5 rounded-full bg-blue-600"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Portofolio;
