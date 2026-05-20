import Head from 'next/head'
import Link from 'next/link'

type OverviewItem = {
  label: string
  value: string
}

type ProcessPhase = {
  number: string
  title: string
  summary: string
  evidence: string
  notes: string[]
  accent: string
}

type Artifact = {
  title: string
  description: string
  accent: string
}

const overview: OverviewItem[] = [
  { label: 'Role', value: 'Lead UX designer' },
  { label: 'Scope', value: 'Mobile app + in-car screen' },
  { label: 'Methods', value: 'Competitive scan, proto persona, journey map, prototype' },
  { label: 'Outcome', value: 'A testable service concept for lower-friction autonomous rides' },
]

const userNeeds = [
  'Move from A to B with less planning and cognitive load.',
  'Reserve a ride now or schedule one for a later trip.',
  'Filter vehicles by practical needs like pets, storage, climate, and route speed.',
  'Combine autonomous rides with public transportation when it creates a better commute.',
]

const processPhases: ProcessPhase[] = [
  {
    number: '01',
    title: 'Background',
    summary:
      'Frame the shift from car ownership toward mobility as a service, then name why autonomous vehicles change the experience, business model, and sustainability conversation.',
    evidence: 'Use this block for market context, service constraints, and why the work matters now.',
    notes: ['Market shift', 'Service model', 'Sustainability'],
    accent: 'bg-sticky-blue',
  },
  {
    number: '02',
    title: 'Brief',
    summary:
      'Translate the broad opportunity into a focused product brief: a person does not need to own a car, but still needs a dependable, personal, and low-effort mobility service.',
    evidence: 'Use this block for problem statement, assumptions, audience, and success signals.',
    notes: ['Problem statement', 'Assumptions', 'Success signal'],
    accent: 'bg-sticky-yellow',
  },
  {
    number: '03',
    title: 'Empathy',
    summary:
      'Study direct and indirect competitors, read user feedback, and identify service behaviors that could reduce friction before, during, and after a trip.',
    evidence: 'Use this block for competitor groups, review themes, interview notes, or discovery snapshots.',
    notes: ['Direct competitors', 'Indirect competitors', 'Review themes'],
    accent: 'bg-sticky-mint',
  },
  {
    number: '04',
    title: 'Define',
    summary:
      'Make the core user need explicit: commuting should feel predictable, personal, and easy to control without adding more decisions to the day.',
    evidence: 'Use this block for proto personas, needs, edge cases, and the prioritized opportunity.',
    notes: ['Proto persona', 'User needs', 'Opportunity'],
    accent: 'bg-sticky-peach',
  },
  {
    number: '05',
    title: 'Ideate',
    summary:
      'Move from insight to structure with a commute journey, mobile wireframes, and an in-car interface that connects account, calendar, comfort, and trip controls.',
    evidence: 'Use this block for journey maps, flow diagrams, sketches, and early wireframes.',
    notes: ['Journey map', 'App wireframes', 'Car-screen wireframes'],
    accent: 'bg-sticky-lilac',
  },
  {
    number: '06',
    title: 'Prototype',
    summary:
      'Turn the concept into a tangible story: home, trip planning, filters, ordered ride state, QR login, and a personalized in-car screen.',
    evidence: 'Use this block for final screens, prototype links, testing notes, and iteration decisions.',
    notes: ['Home tab', 'Trip tab', 'Car screen'],
    accent: 'bg-white',
  },
]

const artifacts: Artifact[] = [
  {
    title: 'Competitive map',
    description: 'Direct and indirect services, grouped by what users can borrow from each model.',
    accent: 'bg-sticky-mint',
  },
  {
    title: 'Proto persona',
    description: 'The assumed commuter, their mobility needs, and moments where confidence can break.',
    accent: 'bg-sticky-yellow',
  },
  {
    title: 'Journey map',
    description: 'A morning commute from planning to pickup, ride control, and arrival handoff.',
    accent: 'bg-sticky-blue',
  },
  {
    title: 'Prototype frames',
    description: 'Mobile and car-screen states that show the service working across touchpoints.',
    accent: 'bg-sticky-peach',
  },
]

const prototypeScreens = [
  'Home tab',
  'Trip planning',
  'Vehicle filters',
  'Ride in progress',
  'QR login',
  'Personalized car screen',
]

