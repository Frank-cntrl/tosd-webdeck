import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'

const { plan } = site

export default function Plan() {
  return (
    <>
      <PageHeader eyebrow={plan.eyebrow} title={plan.title} intro={plan.intro} />

      <section className="mx-auto max-w-4xl px-4 pt-16 sm:px-6">
        <SectionHeading eyebrow="Launch Strategy">The first six months</SectionHeading>
        <div className="space-y-5 text-base leading-relaxed text-neutral-400">
          {plan.launchStrategy.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {plan.items.map((item, idx) => (
          <Accordion
            key={item.id}
            defaultExpanded={idx === 0}
            disableGutters
            sx={{
              backgroundColor: '#141414',
              backgroundImage: 'none',
              border: '1px solid #262626',
              borderRadius: '6px !important',
              mb: 1.5,
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#f5b942' }} />}>
              <span className="mr-4 font-display text-lg text-accent">{item.id}</span>
              <span className="self-center text-sm font-medium text-white sm:text-base">
                {item.title}
              </span>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <div className="space-y-4 text-sm leading-relaxed text-neutral-400">
                {item.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {item.bullets.length > 0 && (
                  <ul className="space-y-2.5 pt-1">
                    {item.bullets.map((b) => (
                      <li key={b.slice(0, 40)} className="flex items-start gap-3">
                        <span className="mt-0.5 text-accent" aria-hidden="true">
                          •
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {item.outro && <p>{item.outro}</p>}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>

      {/* The Future */}
      <section className="border-t border-edge bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="The Future">Beyond the first six months</SectionHeading>
          <ul className="max-w-3xl space-y-3">
            {plan.future.items.map((i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base leading-relaxed text-neutral-300"
              >
                <span className="mt-1 text-accent" aria-hidden="true">
                  —
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
