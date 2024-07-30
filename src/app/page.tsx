import React from 'react'
import HomePage from '@/components/home/Home';
import CookieNotice from '@/components/cookie/CookieNotice';
import ContactSection from '@/components/contact/ContactSection';
import Thanks from '@/components/ui/about/Thanks';
import Footer from '@/components/footer/Footer';
import SkillsShow from '@/components/skills/SkillsShow';
import About from '@/components/ui/about/About';


const Home = () => {

  return (
    <div>
      <HomePage />

      <About />
      <SkillsShow />

      <Thanks />

      <ContactSection
        servicesItems={["Web Development", "Mobile App Development"]}
      />


      <div className="container m-auto">
        <CookieNotice />
        <Footer />
      </div>
    </div>
  );
}

export default Home