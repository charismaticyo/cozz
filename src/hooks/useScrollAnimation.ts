import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.7,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-scroll-section]");
      
      sections.forEach((section, index) => {
        const background = section.querySelector("[data-scroll-bg]");
        const content = section.querySelector("[data-scroll-content]");
        const overlay = section.querySelector("[data-scroll-overlay]");
        const titleTop = section.querySelector("[data-scroll-title-top]");
        const titleBottom = section.querySelector("[data-scroll-title-bottom]");

        // Set initial states
        if (background) {
          gsap.set(background, { scale: 1.2 });
        }
        if (content) {
          gsap.set(content, { xPercent: 30 });
        }

        // Clip-path reveal animation
        gsap.fromTo(
          section,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );

        // Content slide animation
        if (content) {
          gsap.to(content, {
            xPercent: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          });
        }

        // Background parallax/scale
        if (background) {
          gsap.to(background, {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          });

          // Background blur on scroll past
          gsap.to(background, {
            filter: "brightness(0.3) blur(5px)",
            scrollTrigger: {
              trigger: section,
              start: "center center",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Title animations - slide from opposite directions
        if (titleTop) {
          gsap.fromTo(
            titleTop,
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        }

        if (titleBottom) {
          gsap.fromTo(
            titleBottom,
            { yPercent: -100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        }

        // Overlay fade for transition to next section
        if (overlay && index < sections.length - 1) {
          gsap.to(overlay, {
            opacity: 0.7,
            scrollTrigger: {
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Horizontal exit animation for all but last section
        if (index < sections.length - 1) {
          gsap.to(section, {
            xPercent: -30,
            scrollTrigger: {
              trigger: section,
              start: "bottom bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
