import React from "react";
import { ArrowRight, Zap, Users, Calendar, Award } from "lucide-react";
import Hero from "../components/sections/Hero";
import EventOverview from "../components/sections/EventOverview";
import Schedule from "../components/sections/Schedule";
import Speakers from "../components/sections/Speakers";
import Registration from "../components/sections/Registration";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <EventOverview />
      <Schedule />
      <Speakers />
      <Registration />
    </div>
  );
}
