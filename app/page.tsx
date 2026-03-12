import Image from "next/image";
import homepage from "@/content/homepage.json";

export default function Home() {
  const products = homepage.products ?? [];

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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

            <div className="absolute right-8 bottom-8 left-8 rounded-[1.5rem] bg-[#16322f] p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:right-10 sm:bottom-10 sm:left-10">
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

        <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_30px_80px_rgba(36,28,21,0.08)] backdrop-blur sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9a5d2f]">
                {homepage.productsEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1f312d] sm:text-4xl">
                {homepage.productsTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4b5d58] sm:text-lg">
                {homepage.productsDescription}
              </p>
            </div>

            <div className="rounded-full bg-[#f7f1e5] px-4 py-2 text-sm font-medium text-[#7a4b1f]">
              Drag to browse
            </div>
          </div>

          <div className="mt-8 -mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-3">
            {products.map((product) => (
              <article
                key={`${product.name}-${product.category}`}
                className="flex min-w-[17.5rem] snap-start flex-col rounded-[1.75rem] border border-black/8 bg-[#fcfaf5] p-4 shadow-[0_14px_32px_rgba(36,28,21,0.08)] sm:min-w-[19rem] lg:min-w-[20rem]"
              >
                <div
                  className="relative h-44 overflow-hidden rounded-[1.25rem]"
                  style={{
                    background: `linear-gradient(135deg, ${product.accent} 0%, rgba(255,255,255,0.96) 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.65),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(22,50,47,0.22),transparent_38%)]" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#16322f]">
                      {product.category}
                    </span>
                    {product.badge ? (
                      <span className="rounded-full bg-[#16322f] px-3 py-1 text-xs font-semibold text-white">
                        {product.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-[#16322f]">
                      {product.price}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#1f312d]">
                    {product.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#5d6f6a] sm:text-base">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
