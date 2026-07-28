export default function ContactContent() {
  return (
    <div className="flex flex-col items-center gap-4 text-center px-6">
      <p className="text-white text-2xl sm:text-4xl font-medium max-w-2xl">
        I hope you enjoyed this little journey. You finished it in 5 minutes,
        but for me there were years of hard work.
      </p>
      <p className="text-white text-lg sm:text-xl mt-4">Maxim Grivennyy</p>
      <div className="flex flex-col gap-1 text-white/70 text-base sm:text-lg">
        <a href="mailto:maximgriven@gmail.com" className="hover:text-white">
          maximgriven@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/maximgriven"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          linkedin.com/in/maximgriven
        </a>
        <a
          href="https://github.com/maximka76667"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          github.com/maximka76667
        </a>
      </div>
    </div>
  );
}