export default function CaseStudyTemplate() {
  return (
    <>
      <Head>
        <title>Case Study Template - UX Portfolio</title>
        <meta
          name="description"
          content="A whiteboard-inspired UX case study template for showing background, brief, research, definition, ideation, prototype, and outcome."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-canvas text-ink">
        <nav className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
            <Link className="flex items-center gap-3 font-semibold" href="/">
              <span className="grid h-9 w-9 place-items-center rounded-md border-2 border-ink bg-white shadow-solid">
                YN
              </span>
              <span>Your Name</span>
            </Link>

            <div className="hidden items-center gap-6 text-sm text-ink-soft md:flex">
              <a className="transition hover:text-ink" href="#overview">
                Overview
              </a>
              <a className="transition hover:text-ink" href="#process">
                Process
              </a>
              <a className="transition hover:text-ink" href="#prototype">
                Prototype
              </a>
            </div>

            <Link
              className="rounded-md border-2 border-ink bg-ink px-4 py-2 text-sm font-semibold text-white shadow-solid transition hover:-translate-y-0.5"
              href="/#work"
            >
              Back to work
            </Link>
          </div>
        </nav>

        <section className="canvas-grid overflow-hidden border-b border-ink/10 px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-5 inline-flex rounded-md border-2 border-ink bg-sticky-yellow px-3 py-1 text-sm font-semibold shadow-solid">
                Case study template
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
                Designing mobility as a service with autonomous cars.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">
                A reusable case-study structure inspired by a mobility project: start with the market shift, define the commute problem, show the research path, and land on a prototype story.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-md border-2 border-ink bg-ink px-5 py-3 text-center font-semibold text-white shadow-solid transition hover:-translate-y-0.5"
                  href="#process"
                >
                  Read the process
                </a>
                <a
                  className="rounded-md border-2 border-ink bg-white px-5 py-3 text-center font-semibold shadow-solid transition hover:-translate-y-0.5"
                  href="#template"
                >
                  Use the template
                </a>
              </div>
            </div>

            <div className="relative min-h-[560px]" aria-label="Case study board preview">
              <div className="absolute inset-x-4 top-10 h-[460px] rotate-[-1deg] rounded-md border-2 border-dashed border-ink/30" />

              <article className="absolute left-0 top-20 w-[min(420px,78%)] rotate-[-2deg] rounded-md border-2 border-ink bg-white p-6 shadow-solid">
                <p className="text-sm font-bold text-ink-soft">Problem frame</p>
                <h2 className="mt-2 text-3xl font-black">Make autonomous commuting feel personal, predictable, and low effort.</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <span className="h-16 rounded-md border-2 border-ink bg-sticky-blue" />
                  <span className="h-16 rounded-md border-2 border-ink bg-sticky-mint" />
                  <span className="h-16 rounded-md border-2 border-ink bg-sticky-peach" />
                </div>
              </article>

              <div className="absolute right-2 top-8 grid h-36 w-44 place-items-center rotate-[5deg] rounded-md border-2 border-ink bg-sticky-yellow p-4 text-center text-xl font-black leading-6 shadow-solid">
                Show the service, not only screens.
              </div>

              <div className="absolute bottom-20 right-8 w-[250px] rotate-[3deg] rounded-md border-2 border-ink bg-white p-4 shadow-solid">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-md border-2 border-ink bg-sticky-lilac px-2 py-1 text-sm font-black">A to B</span>
                  <span className="h-3 flex-1 border-t-2 border-dashed border-ink" />
                  <span className="rounded-md border-2 border-ink bg-sticky-mint px-2 py-1 text-sm font-black">Work</span>
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-3 w-4/5 rounded-sm bg-ink/80" />
                  <div className="h-3 w-3/5 rounded-sm bg-ink/30" />
                  <div className="h-3 w-2/3 rounded-sm bg-ink/20" />
                </div>
              </div>

              <div className="absolute bottom-6 left-16 grid h-32 w-40 place-items-center rotate-[-5deg] rounded-md border-2 border-ink bg-sticky-blue p-4 text-center text-lg font-black leading-6 shadow-solid">
                Evidence before polish.
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase text-ink-soft">Overview</p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">Start with the case in one scan.</h2>
              <p className="mt-4 text-lg leading-8 text-ink-soft">
                This section gives hiring managers and collaborators the essentials before they read the full story.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {overview.map((item) => (
                <article className="rounded-md border-2 border-ink bg-white p-5 shadow-solid" key={item.label}>
                  <p className="text-sm font-black uppercase text-ink-soft">{item.label}</p>
                  <p className="mt-4 text-2xl font-black leading-8">{item.value}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              <article className="rounded-md border-2 border-ink bg-sticky-lilac p-6 shadow-solid">
                <p className="text-sm font-bold uppercase text-ink-soft">Project brief</p>
                <h3 className="mt-3 text-3xl font-black">Design for a user who needs mobility, not ownership.</h3>
                <p className="mt-4 leading-7">
                  Use this card to explain the business shift, the assumed user, the service touchpoints, and the constraints that shaped the project.
                </p>
              </article>

              <article className="rounded-md border-2 border-ink bg-white p-6 shadow-solid">
                <p className="text-sm font-bold uppercase text-ink-soft">User needs</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {userNeeds.map((need) => (
                    <p className="rounded-md border-2 border-ink bg-canvas p-4 font-semibold leading-6" key={need}>
                      {need}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="process" className="canvas-grid border-y border-ink/10 px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase text-ink-soft">Process</p>
                <h2 className="mt-2 text-4xl font-black sm:text-5xl">A repeatable story arc for case studies.</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-ink-soft">
                Each phase has a narrative job: say what you learned, what changed, and which artifact made the decision clearer.
              </p>
            </div>

            <div className="grid gap-5">
              {processPhases.map((phase) => (
                <article
                  className="grid gap-5 rounded-md border-2 border-ink bg-white p-5 shadow-solid md:grid-cols-[160px_1fr_280px]"
                  key={phase.title}
                >
                  <div className={`${phase.accent} flex min-h-32 flex-col justify-between rounded-md border-2 border-ink p-4`}>
                    <span className="text-sm font-black text-ink-soft">{phase.number}</span>
                    <h3 className="text-3xl font-black">{phase.title}</h3>
                  </div>

                  <div>
                    <p className="text-2xl font-black leading-9">{phase.summary}</p>
                    <p className="mt-4 leading-7 text-ink-soft">{phase.evidence}</p>
                  </div>

                  <div className="flex flex-wrap content-start gap-2">
                    {phase.notes.map((note) => (
                      <span className="rounded-md border-2 border-ink bg-canvas px-3 py-2 text-sm font-semibold" key={note}>
                        {note}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase text-ink-soft">Evidence wall</p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">Make the artifacts easy to replace.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {artifacts.map((artifact) => (
                <article className={`${artifact.accent} rounded-md border-2 border-ink p-5 shadow-solid`} key={artifact.title}>
                  <div className="mb-8 h-28 rounded-md border-2 border-ink bg-white p-3">
                    <div className="h-3 w-4/5 rounded-sm bg-ink/80" />
                    <div className="mt-3 h-3 w-2/3 rounded-sm bg-ink/30" />
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      <span className="h-10 rounded-sm bg-ink/15" />
                      <span className="h-10 rounded-sm bg-ink/25" />
                      <span className="h-10 rounded-sm bg-ink/15" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black">{artifact.title}</h3>
                  <p className="mt-3 leading-7">{artifact.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="prototype" className="border-y border-ink/10 bg-ink px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase text-white/70">Prototype</p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">Show the cross-touchpoint experience.</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                The inspired case study moves from app planning to ride control and into the vehicle screen. This section gives each state a clear slot.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {prototypeScreens.map((screen, index) => (
                <article className="rounded-md border-2 border-white bg-canvas p-5 text-ink shadow-solid-white" key={screen}>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="text-sm font-black text-ink-soft">{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-3 w-3 rounded-full border-2 border-ink bg-sticky-mint" />
                  </div>
                  <h3 className="text-2xl font-black">{screen}</h3>
                  <div className="mt-5 space-y-2">
                    <div className="h-3 w-5/6 rounded-sm bg-ink/80" />
                    <div className="h-3 w-2/3 rounded-sm bg-ink/25" />
                    <div className="h-3 w-3/4 rounded-sm bg-ink/20" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="template" className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase text-ink-soft">Template</p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">Reusable writing prompts.</h2>
            </div>

            <div className="grid gap-4">
              {[
                'What changed in the market, product, or user behavior?',
                'Which assumption did the project need to make explicit?',
                'What evidence shaped the definition of the problem?',
                'Which artifact made the team choose one direction?',
                'What did the prototype prove, and what would you test next?',
              ].map((prompt) => (
                <p className="rounded-md border-2 border-ink bg-white p-5 text-2xl font-black leading-8 shadow-solid" key={prompt}>
                  {prompt}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink/10 px-5 py-12 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="max-w-2xl text-lg leading-8 text-ink-soft">
              Close with the final learning, the quality of the prototype, and the next decision the work made possible.
            </p>
            <Link
              className="rounded-md border-2 border-ink bg-white px-5 py-3 text-center font-semibold shadow-solid transition hover:-translate-y-0.5"
              href="/#work"
            >
              Back to selected work
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
