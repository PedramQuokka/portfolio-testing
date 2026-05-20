import Head from 'next/head'

export default function CareNavOnboardingCaseStudy() {
  return (
    <>
      <Head>
        <title>CareNav Onboarding - Case Study</title>
        <meta
          name="description"
          content="A simple Figma testing page shown from the first case study card."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="relative min-h-screen bg-canvas text-ink">
        <section
          aria-label="Figma testing page"
          className="absolute left-1/2 top-[147px] flex w-[min(calc(100vw-32px),900px)] -translate-x-1/2 flex-col items-center justify-center gap-[10px] p-[10px] text-center text-[clamp(28px,6.25vw,64px)] leading-[normal] md:whitespace-nowrap"
        >
          <h1 className="font-black [font-family:Arial_Black,Arial,sans-serif]">
            This is a testing page
          </h1>
          <p className="font-normal [font-family:Roboto,Arial,sans-serif]">
            Here I will put more content
          </p>
        </section>
      </main>
    </>
  )
}
