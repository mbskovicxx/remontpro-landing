"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/constants/process";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !stepsRef.current) return;

    const steps = stepsRef.current.querySelectorAll("[data-step]");
    const progress = progressRef.current;

    const ctx = gsap.context(() => {
      steps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center+=80",
          end: "bottom center+=80",
          onEnter: () => activateStep(i),
          onEnterBack: () => activateStep(i),
        });
      });

      if (progress) {
        gsap.to(progress, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
          },
        });
      }
    }, sectionRef);

    function activateStep(index: number) {
      steps.forEach((step, i) => {
        step.classList.toggle("is-active", i === index);
        step.classList.toggle("is-past", i < index);
      });
    }

    steps[0]?.classList.add("is-active");

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding"
      aria-labelledby="process-title"
    >
      <div className="container-main">
        <SectionTitle
          id="process-title"
          label="Этапы работ"
          title="От замера до ключей — 7 шагов"
          subtitle="Прозрачный процесс с фиксированными сроками на каждом этапе"
        />

        <div ref={stepsRef} className="relative mx-auto max-w-3xl">
          <div
            ref={progressRef}
            className="absolute left-6 top-0 hidden h-full w-0.5 origin-top scale-y-0 bg-copper-500 md:left-8 md:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-6 top-0 hidden h-full w-0.5 bg-graphite-200 md:left-8 md:block"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.id}
                data-step
                className={cn(
                  "process-step relative flex gap-6 transition-opacity duration-500 md:gap-8",
                  "opacity-40",
                  "[&.is-active]:opacity-100",
                  "[&.is-past]:opacity-60"
                )}
              >
                <div
                  className={cn(
                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-500 md:h-16 md:w-16 md:text-lg",
                    "border-graphite-200 bg-white text-graphite-400",
                    "[.is-active_&]:border-copper-500 [.is-active_&]:bg-copper-500 [.is-active_&]:text-white [.is-active_&]:shadow-lg [.is-active_&]:shadow-copper-500/30",
                    "[.is-past_&]:border-copper-300 [.is-past_&]:bg-copper-100 [.is-past_&]:text-copper-700"
                  )}
                >
                  {step.step}
                </div>
                <div className="flex-1 pb-2">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-graphite-950 md:text-xl">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-graphite-100 px-3 py-0.5 text-xs font-medium text-graphite-500">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-graphite-500 md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
