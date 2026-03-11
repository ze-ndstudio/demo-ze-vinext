import Image from "next/image";
import homepage from "@/content/homepage.json";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_30px_80px_rgba(36,28,21,0.08)] backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a5d2f]">
            {homepage.eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-[#1f312d] sm:text-5xl lg:text-6xl">
            {homepage.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4b5d58] sm:text-xl">
            {homepage.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#1f312d] px-4 py-2 text-sm font-medium text-white">
              Powered by `.pages.yml`
            </span>
            <span className="rounded-full bg-[#efe2c5] px-4 py-2 text-sm font-medium text-[#7a4b1f]">
              Content file: `content/homepage.json`
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-black/8 bg-[#fcfaf5] p-4">
              <p className="text-sm font-semibold text-[#1f312d]">1. Configure</p>
              <p className="mt-2 text-sm leading-6 text-[#5d6f6a]">
                `.pages.yml` defines the editor fields and media folder.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-black/8 bg-[#fcfaf5] p-4">
              <p className="text-sm font-semibold text-[#1f312d]">2. Edit</p>
              <p className="mt-2 text-sm leading-6 text-[#5d6f6a]">
                Pages CMS writes updates into your repo content files.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-black/8 bg-[#fcfaf5] p-4">
              <p className="text-sm font-semibold text-[#1f312d]">3. Render</p>
              <p className="mt-2 text-sm leading-6 text-[#5d6f6a]">
                The Next app reads that file and shows the latest content.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f1e5] p-4 shadow-[0_24px_60px_rgba(36,28,21,0.10)] sm:p-5">
          {homepage.image ? (
            <Image
              src={homepage.image}
              alt={homepage.imageAlt}
              width={1200}
              height={900}
              priority
              className="h-auto w-full rounded-[1.5rem] border border-black/8 bg-white object-cover"
            />
          ) : (
            <div className="flex min-h-[22rem] items-center justify-center rounded-[1.5rem] border border-dashed border-black/10 bg-white text-center text-sm text-[#5d6f6a]">
              Add an image in Pages CMS to preview it here.
            </div>
          )}

          <div className="absolute left-8 right-8 bottom-8 rounded-[1.5rem] bg-[#16322f] p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:left-10 sm:right-10 sm:bottom-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2c66d]">
              What to edit in the CMS
            </p>
            <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
              Open the <strong>Home Page</strong> entry, change the title or description,
              upload a new feature image, and save. Pages CMS updates the repo files;
              this page simply renders those saved values.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
