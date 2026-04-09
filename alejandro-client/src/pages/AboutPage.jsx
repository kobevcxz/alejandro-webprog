import Button from "../components/Button";
import anime1 from "../assets/image/OnePiece.jpg";
import anime2 from "../assets/image/alot.png";
import anime3 from "../assets/image/OnePiece.jpg";
import anime4 from "../assets/image/OnePiece.jpg";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div>
            <img
              src={anime2}
              alt="anime"
              className="rounded-3xl border-2 border-zinc-300 w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About AnimeHub
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A simple website for anime fans
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              AnimeHub is created to help users explore anime series, characters,
              and recommendations. It provides simple and organized information
              for fans who want to discover new anime.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Anime Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick summary
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">100+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Anime Series
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">50+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Characters
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">20+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Reviews
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">Daily</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Updates
            </p>
          </div>

        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Anime Content
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Explore AnimeHub Features
            </h2>

            <div className="mt-6 space-y-4">
              
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Anime Recommendations
                </h3>
                <p className="mt-3 text-sm text-zinc-600">
                  Find new anime series based on popularity and genre.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Character Information
                </h3>
                <p className="mt-3 text-sm text-zinc-600">
                  Learn more about your favorite anime characters.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Anime Reviews
                </h3>
                <p className="mt-3 text-sm text-zinc-600">
                  Read simple reviews and summaries of anime series.
                </p>
              </article>

            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Gallery
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[anime1, anime3, anime4, anime1].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="anime"
                  className="rounded-[1.25rem] w-full object-cover"
                />
              ))}
            </div>

            <Button className="mt-5">View Section</Button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;