import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
    title: "Adeniyi Aderounmu | Software Engineer | AI/ML Engineer | Full Stack Developer",
    lang: "en",
    description: `This is Adeniyi Aderounmu's portfolio, a software developer specializing in full-stack web applications, AI/ML, cloud infrastructure, and modern web technologies like React, Next.js, and Vue.js. Building scalable, high-performance applications with a focus on user experience and system reliability for enterprise-grade solutions with a passion for shipping reliable software that scales efficiently across cloud-native and edge environments.`,
};

// ABOUT DATA
export const aboutData = {
    img: "niyi.jpg",
    paragraphOne: `
    Full Stack Software Engineer with a proven track record in building high-performance, scalable web applications 
    across e-commerce, AI, marketplace, and data visualization domains. Skilled in both backend and frontend 
    development — from Python (FastAPI, Flask) and Node.js microservices to Next.js, React, 
    and Vue.js interfaces designed for speed and accessibility.`,
    paragraphTwo: `
    Well-versed in asynchronous architecture and real-time systems, leveraging Redis, message brokers, 
    and background task processing to deliver seamless user experiences. Strong focus on search, 
    recommendations, and intelligent automation, using technologies such as Meilisearch, Qdrant / vector databases, 
    and LLM-powered chat and personalization.`,
    paragraphThree: `
    Experienced with secure, production-grade payment integrations including Paystack and Stripe, 
    and robust database solutions (PostgreSQL, DynamoDB, Supabase). Skilled in building cloud-native infrastructure on AWS, 
    Render, and Google Cloud, utilizing Docker, CI/CD, telemetry monitoring, edge caching, and performance optimization techniques.

    Passionate about shipping reliable software that scales — from architecture and database design to deployment and analytics.
    `,
    resume: "https://drive.google.com/file/d/1e-EGRTkMDXGtoL1Q84wYH7h9oYx6Ou2N/view?usp=sharing",
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
        repo: "",
    },
    {
        id: nanoid(),
        img: "commerce.png",
        title: "Revogue Fashion",
        info: "E-commerce store built with Next.js, FastAPI, PostgreSQL — featuring Meilisearch product search, Redis caching, Vector DB-powered recommendations and chatbot, and Paystack checkout.",
        info2: "",
        url: "https://www.revoque.com.ng",
        repo: "https://github.com/teebarg/botcommerce",
    },
    {
        id: nanoid(),
        img: "pulse.png",
        title: "Pulse Metrics",
        info: "PulseMetrics is a real-time analytics SaaS platform designed for e-commerce stores.",
        info2: "",
        url: "https://pulse.revoque.com.ng/",
        repo: "https://github.com/teebarg/pulse-metrics",
    },
    {
        id: nanoid(),
        img: "super.PNG",
        title: "SupermartNG Website",
        info: "A Laravel PHP-powered e-commerce platform that enables customers to shop for groceries online, with the frontend built using Vue.js",
        info2: "",
        url: "https://www.supermart.ng/",
        repo: "",
    },
    {
        id: nanoid(),
        img: "my-blog.png",
        title: "Insights",
        info: "This is my personal Blogging site where I write tutorials to help developers with great software",
        info2: "The blog is written with Next.js and Markdown files for easy content management and deployment.",
        url: "https://blog.niyi.com.ng/",
        repo: "https://github.com/teebarg/my-blog",
    },
    {
        id: nanoid(),
        img: "altara.png",
        title: "Altara Marketing Website",
        info: "A Next.js app which holds the marketing pages for Altara Credit",
        info2: "Built with Next.js and deployed on Vercel for fast performance and global availability.",
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
        info: "An Angular/Laravel developed e-commerce app which allows customers to shop online in Kenya",
        info2: "Built with Angular for the frontend and Laravel for the backend, deployed on AWS. Features include user authentication, product catalog, shopping cart, payment processing with Stripe integration, and responsive design with modern UI/UX principles for an optimal shopping experience.",
        url: "https://naivas.co.ke",
        repo: "",
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
        name: "Vector DB",
        img: "vector.jpeg",
    },
    {
        id: nanoid(),
        name: "Redis",
        img: "redis.png",
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
        time: "2021 - 2024 | Bolster Network Inc",
        title: "bolster networks, inc.",
        role: "Senior Software Engineer",
        desc: `Designing build an AI-powered executive search platform using Vue.js, Python (Flask, FastAPI), DynamoDB, and Elasticsearch,
              Create beautiful pixel perfect UI(Vuejs)`,
    },
    {
        id: nanoid(),
        img: "revoque.png",
        time: "2024 - Present | Revoque",
        title: "revoque",
        role: "Lead Engineer",
        desc: `Designing and building an AI-powered e-commerce platform using Nextjs, Python, PostgreSQL, Meilisearch, VectorDB and Redis.`,
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
        img: "femi.jpg",
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
