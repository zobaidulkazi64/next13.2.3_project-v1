import React from "react";
import HomePage from "@/components/ui/home/Home";
import CookieNotice from "@/components/common/cookie/CookieNotice";
import ContactSection from "@/components/ui/contact/ContactSection";
import Thanks from "@/components/ui/about/Thanks";
import Footer from "@/components/common/footer/Footer";
import SkillsShow from "@/components/ui/skills/SkillsShow";
import About from "@/components/ui/about/About";

const Home = () => {
  return (
    <div>
      <HomePage />

      <About />
      <SkillsShow />

      <Thanks />

      <ContactSection servicesItems={["Web Development", "Api Integration"]} />
      <div className="container m-auto">
        <CookieNotice />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
