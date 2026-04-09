import { useState, useEffect } from "react";

/**
 * Detecta qué sección está visible para resaltar el enlace activo en el nav.
 * @param {string[]} sectionIds - IDs de las secciones a observar
 * @returns {string} ID de la sección activa
 */
export function useScrollSpy(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sectionIds]);

  return active;
}

/**
 * Agrega la clase "visible" a elementos con clase "reveal" cuando entran al viewport.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/**
 * Navega suavemente hasta una sección por su ID.
 * @returns {Function} Función go(id) para llamar en onClick
 */
export function useSmoothScroll() {
  return (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
