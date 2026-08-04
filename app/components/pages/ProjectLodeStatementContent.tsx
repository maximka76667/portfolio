export default function ProjectLodeStatementContent() {
  return (
    <div className="w-full flex justify-center px-6">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-20 max-w-[1600px]">
        <div
          className="bg-zinc-200 rounded-lg flex items-center justify-center w-full md:w-[clamp(320px,42vw,700px)] max-w-full overflow-hidden shrink-0"
          style={{ aspectRatio: "1/1" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/lode/board.jpg"
            alt="Lode sensor board"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-foreground text-lg sm:text-xl 3xl:text-3xl font-medium max-w-[clamp(280px,36vw,680px)] space-y-6">
          <h3 className="font-display text-accent text-3xl sm:text-4xl 3xl:text-5xl leading-tight">
            » Full stack, my board «
          </h3>
          <p>
            I built the{" "}
            <strong className="text-accent bg-accent/10 px-1 rounded-sm">
              whole infrastructure myself
            </strong>{" "}
            — the STM32 board reading the sensors, the firmware, the
            server, and the dashboard that streams it all live.
          </p>
        </div>
      </div>
    </div>
  );
}
