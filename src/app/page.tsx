import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-16 sm:px-8">
        <div className="flex items-center gap-4">
          <Image
            className="hidden dark:block"
            src="/images/logo/logo-dark.svg"
            alt="RTDex"
            width={200}
            height={40}
            priority
          />
          <Image
            className="block dark:hidden"
            src="/images/logo/logo.svg"
            alt="RTDex"
            width={200}
            height={40}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            RTDex: Real-Time Data Explorers
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Leverage blockchain intelligence from TRM, advanced analytics from
            Finster AI, and comprehensive data capabilities from Senso. All
            running on Parallel's distributed compute infrastructure for
            real-time exploration and analysis.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#explore"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-8 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Start Exploring
          </a>
          <a
            href="#learn"
            className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-zinc-900 px-8 text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
