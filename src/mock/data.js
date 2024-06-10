import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
    title: "Adeniyi | Software Engineer | Software Developer",
    lang: "en",
    description: `This a Adeniyi Aderounmu Portfolio, i'm a software developer`,
};

// ABOUT DATA
export const aboutData = {
    img: "niyi.jpg",
    paragraphOne: `
    Experienced Software Engineer with 5+ years of experience in
    developing high-quality software solutions. Highly skilled in
    React(Nextjs), Vuejs, Python(Fastapi) and PHP(Laravel).`,
    paragraphTwo: `
    As a seasoned Software Engineer, I bring a dynamic blend of
    expertise and innovation to every project. With years of
    experience in crafting robust and scalable applications, my track
    record speaks for itself.`,
    paragraphThree: "",
    resume: "https://drive.google.com/u/0/uc?id=1i7lNSzaMQxqid6KhZ-FbaexkELjPEQmX&export=download", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: "bolsterImage.png",
        title: "Bolster Networks, Inc.",
        info: "A Python Vue Market Place App that connects Executives with Portfolio Companies",
        info2: "",
        url: "https://bolster.com/",
        repo: "", // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: "rft.png",
        title: "React PWA Template",
        info: "The React PWA Template is a starter project designed to help developers quickly set up a Progressive Web Application (PWA) using React.",
        info2: "",
        url: "https://react-pwa.niyi.com.ng/",
        repo: "https://github.com/teebarg/react-fast-template", // if no repo, the button will not show up
        beta: true,
    },
    {
        id: nanoid(),
        img: "starter.jpg",
        title: "Next/Fastapi Starter template",
        info: "A Starter template for Nextjs and Fastapi to get you started with your next project",
        info2: "",
        url: "https://template.niyi.com.ng",
        repo: "https://github.com/teebarg/shopit", // if no repo, the button will not show up
        beta: true,
    },
    {
        id: nanoid(),
        img: "super.PNG",
        title: "SupermartNG Website",
        info: "A Laravel Vue app which allows Customer by Groceries online",
        info2: "",
        url: "https://www.supermart.ng/",
        repo: "", // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: "my-blog.png",
        title: "Insights",
        info: "This is my personal Blogging site where i write tutorials to help Developers but great softwares",
        info2: "The blog is written with Nextjs and Markdowns",
        url: "https://blog.niyi.com.ng/",
        repo: "https://github.com/teebarg/my-blog", // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: "altara.png",
        title: "Altara Marketing Website",
        info: "A Nextjs app which holds the marketing pages for Altara Credit",
        info2: "",
        url: "https://www.altaracredit.com",
        repo: "https://github.com/AltaraNg/site-v2",
        beta: true,
    },
    {
        id: nanoid(),
        img: "1access.PNG",
        title: "1 Access",
        info: "This is my personal Access Management App",
        info2: "I used React for the frontend and Netlify Lambda Function for the Backend",
        url: "https://password.niyi.com.ng",
        repo: "https://github.com/teebarg/access-manager",
        beta: true,
    },
    {
        id: nanoid(),
        img: "sql-archive.png",
        title: "SQL archive tool",
        info: "An sql archiving tool used to archive mysql databases",
        info2: "",
        url: "https://www.npmjs.com/package/sql-archive",
        repo: "https://github.com/teebarg/sql-archive",
        beta: true,
    },
    {
        id: nanoid(),
        img: "naivas-site.jpg",
        title: "Naivas",
        info: "An Angular developed app which allows Customer shop online in Kenya",
        info2: "",
        url: "https://naivas.co.ke",
        repo: "", // if no repo, the button will not show up
    },
];

