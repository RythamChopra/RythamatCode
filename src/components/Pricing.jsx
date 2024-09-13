import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="experience">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        </div>

        <Heading tag="Get" title="Experience so far..." />

        <div className="relative">
          <PricingList />
        </div>

        <div className="flex justify-center mt-10"></div>
      </div>
    </Section>
  );
};

export default Pricing;
