"use client"

import Link from "next/link"
// removed useState (ContactButtons now uses direct links)
import { ArrowRight, Linkedin, Mail, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
export default function Page() {
  const projects = [
    {
      title: "Walletly — Multi‑account mobile banking",
      subtitle: "End‑to‑end product design",
      imageSrc: "/images/project-1.webp",
      tags: ["Mobile", "Fintech", "UI/UX"],
      href: "#project-1",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Nimbus — SaaS analytics",
      subtitle: "Design system & web app",
      imageSrc: "/images/project-2.webp",
      tags: ["SaaS", "Design System", "Web"],
      href: "#project-2",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Arcade — E‑commerce for streetwear",
      subtitle: "Mobile‑first storefront",
      imageSrc: "/images/project-3.webp",
      tags: ["Commerce", "Mobile", "Brand"],
      href: "#project-3",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "CareConnect — Patient portal",
      subtitle: "Accessibility‑first UI",
      imageSrc: "/images/project-4.webp",
      tags: ["A11y", "Web App", "Health"],
      href: "#project-4",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Aurora — Creative portfolio",
      subtitle: "Motion & interaction design",
      imageSrc: "/images/project-5.webp",
      tags: ["Portfolio", "Animation", "UI/UX"],
      href: "#project-5",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Hydra — AI assistant",
      subtitle: "Conversational product UX",
      imageSrc: "/images/project-6.webp",
      tags: ["AI", "SaaS", "Product"],
      href: "#project-6",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
    // Additional projects added from public/images/projects-img
    {
      title: "AWS Exam Reviewer",
      subtitle: "Practice questions & flashcards",
      imageSrc: "/images/projects-img/AWS-Exam-Reviewer.png",
      tags: ["JavaScript", "CI/CD", "GitHub Actions", "Vercel"],
      href: "https://aws-exam-reviewer.vercel.app/",
      priority: false,
      gradientFrom: "#07132a",
      gradientTo: "#ff9900",
    },
    {
      title: "NoteApp",
      subtitle: "Cloud note app using Flask and DynamoDB.",
      imageSrc: "/images/projects-img/NoteApp.png",
      tags: ["DynamoDB", "Python Flask", "Boto3"],
      href: "#project-8",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#7c3aed",
    },
    {
      title: "WeatherApp",
      subtitle: "Clean forecasts with OpenWeather API with CI/CD using GitHub Actions and Vercel",
      imageSrc: "/images/projects-img/WeatherApp.png",
      tags: ["API", "CI/CD", "NodeJS", "Express"],
      href: "https://ci-cd-weather.vercel.app/",
      priority: false,
      gradientFrom: "#021124",
      gradientTo: "#06b6d4",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, now split into two stacked containers */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-3rem)]">
            <div className="grid h-full min-h-0 grid-rows-[3fr_1fr] gap-4">
              {/* Top hero card (3fr of the available space) */}
              <div className="min-h-0">
                <RevealOnView
                  as="div"
                  intensity="hero"
                  className="relative flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
                  staggerChildren
                >
                  {/* Texture background */}
                  <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                    <DotGridShader />
                  </div>
                  <div>
                    {/* Wordmark */}
                    <div className="mb-8 flex items-center gap-2">
                      <div className="text-2xl font-extrabold tracking-tight">John Paul</div>
                      <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                    </div>

                    {/* Headline with intro blur effect */}
                    <AnimatedHeading
                      className="text-[2.375rem] font-black leading-[1.05] tracking-tight sm:text-4xl"
                      lines={["I explore cloud technologies to create simple and useful systems."]}
                    />

                    {/* CTAs */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Button asChild size="lg" className="rounded-full">
                        <Link href="mailto:johnpaul@portfolio.dev">
                          Hire me
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" className="rounded-full">
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          View Resume
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Contact buttons */}
                    <div className="mt-10">
                      <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">Get in touch</p>
                      <ContactButtons />
                    </div>
                  </div>
                </RevealOnView>
              </div>

              {/* Bottom container (1fr of the available space) */}
              <div className="min-h-0">
                <RevealOnView
                  as="div"
                  className="relative h-full min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
                >
                  <div className="h-full flex flex-col justify-center">
                    <h2 className="text-sm font-semibold tracking-widest text-white/50 mb-2">
                      Additional
                    </h2>
                    <p className="text-white/80 text-base">
                      Place another container here (e.g., skills, about, or links).
                    </p>
                  </div>
                </RevealOnView>
              </div>
            </div>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ContactButtons() {
  const email = "cout.johnpaul.torres@gmail.com"

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-[1.02] transition-transform">
        <Link href="https://www.linkedin.com/in/john-paul-torres-123746372/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <Linkedin className="h-4 w-4 text-white/90" />
          <span className="text-sm font-medium">LinkedIn</span>
        </Link>
      </Button>

      <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-[1.02] transition-transform">
        <Link href={`mailto:${email}`} className="flex items-center gap-2 text-white">
          <Mail className="h-4 w-4 text-white/90" />
          <span className="text-sm font-medium">Email</span>
        </Link>
      </Button>

      <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-[1.02] transition-transform">
        <Link href="https://github.com/JP-bott" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white">
          <Github className="h-4 w-4 text-white/90" />
          <span className="text-sm font-medium">GitHub</span>
        </Link>
      </Button>
    </div>
  )
}
