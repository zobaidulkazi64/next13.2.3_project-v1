import ContactSection from '@/components/ui/contact/ContactSection'
import React from 'react'

const contactPage = () => {
  return (
    <div>
      <ContactSection
        servicesItems={[
          "Web Development",
          "Api Integration",
        ]}
      />
    </div>
  );
}

export default contactPage