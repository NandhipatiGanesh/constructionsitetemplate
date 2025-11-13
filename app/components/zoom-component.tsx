"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

interface FlipOptions {
  absoluteOnLeave?: boolean;
  absolute?: boolean;
  scale?: boolean;
  simple?: boolean;
}

interface ScrollTriggerOptions {
  start?: string;
  end?: string;
}

interface GalleryOptions {
  flip?: FlipOptions;
  scrollTrigger?: ScrollTriggerOptions;
  stagger?: number;
}

interface GalleryConfig {
  id: string;
  options: GalleryOptions;
}

export default function GalleryPage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    document.body.classList.add("loading");

    const createdFlipTimelines: gsap.core.Timeline[] = [];

    // Enable smooth scrolling via CSS
    document.documentElement.style.scrollBehavior = 'smooth';

    const triggerFlipOnScroll = (galleryEl: Element | null, options: GalleryOptions = {}): void => {
      if (!galleryEl) return;

      const defaults: GalleryOptions = {
        flip: { absoluteOnLeave: false, absolute: false, scale: true, simple: true },
        scrollTrigger: { start: "center center", end: "+=300%" },
        stagger: 0,
      };
      const settings: GalleryOptions = { ...defaults, ...options };

      const caption = galleryEl.querySelector(".g-caption");
      const itemsNodeList = galleryEl.querySelectorAll<HTMLElement>(".g-item, .g-item-cut");
      const items = Array.from(itemsNodeList);

      const innerEls: Element[] = items
        .map((it: HTMLElement) => (it.children && it.children.length ? Array.from(it.children) : []))
        .flat();

      galleryEl.classList.add("g-switch");
      const flipstate = Flip.getState([...itemsNodeList, caption].filter(Boolean) as Element[], {
        props: "filter,opacity"
      });
      galleryEl.classList.remove("g-switch");

      const tl = Flip.to(flipstate, {
        ease: "none",
        absoluteOnLeave: settings.flip?.absoluteOnLeave,
        absolute: settings.flip?.absolute,
        scale: settings.flip?.scale,
        simple: settings.flip?.simple,
        stagger: settings.stagger,
        scrollTrigger: {
          trigger: galleryEl as HTMLElement,
          start: settings.scrollTrigger?.start,
          end: settings.scrollTrigger?.end,
          pin: (galleryEl.parentElement as HTMLElement) || undefined,
          scrub: true,
        },
      });

      if (innerEls.length) {
        tl.fromTo(
          innerEls,
          { scale: 2 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: galleryEl as HTMLElement,
              start: settings.scrollTrigger?.start,
              end: settings.scrollTrigger?.end,
              scrub: true,
            },
          },
          0
        );
      }

      createdFlipTimelines.push(tl);
    };

    const setupAllGalleries = (): void => {
      const galleries: GalleryConfig[] = [
        { id: "#g1", options: { flip: { absoluteOnLeave: true, scale: false } } },
        { id: "#g2", options: {} },
        {
          id: "#g3",
          options: {
            flip: { absolute: true, scale: false },
            scrollTrigger: { start: "center center", end: "+=900%" },
            stagger: 0.05,
          },
        },
      ];

      galleries.forEach((g: GalleryConfig) => {
        const el = rootRef.current?.querySelector(g.id) ?? null;
        triggerFlipOnScroll(el, g.options || {});
      });

      ScrollTrigger.refresh();
    };

    // Simple timeout to ensure DOM is ready
    const initTimer = setTimeout(() => {
      setupAllGalleries();
      document.body.classList.remove("loading");
    }, 100);

    return () => {
      clearTimeout(initTimer);
      document.documentElement.style.scrollBehavior = 'auto';
      try {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      } catch (e) {
        // noop
      }
      createdFlipTimelines.forEach((t) => t.kill?.());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <main ref={rootRef} className="relative w-full overflow-x-hidden bg-[#131417] text-white min-h-screen">
      <style>{`
        .g-switch.g-row { flex-direction: column; }
        .g-switch.g-row .g-item-xl { width: 80vw; height: 40vh; }
        .g-switch.g-row .g-caption { opacity: 1; bottom: 2rem; }
        
        .g-switch.g-grid .g-item-cut { position: absolute; width: 100vw; height: 100vh; left: 0; top: 0; }
        .g-switch.g-grid .g-caption { opacity: 1; }
        
        .g-switch.g-grid10 { gap: 0; width: 100%; grid-template-columns: repeat(4, 1fr); }
        .g-switch.g-grid10 .g-item { grid-column: auto; grid-row: auto; }
        .g-switch.g-grid10 .g-caption { opacity: 1; }
      `}</style>

      <div className="p-4 grid grid-cols-1 gap-2 opacity-70">
        <h1 className="m-0 text-sm font-normal">Scrolling Layout Demo</h1>
      </div>

      {/* Gallery 1 */}
      <div className="gallery-wrap h-screen flex items-center justify-center my-[40vh] overflow-hidden">
        <div id="g1" className="g-gallery g-row flex items-center justify-center gap-8 flex-nowrap">
          <div
            className="g-item g-item-s rounded-md aspect-[2/3] h-[20vh] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=900)" }}
          />
          <div
            className="g-item g-item-m rounded-md aspect-[2/3] h-[25vh] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=900)" }}
          />
          <div
            className="g-item g-item-l rounded-md aspect-[2/3] h-[40vh] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=900)" }}
          />
          <div
            className="g-item g-item-xl g-item-center rounded-md z-10 h-[60vh] aspect-[16/9] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1400&h=800)" }}
          />
          <div
            className="g-item g-item-l rounded-md aspect-[2/3] h-[40vh] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=900)" }}
          />
          <div
            className="g-item g-item-m rounded-md aspect-[2/3] h-[25vh] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=900)" }}
          />
          <div
            className="g-item g-item-s rounded-md aspect-[2/3] h-[20vh] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=900)" }}
          />
          <div className="g-caption absolute max-w-[730px] p-6 opacity-0 bottom-[-50vh] text-center">
            Within this meticulously arranged ensemble lies a tantalizing facade, captivating our gaze.
          </div>
        </div>
      </div>

      <section className="max-w-[1000px] mx-auto my-[20vh] p-4">
        <span className="block text-[#adadad] mb-2">Ethical Considerations</span>
        <p className="max-w-[400px] text-[#8b8b8b]">
          The emergence of AI-generated art raises ethical questions and concerns about authorship and ownership.
        </p>
      </section>

      {/* Gallery 2 */}
      <div className="gallery-wrap h-[110vh] my-[40vh] overflow-hidden">
        <div id="g2" className="g-gallery g-grid grid grid-cols-3 gap-[2.5vw] relative">
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=2000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000)" }} />
          </div>
          <div className="g-item-cut overflow-hidden">
            <div className="g-item-inner w-full h-[33vh] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000)" }} />
          </div>

          <div className="g-caption absolute w-screen h-screen grid place-items-center opacity-0">
            <p className="max-w-2xl px-8 text-center">
              Devoid of inherent knowledge, the language model relies solely on probabilities to craft a peculiar vision.
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-[1000px] mx-auto my-[20vh] p-4 ml-auto text-right">
        <span className="block text-[#adadad] mb-2">Preserving Artistic Identity</span>
        <p className="max-w-[400px] text-[#8b8b8b] ml-auto">
          While AI offers new avenues for artistic exploration, there is a concern that it may overshadow human creativity.
        </p>
      </section>

      {/* Gallery 3 */}
      <div className="gallery-wrap h-screen my-[40vh] overflow-hidden">
        <div id="g3" className="g-gallery g-grid10 grid grid-cols-4 gap-8 p-8">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`g-item pos-${i + 1} bg-cover bg-center h-[33vh]`}
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=1000)` }}
            />
          ))}
          <div className="g-caption absolute w-screen h-screen grid place-items-center text-6xl opacity-0">
            The Art of Perfection?
          </div>
        </div>
      </div>

      <section className="max-w-[1000px] mx-auto my-[20vh] p-4">
        <span className="block text-[#adadad] mb-2">Final Thoughts</span>
        <p className="max-w-[400px] text-[#8b8b8b]">
          As we explore these transformations, we question the role of technology in creative expression.
        </p>
      </section>
    </main>
  );
}