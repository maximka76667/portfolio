type ProjectsIntroContentProps = {
  onSelectHyperloop: () => void;
  onSelectSwissKyle: () => void;
  onSelectLode: () => void;
};

export default function ProjectsIntroContent({
  onSelectHyperloop,
  onSelectSwissKyle,
  onSelectLode,
}: ProjectsIntroContentProps) {
  return (
    <>
      <h1 className="font-display mt-16 md:mt-auto mb-6 md:mb-10 text-foreground text-3xl sm:text-5xl font-medium text-center px-6">
        My Projects
      </h1>
      <div className="mx-6 mb-6 flex flex-1 flex-col gap-2 overflow-hidden rounded-lg md:mx-12 md:mb-12 md:h-[55vh] md:flex-none md:flex-row md:gap-0">
        {/* Hyperloop Control Station — top-left corner */}
        <div
          onClick={onSelectHyperloop}
          className="group relative flex-1 w-full bg-foreground overflow-hidden cursor-pointer md:h-full md:w-1/2 md:flex-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/hyperloop/thumbnail.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75 md:bg-foreground/95 md:group-hover:bg-foreground/75 transition-colors duration-300" />
          <div className="absolute top-0 left-0 p-4 md:p-6 flex flex-col items-start">
            <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
              <div className="overflow-hidden">
                <p className="mb-2 text-background text-sm sm:text-base text-left opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  Cross-platform mission control for a Hyperloop vehicle.
                </p>
              </div>
            </div>
            <p className="text-background text-lg sm:text-2xl font-medium">
              Hyperloop Control Station
            </p>
          </div>
        </div>
        <div className="contents md:flex md:h-full md:w-1/2 md:flex-col">
          {/* swiss-kyle */}
          <div
            onClick={onSelectSwissKyle}
            className="group relative flex-1 w-full bg-background overflow-hidden cursor-pointer md:h-1/2 md:flex-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/swiss-kyle/thumbnail.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/75 md:bg-background/95 md:group-hover:bg-background/75 transition-colors duration-300" />
            <div className="absolute top-0 left-0 p-4 md:p-6 md:right-0 md:left-auto flex flex-col items-start md:items-end">
              <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
                <div className="overflow-hidden">
                  <p className="mb-2 text-foreground text-sm sm:text-base text-left md:text-right opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    A swiss army knife for your PC.
                  </p>
                </div>
              </div>
              <p className="text-foreground text-base sm:text-xl font-medium">
                Swiss Kyle
              </p>
            </div>
          </div>
          {/* Lode */}
          <div
            onClick={onSelectLode}
            className="group relative flex-1 w-full bg-accent overflow-hidden cursor-pointer md:h-1/2 md:flex-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/lode/thumbnail.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/75 md:bg-accent/95 md:group-hover:bg-accent/75 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 p-4 md:p-6 md:right-0 md:left-auto flex flex-col items-start md:items-end">
              <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
                <div className="overflow-hidden">
                  <p className="mb-2 text-background text-sm sm:text-base text-left md:text-right opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    Live sensor data of my room, straight from the board.
                  </p>
                </div>
              </div>
              <p className="text-background text-base sm:text-xl font-medium">
                Lode
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
