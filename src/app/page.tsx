import React from 'react'
import { Flex, Text, Button, ThemePanel } from "@radix-ui/themes";
import Header from '@/components/Header/Header';
import DropdownMenuComponent from '@/components/Header/DropdownMenuComponent';
import HomePage from '@/components/home/Home';
import ContactSection from '@/components/faq/ContactSection';
const Home = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <ContactSection servicesItems={[
        "Web Development",
        "Mobile App Development",
        "Desktop App Development",
        "Data Analysis",
        "Data Science",
        "Data Analytics",
      ]} />
    </div>
  );
}

export default Home