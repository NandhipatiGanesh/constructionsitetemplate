import Image from "next/image";
import SuperHero from "./components/hero";
import ServicesReviews from "./components/reviews";
import Contact from "./components/contact"; 
import   ConstructionGallery from "./components/galler";
// import WorksSection from "./components/zoom-component";
import ShowcaseSection from "./components/showcase-section";
import Tabs from "./components/tabs";
import FAQAccordion from "./components/faq-accordion";

export default function Home() {
  return (
    <>
    <SuperHero />
   {/* <WorksSection /> */}
    <ShowcaseSection />
   <Tabs /> 
   
    <ServicesReviews />
    <ConstructionGallery />
    <FAQAccordion />  
    <Contact />
    </>
  );
}
