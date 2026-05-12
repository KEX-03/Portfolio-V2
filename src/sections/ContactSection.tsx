import { Mail, MapPin, Code2, Briefcase, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const socialLinks = [
  { label: "GitHub", href: "#", icon: Code2 },
  { label: "LinkedIn", href: "#", icon: Briefcase },
  { label: "Resume", href: "#", icon: FileText },
];

export function ContactSection() {
  return (
    <Section id="connect" aria-label="Contact">
      <div className="section-card relative">
        <span className="section-braces">{'@contact'}</span>
        <div className="section-label">
          <h2>Let&apos;s Connect</h2>
          <small>REACH OUT</small>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr_auto] lg:items-start 2xl:grid-cols-[1.2fr_1fr_auto] 2xl:gap-8 3xl:grid-cols-[1.25fr_1fr_auto] 3xl:gap-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <p className="max-w-[44ch] text-sm leading-7 text-ink-2 3xl:max-w-[52ch] 3xl:text-[15px]">
              Have a role to fill, a product to shape, or just want to say hello? I read every message.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.06 }}
            className="space-y-3 3xl:space-y-4"
          >
            <p className="inline-flex items-center gap-2 text-sm text-ink-2">
              <Mail className="size-4" aria-hidden="true" /> hello@viveksharma.dev
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-ink-2">
              <MapPin className="size-4" aria-hidden="true" /> Based in Bangalore, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.12 }}
            className="flex flex-col items-start gap-3 lg:items-end"
          >
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-paper text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-deep"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <p className="-rotate-2 font-hand text-[24px] leading-tight text-ink-2 3xl:text-[28px]">Great ideas start with a message.</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
