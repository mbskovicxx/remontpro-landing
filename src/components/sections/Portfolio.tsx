"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_FILTERS,
} from "@/constants/portfolio";
import type { PortfolioCategory, PortfolioProject } from "@/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  PortfolioGrid,
  PortfolioLightbox,
} from "@/components/portfolio/PortfolioGrid";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
  const [lightboxProject, setLightboxProject] = useState<PortfolioProject | null>(null);
  const [showBefore, setShowBefore] = useState(false);

  const filtered =
    activeFilter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  const openLightbox = (project: PortfolioProject) => {
    setLightboxProject(project);
    setShowBefore(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section
      id="portfolio"
      className="section-padding bg-graphite-50"
      aria-labelledby="portfolio-title"
    >
      <div className="container-main">
        <SectionTitle
          id="portfolio-title"
          label="Портфолио"
          title="Реализованные проекты"
          subtitle="Более 500 квартир в Москве и области — от студий до трёхкомнатных"
        />

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Фильтр проектов"
        >
          {PORTFOLIO_FILTERS.map((filter) => (
            <button
              key={filter.id}
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                activeFilter === filter.id
                  ? "bg-graphite-950 text-white"
                  : "bg-white text-graphite-600 hover:bg-graphite-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <PortfolioGrid projects={filtered} onProjectClick={openLightbox} />
      </div>

      <AnimatePresence>
        {lightboxProject && (
          <PortfolioLightbox
            project={lightboxProject}
            showBefore={showBefore}
            onToggleBefore={setShowBefore}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
