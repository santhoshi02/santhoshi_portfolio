import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background/80 to-primary/10 px-4">
      <section className="relative max-w-xl w-full rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] px-6 py-10 sm:px-10 sm:py-12 text-center overflow-hidden">
        {/* Soft glow */}
        <div className="pointer-events-none absolute -top-24 -right-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-secondary/25 blur-3xl" />

        {/* Floating hearts */}
        {/* <span className="absolute left-6 top-10 text-2xl sm:text-3xl animate-bounce opacity-80">
          ❤️
        </span>
        <span className="absolute right-10 bottom-8 text-xl sm:text-2xl animate-pulse opacity-80">
          💜
        </span> */}

        {/* Emoji */}
        <div className="relative mx-auto mb-6 sm:mb-8 h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/40 animate-bounce">
          <img
            src="cute_emoji.jpg"
            alt="Sad cute emoji"
            className="object-contain drop-shadow-[0_0_25px_rgba(0,0,0,0.45)] rounded-full"
          />
        </div>

        {/* Text */}
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground/80 mb-3">
          Oops, page not found
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Lost in the code?
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-8">
          The page you’re looking for doesn’t exist or has been moved.
          <br className="hidden sm:block" />  
          Let’s take you back to a safe place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm sm:text-base font-medium text-primary-foreground shadow-lg shadow-primary/40 transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90"
          >
            Go back home
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-card/40 px-8 py-3 text-sm sm:text-base font-medium text-primary transition-all duration-200 hover:bg-primary/10 hover:border-primary/70"
          >
            View my projects
          </Link>
        </div>

        {/* Tiny note */}
        <p className="mt-6 text-xs text-muted-foreground/80">
          It’s okay, even perfect code gets a little lost sometimes ✨
        </p>
      </section>
    </main>
  )
}
