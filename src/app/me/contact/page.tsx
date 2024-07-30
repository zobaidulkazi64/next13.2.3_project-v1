import ContactSection from '@/components/contact/ContactSection'
import React from 'react'

const contactPage = () => {
  return (
    <div>
      <ContactSection
        servicesItems={[
          "Web Development",
          "Mobile App Development",
          "Desktop App Development",
          "Data Analysis",
          "Data Science",
          "Data Analytics",
        ]}
      />
    </div>
  );
}

export default contactPage