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
      <h1 className="font-display mt-auto mb-10 text-foreground text-3xl sm:text-5xl font-medium text-center px-6">
        My Projects
      </h1>
      <div className="mx-12 mb-12 h-[55vh] flex overflow-hidden rounded-lg">
        {/* Hyperloop Control Station — top-left corner */}
        <div
          onClick={onSelectHyperloop}
          className="group relative w-1/2 h-full bg-foreground overflow-hidden cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/hyperloop/thumbnail.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/95 group-hover:bg-foreground/75 transition-colors duration-300" />
          <div className="absolute top-0 left-0 p-6 flex flex-col items-start">
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
              <div className="overflow-hidden">
                <p className="mb-2 text-background text-sm sm:text-base text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Cross-platform mission control for a Hyperloop vehicle.
                </p>
              </div>
            </div>
            <p className="text-background text-lg sm:text-2xl font-medium">
              Hyperloop Control Station
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          {/* swiss-kyle — top-right corner */}
          <div
            onClick={onSelectSwissKyle}
            className="group relative h-1/2 w-full bg-background overflow-hidden cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/swiss-kyle/thumbnail.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/95 group-hover:bg-background/75 transition-colors duration-300" />
            <div className="absolute top-0 right-0 p-6 flex flex-col items-end">
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
                <div className="overflow-hidden">
                  <p className="mb-2 text-foreground text-sm sm:text-base text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    A swiss army knife for your PC.
                  </p>
                </div>
              </div>
              <p className="text-foreground text-base sm:text-xl font-medium">
                swiss-kyle
              </p>
            </div>
          </div>
          {/* Lode — bottom-right corner */}
          <div
            onClick={onSelectLode}
            className="group relative h-1/2 w-full bg-accent overflow-hidden cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/lode/thumbnail.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/95 group-hover:bg-accent/75 transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 p-6 flex flex-col items-end">
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 w-64 max-w-xs">
                <div className="overflow-hidden">
                  <p className="mb-2 text-background text-sm sm:text-base text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
