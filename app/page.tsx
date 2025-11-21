import Image from "next/image";
import SuperHero from "./components/hero";

import Contact from "./components/contact";
import SphereImageGrid, { ImageData } from "../components/img-sphere";
// import WorksSection from "./components/zoom-component";
import ShowcaseSection from "./components/showcase-section";
import { Gallery4 } from "@/components/gallery4";
import FAQAccordion from "./components/faq-accordion";
import StackingCards from "./components/stackingcards";
import { AnimatedTestimonials } from "@/components/animated-testimonials";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CleanServicesSection from "./components/newservice";
import AboutSection from "./components/about";
import GoogleMapSection from "./components/maps";

export default function Home() {
  const images: ImageData[] = [
    {
      id: "1",
      src: "http://elementortemplates.in/wp-content/uploads/2025/10/upload.jpg",
      alt: "Photo 1",
      title: "Title 1",
    },
    {
      id: "2",
      src: "http://elementortemplates.in/wp-content/uploads/2025/10/upload-4-scaled.jpg",
      alt: "Photo 2",
    },
    {
      id: "3",
      src: "http://elementortemplates.in/wp-content/uploads/2025/10/upload-7-scaled.jpg",
      alt: "Photo 3",
    },
    { id: "4", src: "/newvilla.png", alt: "Photo 4" },
    { id: "5", src: "/newvilla.png", alt: "Photo 5" },
    { id: "6", src: "/newvilla.png", alt: "Photo 6" },
    { id: "7", src: "/newvilla.png", alt: "Photo 7" },
    { id: "8", src: "/newvilla.png", alt: "Photo 8" },
    { id: "9", src: "/newvilla.png", alt: "Photo 9" },
    { id: "10", src: "/newvilla.png", alt: "Photo 10" },
    { id: "11", src: "/newvilla.png", alt: "Photo 11" },
    { id: "12", src: "/newvilla.png", alt: "Photo 12" },
    { id: "13", src: "/newvilla.png", alt: "Photo 13" },
    { id: "14", src: "/newvilla.png", alt: "Photo 14" },
    { id: "15", src: "/newvilla.png", alt: "Photo 15" },
    { id: "16", src: "/newvilla.png", alt: "Photo 16" },
    { id: "17", src: "/newvilla.png", alt: "Photo 17" },
    { id: "18", src: "/newvilla.png", alt: "Photo 18" },
    { id: "19", src: "/newvilla.png", alt: "Photo 19" },
    { id: "20", src: "/newvilla.png", alt: "Photo 20" },
    { id: "21", src: "/newvilla.png", alt: "Photo 21" },
    { id: "22", src: "/newvilla.png", alt: "Photo 22" },
    { id: "23", src: "/newvilla.png", alt: "Photo 23" },
    { id: "24", src: "/newvilla.png", alt: "Photo 24" },
    { id: "25", src: "/newvilla.png", alt: "Photo 25" },
    { id: "26", src: "/newvilla.png", alt: "Photo 26" },
    { id: "27", src: "/newvilla.png", alt: "Photo 27" },
    { id: "28", src: "/newvilla.png", alt: "Photo 28" },
    { id: "29", src: "/newvilla.png", alt: "Photo 29" },
    { id: "30", src: "/newvilla.png", alt: "Photo 30" },
    // ...more images
  ];

  const myItems = [
    {
      id: "1",
      title: "G+ 5 appartment",
      description:
        "A 20 premium flats residential building located at Gandimaisamma police station",
      href: "#",
      image: "/Apartment.jpg",
    },
    {
      id: "2",
      title: "Palm County Villas – Gated Community Living",
      description:
        "G+2 with lift and moderate construction at suraksha meadows in gandimaisamma",
      href: "#",
      video: "/service two video.mp4",
    },
   
  ];



  return (
    <>
      <SuperHero />
      {/* <WorksSection /> */}
      <AboutSection />
      {/* <ShowcaseSection /> */}

      <CleanServicesSection />

      <StackingCards />
      <div className="py-16 flex flex-col justify-center items-center bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          #1 – Best in the Location of Hyderabad
        </h2>

        <SphereImageGrid
          images={images}
          containerSize={600}
          sphereRadius={260}
          autoRotate={true}
          autoRotateSpeed={0.25}
          dragSensitivity={0.8}
        />
      </div>
      <Gallery4
        title="Projects"
        description="Real world examples."
        items={myItems}
      />

      {/* <AnimatedTestimonials
        title="What Our Clients Say"
        subtitle="Here are some testimonials from our happy customers"
        badgeText="Top Rated Construction"
        testimonials={testimonials}
        autoRotateInterval={5000}
        className="my-20"
      /> */}

      <FAQAccordion />

      <Contact />

      <WhatsAppFloat
        phone="919686660444" // <-- Hyderabad / India example
        message="Hi! I'm interested in your Hyderabad projects. Please share details."
        label="Enquire on WhatsApp"
        size={64}
        offsetBottom={28}
        offsetRight={28}
      />
      <GoogleMapSection />
    </>
  );
}
