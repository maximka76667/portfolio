export default function ContactContent() {
  return (
    <div className="flex flex-col items-center gap-8 text-center px-6">
      <h1 className="font-display text-background text-2xl sm:text-4xl font-medium max-w-2xl">
        I hope you enjoyed this little journey. You experienced it in 5 minutes,
        but for me there were years of hard work.
      </h1>
      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-background/10 flex items-center justify-center text-background/50 text-xs sm:text-sm mt-4">
        photo placeholder
      </div>
      <p className="text-background text-lg sm:text-xl">Maxim Grivennyy</p>
      <div className="flex flex-col gap-1 text-background/70 text-base sm:text-lg">
        <a
          href="mailto:maximgriven@gmail.com"
          className="hover:text-background"
        >
          maximgriven@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/maximgriven"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-background"
        >
          linkedin.com/in/maximgriven
        </a>
        <a
          href="https://github.com/maximka76667"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-background"
        >
          github.com/maximka76667
        </a>
      </div>
    </div>
  );
}
