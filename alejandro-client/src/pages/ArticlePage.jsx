import Button from "../components/Button";
import anime1 from "../assets/image/OnePiece.jpg";
import anime2 from "../assets/image/OnePiece.jpg";
import anime3 from "../assets/image/OnePiece.jpg";
import anime4 from "../assets/image/OnePiece.jpg";

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Anime Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Explore anime recommendations and reviews
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Discover different anime series, popular characters, and simple reviews
          to help you find what to watch next.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Anime
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Anime article list
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <img
              src={anime1}
              alt="anime"
              className="rounded mb-3 w-full object-cover"
            />

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 01
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Top Anime for Beginners
            </h3>

            <p className="mt-3 text-sm text-zinc-600">
              Start watching anime with popular and easy-to-follow series.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <img
              src={anime2}
              alt="anime"
              className="rounded mb-3 w-full object-cover"
            />

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 02
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Best Anime Characters
            </h3>

            <p className="mt-3 text-sm text-zinc-600">
              Discover some of the most popular anime characters of all time.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <img
              src={anime3}
              alt="anime"
              className="rounded mb-3 w-full object-cover"
            />

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 03
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Popular Anime Genres
            </h3>

            <p className="mt-3 text-sm text-zinc-600">
              Learn about different anime genres like action, romance, and fantasy.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <img
              src={anime4}
              alt="anime"
              className="rounded mb-3 w-full object-cover"
            />

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 04
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Why Anime is Popular
            </h3>

            <p className="mt-3 text-sm text-zinc-600">
              Explore why anime has become popular worldwide among fans.
            </p>

            <Button className="mt-4">Read More</Button>
          </article>

        </div>
      </section>

    </div>
  );
};

export default ArticlePage;