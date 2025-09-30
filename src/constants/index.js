import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  discord,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "1",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Mail Me",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=rythamcwork@gmail.com&su=Subject%20Here&body=Message%20Here",
    onlyMobile: true,
    target: "_blank",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText = "from Chandigarh University, Chandigarh. 2022 - 2024";
export const collabText1 =
  "from Dr.Virendra Swarup Institute of Computer Studies , Kanpur. 2017 - 2020";
export const collabText2 = "from The Chintels School , Kanpur. 2016 - 2017";
export const collabText3 = "from The Chintels School , Kanpur. 2015 - 2016";

export const collabContent = [
  {
    id: "0",
    title: "Masters of Computer Application",
    text: collabText,
  },
  {
    id: "1",
    title: "Bachelor of Computer Application",
    text: collabText1,
  },
  {
    id: "2",
    title: "Class 12th",
    text: collabText2,
  },
  {
    id: "3",
    title: "Class 10th",
    text: collabText3,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Developer",
    description: "at Unacademy , Noida.",

    features: [
      "Implemented role-based dashboards that personalized views for sales reps, team leads, and managers, improving decision making and tracking KPIs.",
    ],
  },
  {
    id: "1",
    title: "Developer",
    description:
      "at Maivin Consulting Services Private Limited , Greater Noida.",

    features: [
      "Implemented performance enhancement strategies such as code minification, image optimization, and asynchronous JavaScript to improve website speed and performance.",
      "Applied responsive design techniques to ensure websites are mobile-friendly, using CSS media queries and flexible grid layouts to accommodate various devices and screen sizes.",
      "Integrated SAP systems with client web portals for multiple companies, including Vision Spring, PRK Technologies, Yellow Light Store, MACBEE, and Capstone Polyweave.Custom-coded solutions for seamless data exchange between SAP modules and web applications",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "YouTube Clone",
    text: "Gained hands-on experience with CSS by using absolute and relative positioning to create thumbnails that display the length of the video.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,
    imageUrl:
      "https://c0.wallpaperflare.com/preview/602/600/844/youtube-youtube-inc-youtube-logo.jpg",
    light: true,
    checkUrl: "https://rythamchopra.github.io/youtube-clone/",
  },
  {
    id: "1",
    title: "Amazon Clone",
    text: "Applied JavaScript in practice, specifically by implementing features such as adding items to the cart. Selected items would then be displayed in the cart.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/326/652/983/background-logo-logo-black-wallpaper-preview.jpg",
    checkUrl: "https://rythamchopra.github.io/amazon-clone/",
  },
  {
    id: "2",
    title: "Tab Switching Functionality",
    text: "Created a tab-switching project , enabling users to seamlessly switch between different content sections.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/966/672/905/javascript-minimalism-wallpaper-preview.jpg",
    checkUrl: "https://rythamchopra.github.io/tab-switches-using-js/",
  },
  {
    id: "3",
    title: "To Do List and Rock Paper Scissors",
    text: "Developed a to-do list application , allowing users to add, edit, and remove tasks with dynamic state updates. Additionally, created a Rock-Paper-Scissors game where users compete against a computer, with React managing game logic and state.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/899/325/192/minimalism-rock-paper-scissors-wallpaper-preview.jpg",
    light: true,
    checkUrl: "https://rythamchopra.github.io/rock-paper-scissor_todo-list/",
  },
  {
    id: "4",
    title: "LeetCode",
    text: "Worked on coding challenges in Java to enhance my logic-building skills, tackling a variety of problems on LeetCode.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,
    imageUrl:
      "https://raw.githubusercontent.com/LeetCode-OpenSource/vscode-leetcode/master/resources/LeetCode.png",
    checkUrl: "https://leetcode.com/u/RythamChopra/",
  },
  {
    id: "5",
    title: "React JS Movie App",
    text: "Utilized a movie API to display specific movies based on user searches. The site will be live soon.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "https://wallpaperaccess.com/full/3949076.jpg",
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/rythamisalive.com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
