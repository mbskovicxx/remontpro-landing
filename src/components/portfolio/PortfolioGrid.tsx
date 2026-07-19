"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioProject } from "@/types";
import { cn } from "@/lib/utils";

interface PortfolioGridProps {
  projects: PortfolioProject[];
  onProjectClick: (project: PortfolioProject) => void;
}

export function PortfolioGrid({ projects, onProjectClick }: PortfolioGridProps) {
  return (
    <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm"
            onClick={() => onProjectClick(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onProjectClick(project);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Открыть проект: ${project.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {project.beforeImage && (
                <span className="absolute right-3 top-3 rounded-full bg-copper-600 px-3 py-1 text-xs font-semibold text-white">
                  До / После
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-graphite-950">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-graphite-500">
                <span>{project.area} м²</span>
                <span>{project.duration}</span>
                <span>{project.style}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

interface PortfolioLightboxProps {
  project: PortfolioProject;
  showBefore: boolean;
  onToggleBefore: (before: boolean) => void;
  onClose: () => void;
}

export function PortfolioLightbox({
  project,
  showBefore,
  onToggleBefore,
  onClose,
}: PortfolioLightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite-950/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-graphite-950/80 text-white transition-colors hover:bg-graphite-950"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <div className="relative aspect-[16/10]">
          <Image
            src={
              showBefore && project.beforeImage
                ? project.beforeImage
                : project.afterImage ?? project.image
            }
            alt={
              showBefore
                ? `${project.title} — до ремонта`
                : `${project.title} — после ремонта`
            }
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="p-6">
          <h3 className="heading-display text-2xl text-graphite-950">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-graphite-500">
            {project.area} м² · {project.duration} · {project.style}
          </p>

          {project.beforeImage && (
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => onToggleBefore(true)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  showBefore
                    ? "bg-graphite-950 text-white"
                    : "bg-graphite-100 text-graphite-600"
                )}
              >
                До
              </button>
              <button
                type="button"
                onClick={() => onToggleBefore(false)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  !showBefore
                    ? "bg-graphite-950 text-white"
                    : "bg-graphite-100 text-graphite-600"
                )}
              >
                После
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
