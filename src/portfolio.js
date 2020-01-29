/* Change this file to get your personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all 👋 I'm Seth",
  subTitle:
    "A Marketing and Communications professional helping startups and their audiences understand emerging technologies.
  resumeLink: "https://docs.google.com/document/d/1sNiGLyQzHfT1L1B6tK6n0QtXu6XuuLMMXQ3C-ON6q10/edit?usp=sharing"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/goldfarbas",
  linkedin: "https://www.linkedin.com/in/asethgoldfarb/",
  gmail: "goldfarbas@gmail.com",
};

const skillsSection = {
  /* Your Skills Section  */
  title: "What I do",
  subTitle: "Copywriting and Content Marketing",
  skills: [
    "⚡ Write, concise, compelling copy ranging from blogs and social media to ",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon */
  /* https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "writing",
      fontAwesomeClassname: "fab fa-pencil-alt"
    },
    {
      skillName: "podcasting",
      fontAwesomeClassname: "fab fa-microphone-alt"
    },
    {
      skillName: "video",
      fontAwesomeClassname: "fab fa-video"
    },
    {
      skillName: "Twitter",
      fontAwesomeClassname: "fab fa-twitter-square"
    },
    {
      skillName: "Reddit",
      fontAwesomeClassname: "fab fa-reddit-square"
    },
    {
      skillName: "LinkedIn",
      fontAwesomeClassname: "fab fa-linkedin"
    },
    {
      skillName: "Medium",
      fontAwesomeClassname: "fab fa-medium"
    },
  ]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Projects",
  subtitle: "Startups and projects I've supported",
  projects: [
     {
      image: "https://drive.google.com/file/d/1pnPQ8OpIeu7C89cIt8vAwjeGJ8pZpVtt/view?usp=sharing",
      link: "https://bzx.network/"
    },
     {
      image: "https://drive.google.com/file/d/12IBVFnHEuoqHa2OPRjeHwfxsXDtscnbC/view?usp=sharing",
      link: "https://plutusdefi.com/"
    },
    {
      image: "https://drive.google.com/file/d/1f_DEoSc-mkJCGYZYmSAjWw3XVbmdOHE8/view?usp=sharing",
      link: "http://defi.school"
    },
    {
      image: "https://drive.google.com/file/d/0B4SMvIDw-JJIVy0yb2g3dU1sUG5meENZbW9EYmZzZHBxRnVj/view?usp=sharing",
      link: "http://evernym.com/"
    },
    {
      image: "https://drive.google.com/file/d/1JGO8bvPjEOPIUE8gQ2IUl68_iZZbUkmx/view?usp=sharing",
      link: "http://decrypt.co/"
    },
    {
      image: "https://drive.google.com/file/d/1uFk_T-8ol6AwGFdQ5A7gojnwoiPrp-wB/view?usp=sharing",
      link: "http://cryptoslate.com/"
    },
    {
      image: "https://drive.google.com/file/d/1lGBWrAIELluMEYH7Mq4WJgv8gkOuun2T/view?usp=sharing",
      link: "http://pnwblockchain.com/"
    },
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle: "Achievements & Certifications",

  achivementsCards: [
    {
      title: "3rd Place in Interoperability Challenge at WyoHackathon 2019",
      description: "My team took 3rd Place in WyoHackathon 2019's Interoperability Challenge with MyWallets, a digital wallet aggregator",
      image:
        "https://drive.google.com/file/d/1zgpBF9gNFuCOv_xA9jHb5MroUfm6IoFB/view?usp=sharing",
      footerLink: [
        { name: "Certification", url: "https://devpost.com/software/mywallets-v6ydtc" },
        { name: "Website", url: "https://wyohackathon.io/" }
      ]
    },
    {
      title: "Portfolio?",
      description: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "Super Dope Writer",
      description: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle: "Find my work in these publications",

  blogs: [
    {
      url: "https://medium.com/plutusdefi",
      image: "https://drive.google.com/file/d/12IBVFnHEuoqHa2OPRjeHwfxsXDtscnbC/view?usp=sharing",
      title: "Plutus DeFi",
      description: "Bringing privacy to decentralized finance (DeFi)"
    },
    {
      url: "https://www.evernym.com/blog/",
      image: "https://drive.google.com/file/d/0B4SMvIDw-JJIVy0yb2g3dU1sUG5meENZbW9EYmZzZHBxRnVj/view?usp=sharing",
      title: "Evernym",
      description: "Building the business case for self-sovereign identity"
    }
    {
      url: "https://cryptoslate.com/author/seth-goldfarb/",
      image: "https://drive.google.com/file/d/1uFk_T-8ol6AwGFdQ5A7gojnwoiPrp-wB/view?usp=sharing",
      title: "CryptoSlate",
      description: "Journalism"
    },
    {
      url: "https://decrypt.co/author/sethgoldfarb",
      image: "https://drive.google.com/file/d/1JGO8bvPjEOPIUE8gQ2IUl68_iZZbUkmx/view?usp=sharing",
      title: "Decrypt",
      description: "Journalism"
    },
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I love sharing my passion for marketing emerging technology with others!",

  talks: [
    {
      title: "Everything you need to know about decentralized finance",
      subtitle: "Ethereum Seattle Meetup - January 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "Podcasting is a great way to expand and communicate with your audience",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: "Contact",
  subtitle: "Please email for inquiries",
  email_address: "goldfarbas@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo };
