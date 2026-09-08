import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import { site } from '../content/site'

const { plan } = site

const panelSx = {
  backgroundColor: '#141414',
  backgroundImage: 'none',
  border: '1px solid #262626',
  borderRadius: '6px !important',
  mb: 1.5,
  '&:before': { display: 'none' },
}

function PanelTitle({ children }) {
  return (
    <span className="text-sm font-semibold uppercase tracking-widest text-white">{children}</span>
  )
}

export default function Plan() {
  return (
    <>
      <PageHeader eyebrow={plan.eyebrow} title={plan.title} intro={plan.intro} />

      {/* Summary */}
      <section className="mx-auto max-w-3xl px-4 pt-16 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-neutral-400">
          {plan.summary.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Collapsed detail */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Accordion disableGutters sx={panelSx}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--color-accent)' }} />}>
            <PanelTitle>{plan.detailHeading}</PanelTitle>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {plan.launchStrategyHeading}
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-neutral-400">
              {plan.launchStrategy.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              {plan.items.map((item) => (
                <div key={item.id} className="border-t border-edge pt-6">
                  <h4 className="flex gap-4">
                    <span className="font-display text-lg text-accent">{item.id}</span>
                    <span className="self-center text-sm font-medium text-white sm:text-base">
                      {item.title}
                    </span>
                  </h4>
                  <div className="mt-3 space-y-4 text-sm leading-relaxed text-neutral-400">
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
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters sx={panelSx}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--color-accent)' }} />}>
            <PanelTitle>The Future</PanelTitle>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <SectionHeading>{plan.future.heading}</SectionHeading>
            <ul className="space-y-3">
              {plan.future.items.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300"
                >
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    —
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </section>
    </>
  )
}
