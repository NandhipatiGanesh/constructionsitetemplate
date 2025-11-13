"use client";

export default function ConstructionGallery() {
  return (
    <section className="bg-[#fafafa] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-[52px] font-medium text-center text-[#000] mb-20 leading-tight">
          See how SLBuilders has transformed Hyderabad<br />
          <span className="text-[#6b6b6b]">projects with quality, safety and reliability</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-12 auto-rows-[180px] gap-4 mb-16">
          {/* Card 1 - large */}
          <Card
            colStart={1}
            colEnd={5}
            rowStart={1}
            rowEnd={3}
            img="https://images.unsplash.com/photo-1581091012184-7f51b5d6f6d7?w=1200&q=80&auto=format&fit=crop"
            profile="Ramesh, Project Manager"
            caption="Commercial complex completion — KPHB, Hyderabad"
          />

          {/* Card 2 - medium */}
          <Card
            colStart={5}
            colEnd={8}
            rowStart={1}
            rowEnd={3}
            img="https://images.unsplash.com/photo-1526318472351-c75fcf070a8b?w=800&q=80&auto=format&fit=crop"
          />

          {/* Card 3 - small */}
          <Card
            colStart={8}
            colEnd={11}
            rowStart={1}
            rowEnd={3}
            img="https://images.unsplash.com/photo-1516557070065-1f1b0b2cf3f7?w=700&q=80&auto=format&fit=crop"
          />

          {/* Card 4 - medium bottom left */}
          <Card
            colStart={1}
            colEnd={4}
            rowStart={3}
            rowEnd={5}
            img="https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=800&q=80&auto=format&fit=crop"
          />

          {/* Card 5 - xlarge center */}
          <Card
            colStart={4}
            colEnd={9}
            rowStart={3}
            rowEnd={5}
            img="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1400&q=80&auto=format&fit=crop"
            profile="Anita, Homeowner"
            caption="Residential villa renovation — Jubilee Hills"
          />

          {/* Card 6 - medium right center */}
          <Card
            colStart={9}
            colEnd={13}
            rowStart={3}
            rowEnd={5}
            img="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80&auto=format&fit=crop"
            profile="Vikram, Site Engineer"
            caption="Industrial warehouse — Hyderabad outskirts"
          />

          {/* Card 7 - small bottom right */}
          <Card
            colStart={9}
            colEnd={11}
            rowStart={5}
            rowEnd={6}
            img="https://images.unsplash.com/photo-1473447190280-1a3d2a1d3b20?w=600&q=80&auto=format&fit=crop"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-[#000] mb-6">
            Have a Hyderabad project we can help with?
          </h2>
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-white border border-[#e6e6e6] text-[#000] font-medium hover:bg-[#000] hover:text-white transition-transform"
            aria-label="Share your project"
          >
            Share Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

/* Small reusable card sub-component */
function Card({
  img,
  profile,
  caption,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
}: {
  img: string;
  profile?: string;
  caption?: string;
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
}) {
  // compute inline grid style for desktop layout;
  // on small screens Tailwind will stack via responsive classes below
  const gridStyle = {
    gridColumn: `${colStart} / ${colEnd}`,
    gridRow: `${rowStart} / ${rowEnd}`,
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer transform transition-all hover:scale-[1.02] hover:shadow-2xl"
      style={gridStyle}
    >
      <img src={img} alt={caption ?? profile ?? "Project image"} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      <div className="absolute inset-0 p-4 flex flex-col">
        {/* profile tag if present */}
        {profile && (
          <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-black">
            <span className="w-6 h-6 rounded-full" style={{ background: "linear-gradient(135deg,#ff6b6b,#ffd93d)" }} />
            <span>{profile}</span>
          </div>
        )}

        {/* play button centered */}
        <button
          aria-label="Play testimonial"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md border border-white"
        >
          {/* simple triangle icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current text-black">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* caption at bottom */}
        {caption && (
          <div className="mt-auto">
            <div className="inline-block bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-black">
              {caption}
            </div>
          </div>
        )}
      </div>

      {/* Responsive behaviour: on small screens take full width and fixed height.
          Tailwind responsive utilities below are applied via className overrides using utility-first approach.
          We add a small script-free responsive shim via additional classes so the inline grid style is ignored on small screens.
      */}
      <style jsx>{`
        /* small-screen override: stack cards and set consistent heights */
        @media (max-width: 768px) {
          div[style] {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
            height: 320px;
          }
        }
        @media (max-width: 480px) {
          div[style] {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