// STACK DATA
export const stackData = [
    {
        id: nanoid(),
        name: "Javascript",
        img: "js.png",
    },
    {
        id: nanoid(),
        name: "Vue",
        img: "vue.png",
    },
    {
        id: nanoid(),
        name: "Angular",
        img: "angular.png",
    },
    {
        id: nanoid(),
        name: "NextJs",
        img: "next.png",
    },
    {
        id: nanoid(),
        name: "AWS",
        img: "aws.png",
    },
    {
        id: nanoid(),
        name: "Laravel",
        img: "laravel.png",
    },
    {
        id: nanoid(),
        name: "Node",
        img: "node.jpg",
    },
    {
        id: nanoid(),
        name: "React",
        img: "react.png",
    },
    {
        id: nanoid(),
        name: "typescript",
        img: "typescript.png",
    },
    {
        id: nanoid(),
        name: "Docker",
        img: "docker.png",
    },
    {
        id: nanoid(),
        name: "Python",
        img: "python.jpeg",
    },
    {
        id: nanoid(),
        name: "FastApi",
        img: "fast.png",
    },
    {
        id: nanoid(),
        name: "Argo",
        img: "argo.png",
    },
];

// SKILLS DATA
export const skillsData = [
    {
        id: nanoid(),
        img: "school.jpg",
        time: "2015 - 2017 | Kwara State University",
        title: "School",
        role: "Bachelor of Science",
        desc: `I graduated with a Bachelor of science in computer science.
              Lots of this knowledge can be applied for more complex problems
              in client-server architectures.`,
    },
    {
        id: nanoid(),
        img: "office1.jpg",
        time: "2016 - 2018 | Flicks Technologies",
        title: "flicks",
        role: "Fullstack Developer",
        desc: `Developing front end website architecture. Designing user interactions on web pages`,
    },
    {
        id: nanoid(),
        img: "office2.jpg",
        time: "2018 - 2019 | Supermart NG",
        title: "supermart",
        role: "Software Engineer",
        desc: `Developing back end website applications.
        Ensuring cross-platform optimization for mobile phones,
      Ensuring responsiveness of applications`,
    },
    {
        id: nanoid(),
        img: "office3.jpg",
        time: "2020 - 2023 | Altara Credit Limited",
        title: "altara",
        role: "Senior Software Engineer",
        desc: `Designing and developing APIs,
              Staying abreast of developments in web applications and programming languages.
              Ensure software is up-to-date with latest technologies.`,
    },
    {
        id: nanoid(),
        img: "bolster.png",
        time: "2021 - To Date | Bolster Network Inc",
        title: "bolster networks, inc.",
        role: "Senior Software Engineer",
        desc: `Designing and developing APIs(Python),
              Create beautiful pixel perfect UI(Vuejs)`,
    },
];

// TESTIMONIES DATA
export const testimoniesData = [
    {
        id: nanoid(),
        name: "Chad Shisanto",
        img: "chad.jpeg",
        role: "Engineering Manager, Bolster",
        comment: `"Niyi has consistently demonstrated exceptional technical proficiency
        and a strong commitment to quality in his role as a software engineer. His ability to tackle
        complex problems with innovative solutions has significantly contributed to the success of our projects. 
        John collaborates effectively with team members, communicates clearly, and shows a remarkable 
        dedication to meeting deadlines without compromising code quality. His proactive approach to learning and continuous improvement 
        makes him an invaluable asset to our engineering team."`,
    },
    {
        id: nanoid(),
        name: "Dayo Aderemi",
        img: "sass.png",
        role: "Senior Manager, Access Systems",
        comment: `"Adeniyi takes his work very seriously and regularly enrolled in classes to
    stay abreast of the newest developments in programming. He also traveled to conferences across
    the country for this purpose. His ongoing professional development courses and trips helped him
    to easily learn new techniques and perform complex tasks the first time around."`,
    },
    {
        id: nanoid(),
        name: "Samuel Oyegbemi",
        img: "samuel.jpg",
        role: "Senior Software Engineer, WebCoupers",
        comment: `"Adeniyi would be an asset to have on any team. To say he's a team leader would
    be an understatement. During our time working on a streaming app, he's gone out of his way to
    welcome newcomers and resolve any problems they might have. He pitches innovative ideas at
    meetings but also listens to what others have to say."`,
    },
];

// FOOTER DATA
export const footerData = {
    networks: [
        {
            id: nanoid(),
            name: "twitter",
            url: "",
        },
        {
            id: nanoid(),
            name: "codepen",
            url: "",
        },
        {
            id: nanoid(),
            name: "linkedin",
            url: "https://www.linkedin.com/in/adeniyi-aderounmu-b46724ba/",
        },
        {
            id: nanoid(),
            name: "github",
            url: "https://github.com/teebarg",
        },
    ],
};
