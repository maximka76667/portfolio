import TextHighlight from "../ui/TextHighlight";

export default function ProjectHyperloopTeamContent() {
  return (
    <div className="w-full flex justify-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 max-w-[1600px]">
        <div
          className="bg-zinc-200 rounded-lg flex items-center justify-center w-full md:w-[clamp(400px,55vw,1000px)] max-w-full overflow-hidden shrink-0"
          style={{ aspectRatio: "3/2" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/hyperloop/team.jpg"
            alt="Hyperloop UPV team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-foreground text-lg sm:text-xl 3xl:text-3xl font-medium max-w-[clamp(280px,36vw,680px)] space-y-6">
          <h3 className="font-display text-accent text-3xl sm:text-4xl 3xl:text-5xl leading-tight">
            » European Hyperloop Week «
          </h3>
          <p>
            This was one of the parts that helped us take{" "}
            <TextHighlight>second place</TextHighlight>{" "}
            at{" "}
            <a
              href="https://www.hyperloopweek.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:no-underline"
            >
              EHW
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
