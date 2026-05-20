import Head from 'next/head'

const caseStudies = [
  {
    title: 'CareNav onboarding',
    type: 'Mobile health',
    role: 'Lead UX designer',
    outcome: '+31% completed first appointment setup',
    prompt: 'Reduce anxiety for first-time patients booking virtual care.',
    notes: ['Discovery interviews', 'Journey map', 'Prototype tests'],
    accent: 'bg-sticky-yellow',
  },
  {
    title: 'Pulse research hub',
    type: 'B2B SaaS',
    role: 'Product designer',
    outcome: '2.4x faster insight retrieval for product teams',
    prompt: 'Make customer evidence easier to find, trust, and reuse.',
    notes: ['Taxonomy', 'Search flows', 'Design system'],
    accent: 'bg-sticky-mint',
  },
  {
    title: 'Checkout clarity sprint',
    type: 'E-commerce',
    role: 'UX strategist',
    outcome: '-18% checkout support tickets',
    prompt: 'Clarify fees, delivery timing, and account creation choices.',
    notes: ['Heuristic review', 'A/B variants', 'Content design'],
    accent: 'bg-sticky-peach',
  },
]

const processSteps = [
  {
    label: '01',
    title: 'Frame',
    copy: 'Turn a fuzzy request into user, business, and evidence questions.',
  },
  {
    label: '02',
    title: 'Map',
    copy: 'Lay out journeys, service moments, assumptions, and decision points.',
  },
  {
    label: '03',
    title: 'Prototype',
    copy: 'Create just enough fidelity to test language, behavior, and flow.',
  },
  {
    label: '04',
    title: 'Measure',
    copy: 'Ship with learning goals, success signals, and a clear iteration loop.',
  },
]

const skills = [
  'UX research',
  'Interaction design',
  'Design systems',
  'Workshop facilitation',
  'Information architecture',
  'Prototype testing',
  'Product strategy',
  'Content design',
]

