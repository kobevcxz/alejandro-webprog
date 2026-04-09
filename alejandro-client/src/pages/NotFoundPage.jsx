import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-12 text-center">
        <h1 className="text-5xl font-bold text-zinc-900 mb-4">
          404
        </h1>
        <p className="text-lg text-zinc-600 mb-6">
          Page Not Found
        </p>
        <p className="text-sm text-zinc-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex justify-center">
          <Button to="/">Go Back Home</Button>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;