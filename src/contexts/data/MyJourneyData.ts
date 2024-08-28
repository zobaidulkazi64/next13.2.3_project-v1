// types/MyJourneyData.ts

export interface MyJourneyContent {
  title: string;
  introduction: string;
  paragraphs: string[];
  listItems: string[];
  subheading: string;
  contactButton: {
    text: string;
    link: string;
  };
  learnMoreButton: {
    text: string;
    link: string;
  };
  testimonial: {
    companyLogo: string;
    quote: string;
    author: {
      name: string;
      title: string;
      avatar: string;
    };
  };
}

export const myJourneyData: MyJourneyContent = {
  title: "My Journey as a Developer: From 2019 to Now",
  introduction:
    "I am Zobaidul Kazi, a passionate developer who started my journey in 2019. Since then, I have continuously developed, learning new technologies and taking on challenges.",
  paragraphs: [
    "After learning about web development, I started watching various videos on YouTube and saw that learning it could do something in the future. First start writing HTML and CSS code through mobile. After buying a computer I got involved in development as well as studies as a third semester student of Diploma Engineering.",
    "Finally, bought a course and started it and started completing the projects. I am proud to have come this far and continue to learn new technologies. I am looking forward to working with you in the future.",
  ],
  listItems: [
    "Started my career in 2019 with a focus on web development.",
    "Gained experience in various programming languages and technologies.",
    "Worked on diverse projects, ranging from small applications to large systems.",
    "Collaborated with cross-functional teams to deliver high-quality projects.",
  ],
  subheading: "We’re here to help",
  contactButton: {
    text: "Contact",
    link: "/me/contact",
  },
  learnMoreButton: {
    text: "Learn more",
    link: "#",
  },
  testimonial: {
    companyLogo:
      "https://b2bmap.com/public/uploads/companylogo/1595536171-Stack%20Learner%20logo-01.png",
    quote:
      "Zobaidul is an accomplished full-stack (MERN) web application developer, cloud practitioner, competitive coder, entrepreneur, and e looks for new challenges to tackle in the real world. Zobaidul founded Kazi Byte, He always gives his best to clients, enhances quality, keeps learning, and shares his expertise with others.",
    author: {
      name: "Hasan Nayem",
      title: "Full-stack Developer",
      avatar:
        "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F926634%2Fpicture%2Foptimized%2Fhuge_93b43efa49671637e73034079be76978-a0d78b0e83e4fc4831fb034e9a52675f.jpg&width=480",
    },
  },
};