const boardNotes = [
  { text: 'What changed for the user?', className: 'note-a' },
  { text: 'Show the messy middle.', className: 'note-b' },
  { text: 'Outcome before artifact.', className: 'note-c' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>UX Portfolio Template - FigJam Inspired</title>
        <meta
          name="description"
          content="A collaborative, whiteboard-inspired UX portfolio template for case studies, process work, and product design outcomes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-canvas text-ink">
        <nav className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
            <a href="#top" className="flex items-center gap-3 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-md border-2 border-ink bg-white shadow-solid">
                YN
              </span>
              <span>Your Name</span>
            </a>

            <div className="hidden items-center gap-6 text-sm text-ink-soft md:flex">
              <a className="transition hover:text-ink" href="#work">
                Work
              </a>
              <a className="transition hover:text-ink" href="#process">
                Process
              </a>
              <a className="transition hover:text-ink" href="#about">
                About
              </a>
              <a className="transition hover:text-ink" href="#contact">
                Contact
              </a>
            </div>

            <a
              className="rounded-md border-2 border-ink bg-ink px-4 py-2 text-sm font-semibold text-white shadow-solid transition hover:-translate-y-0.5"
              href="mailto:hello@example.com"
            >
              Email me
            </a>
          </div>
        </nav>

        <section
          id="top"
          className="canvas-grid relative overflow-hidden border-b border-ink/10 px-5 py-12 sm:px-8 lg:py-16"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-md border-2 border-ink bg-sticky-blue px-3 py-1 text-sm font-semibold shadow-solid">
                Product designer / UX researcher
              </p>
              <h1 className="text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
                Portfolio work that feels like a working board.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">
                A template for showing how you frame problems, run research, test ideas, and turn messy product questions into shipped experiences.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-md border-2 border-ink bg-ink px-5 py-3 text-center font-semibold text-white shadow-solid transition hover:-translate-y-0.5"
                  href="#work"
                >
                  View case studies
                </a>
                <a
                  className="rounded-md border-2 border-ink bg-white px-5 py-3 text-center font-semibold shadow-solid transition hover:-translate-y-0.5"
                  href="#process"
                >
                  See process
                </a>
              </div>
            </div>

            <div className="whiteboard-stage" aria-label="UX portfolio board preview">
              <div className="connector connector-one" />
              <div className="connector connector-two" />
              <div className="cursor-tag cursor-one">Research lead</div>
              <div className="cursor-tag cursor-two">PM</div>

              <div className="artifact-card artifact-main">
                <p className="text-sm font-semibold text-ink-soft">Case study frame</p>
                <h2 className="mt-2 text-2xl font-black">Problem to proof</h2>
                <div className="mt-5 space-y-3">
                  <div className="h-3 w-5/6 rounded-sm bg-ink/80" />
                  <div className="h-3 w-2/3 rounded-sm bg-ink/35" />
                  <div className="h-3 w-4/5 rounded-sm bg-ink/20" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <span className="h-14 rounded-md bg-sticky-yellow" />
                  <span className="h-14 rounded-md bg-sticky-mint" />
                  <span className="h-14 rounded-md bg-sticky-lilac" />
                </div>
              </div>

              {boardNotes.map((note) => (
                <div key={note.text} className={`sticky-note ${note.className}`}>
                  {note.text}
                </div>
              ))}

              <div className="stamp-card">
                <span className="stamp-dot bg-sticky-peach" />
                <span className="stamp-dot bg-sticky-blue" />
                <span className="stamp-dot bg-sticky-mint" />
                <strong>Evidence wins</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase text-ink-soft">Selected work</p>
                <h2 className="mt-2 text-4xl font-black sm:text-5xl">Case study starters</h2>
              </div>
              <p className="max-w-xl text-ink-soft">
                Replace these with your own projects. Each card is structured around context, role, outcome, and the artifacts that prove your design decisions.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {caseStudies.map((project) => (
                <article
                  className="case-card rounded-md border-2 border-ink bg-white p-5 shadow-solid transition hover:-translate-y-1"
                  key={project.title}
                >
                  <div className={`mb-5 h-40 rounded-md border-2 border-ink ${project.accent} p-4`}>
                    <div className="flex h-full flex-col justify-between">
                      <span className="w-max rounded-md border-2 border-ink bg-white px-2 py-1 text-sm font-bold">
                        {project.type}
                      </span>
                      <div className="space-y-2">
                        <div className="h-3 w-3/4 rounded-sm bg-ink/80" />
                        <div className="h-3 w-1/2 rounded-sm bg-ink/40" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-ink-soft">{project.role}</p>
                  <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                  <p className="mt-3 leading-7 text-ink-soft">{project.prompt}</p>
                  <p className="mt-5 rounded-md border-2 border-ink bg-highlighter px-3 py-2 font-bold">
                    {project.outcome}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.notes.map((note) => (
                      <span
                        className="rounded-md border border-ink/20 bg-paper px-3 py-1 text-sm text-ink-soft"
                        key={note}
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="canvas-grid border-y border-ink/10 px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase text-ink-soft">Process</p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">From open question to useful product decision.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map((step) => (
                <article className="process-card rounded-md border-2 border-ink bg-white p-5 shadow-solid" key={step.title}>
                  <span className="text-sm font-black text-ink-soft">{step.label}</span>
                  <h3 className="mt-5 text-2xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-ink-soft">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase text-ink-soft">About</p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">A practical designer for ambiguous product spaces.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-md border-2 border-ink bg-sticky-lilac p-6 shadow-solid">
                <h3 className="text-2xl font-black">Bio prompt</h3>
                <p className="mt-4 leading-7">
                  Write a short story about the customers you understand best, the teams you partner with, and the kind of product problems you want more of.
                </p>
              </article>
              <article className="rounded-md border-2 border-ink bg-white p-6 shadow-solid">
                <h3 className="text-2xl font-black">Toolkit</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span className="rounded-md border-2 border-ink bg-paper px-3 py-2 text-sm font-semibold" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-ink/10 bg-ink px-5 py-16 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">Contact</p>
              <h2 className="mt-2 max-w-2xl text-4xl font-black sm:text-5xl">Ready to turn the next ambiguous brief into a clearer experience.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md border-2 border-white bg-white px-5 py-3 text-center font-semibold text-ink shadow-solid-white transition hover:-translate-y-0.5"
                href="mailto:hello@example.com"
              >
                hello@example.com
              </a>
              <a
                className="rounded-md border-2 border-white px-5 py-3 text-center font-semibold transition hover:-translate-y-0.5"
                href="https://www.linkedin.com"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
