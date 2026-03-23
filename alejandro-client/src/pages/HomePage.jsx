import Button from "../components/Button";
import anime1 from "../assets/image/top.jpg";
import anime2 from "../assets/image/topanime.jpeg";
import anime3 from "../assets/image/OnePiece.jpg";
import anime4 from "../assets/image/OnePiece.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">
      
      <section className="relative z-10 border-y-2 border-zinc-900 bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Anime Hub
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to AnimeHub
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Explore popular anime series, characters, and recommendations. 
              Discover new shows and learn more about your favorite anime.
            </p>

            <div className="mt-8">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div>
            <img
              src={anime1}
              alt="anime"
              className="rounded-3xl border-2 border-zinc-300 w-full object-cover"
            />
          </div>

        </div>
      </section>

      <section className="relative -mt-[2px] border-y-2 border-zinc-900 bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Anime Stats
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Anime Overview
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6">
            <p className="text-3xl font-bold text-zinc-900">100+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Anime Series
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6">
            <p className="text-3xl font-bold text-zinc-900">50+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Characters
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6">
            <p className="text-3xl font-bold text-zinc-900">20+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Reviews
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6">
            <p className="text-3xl font-bold text-zinc-900">Daily</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Updates
            </p>
          </div>

        </div>
      </section>

      <section className="relative -mt-[2px] border-y-2 border-zinc-900 bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Anime Features
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Anime Content
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[anime2, anime3, anime4].map((img, index) => (
            <article key={index} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              
              <img
                src={img}
                alt="anime"
                className="rounded mb-3 w-full h-100 object-cover"
              />

              <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                {index === 0 && "Anime Recommendations"}
                {index === 1 && "Character Highlights"}
                {index === 2 && "Anime Reviews"}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {index === 0 && "Discover popular and trending anime to watch."}
                {index === 1 && "Learn more about your favorite anime characters."}
                {index === 2 && "Read simple reviews and summaries of anime series."}
              </p>

              <Button className="mt-6 w-full" variant="primary">
                View More
              </Button>
            </article>
          ))}
        </div>

      </section>

    </div>
  );
};

export default HomePage;