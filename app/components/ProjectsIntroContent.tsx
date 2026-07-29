export default function ProjectsIntroContent() {
  return (
    <>
      <h1 className="font-display mt-auto mb-10 text-black text-3xl sm:text-5xl font-medium text-center px-6">
        My Projects
      </h1>
      <div className="mx-12 mb-12 h-[55vh] flex overflow-hidden rounded-lg">
        {/* Hyperloop Control Station — top-left corner */}
        <div className="group relative w-1/2 h-full bg-black overflow-hidden">
          <div className="absolute top-0 left-0 p-6 flex flex-col items-start">
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
              <div className="overflow-hidden">
                <p className="mb-2 text-white text-sm sm:text-base text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Hyperloop Control Station description — coming soon
                </p>
              </div>
            </div>
            <p className="text-white text-lg sm:text-2xl font-medium">
              Hyperloop Control Station
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          {/* swiss-kyle — top-right corner */}
          <div className="group relative h-1/2 w-full bg-white overflow-hidden">
            <div className="absolute top-0 right-0 p-6 flex flex-col items-end">
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
                <div className="overflow-hidden">
                  <p className="mb-2 text-black text-sm sm:text-base text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    swiss-kyle description — coming soon
                  </p>
                </div>
              </div>
              <p className="text-black text-base sm:text-xl font-medium">
                swiss-kyle
              </p>
            </div>
          </div>
          {/* Lode — bottom-right corner */}
          <div className="group relative h-1/2 w-full bg-zinc-800 overflow-hidden">
            <div className="absolute bottom-0 right-0 p-6 flex flex-col items-end">
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
                <div className="overflow-hidden">
                  <p className="mb-2 text-white text-sm sm:text-base text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Lode description — coming soon
                  </p>
                </div>
              </div>
              <p className="text-white text-base sm:text-xl font-medium">
                Lode
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
