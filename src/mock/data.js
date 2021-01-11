import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Adeniyi | Software Engineer | Software Developer',
  lang: 'en',
  description: `This a Adeniyi Aderounmu Portfolio, i'm a software developer`,
};

// ABOUT DATA
export const aboutData = {
  img: 'niyi.jpg',
  paragraphOne: `I am an enthusiastic self starting and highly capable
  Senior Software Developer who has 4+ years experience developing Web Applications with PHP,
  Javascript, HTML, CSS and other web technologies, and building desktop apps with Java. I love
  solving architecturally challenging and intricate software problems`,
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/uc?export=download&amp;id=1xIib4odCxvvHUezKNzL3Rx6JTt6BMmYe', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'super.PNG',
    title: 'SupermartNG Website',
    info: 'A Laravel Vue app which allows Customer by Groceries online',
    info2: '',
    url: 'https://www.supermart.ng/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cyna.PNG',
    title: 'Cynactics',
    info:
      'This is a laravel Nuxtjs app that allows users get Predictions of Sport Games. Cynatics is an Online Sport Betting prediction site which use Artificial learning to predict Game outcomes based on team history',
    info2: 'I used nuxtjs for the frontend and Laravel for the Backend',
    url: 'https://www.gamelab.tk',
    repo: 'https://github.com/teebarg/cynatics_vue', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.PNG',
    title: 'Adeniyi Blog',
    info: 'This is my personal Blogging site where i write tutorials to help Developers',
    info2: 'I used Gatsby for the frontend and Wordpress for the Backend',
    url: 'https://adeniyi-blog.tk/',
    repo: 'https://github.com/teebarg/adeniyi-blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '1access.PNG',
    title: '1 Access',
    info: 'This is my personal Access Management App',
    info2: 'I used React for the frontend and Netlify Lambda Function for the Backend',
    url: 'https://1access.tk/',
    repo: 'https://github.com/teebarg/access-manager', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'healthplus.jpg',
    title: 'HealthPlus',
    info:
      'An Angular developed app which allows Customer by drugs online from the number 1 pharmaceutical company in Nigeria',
    info2: '',
    url: 'https://healthplus.com.ng/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'scrapper.PNG',
    title: 'JScrapper',
    info:
      'JScrapper is an app that allows you to scrape Jumia Website and get the best deal on products',
    info2: 'Vue js was used for frontend and Node(Express) for backend',
    url: 'https://jscrapper.tk/',
    repo: 'https://github.com/teebarg/JScrapperF',
  },
  {
    id: nanoid(),
    img: 'naivas-site.jpg',
    title: 'Naivas',
    info: 'An Angular developed app which allows Customer shop online in Kenya',
    info2: '',
    url: 'https://naivas.co.ke',
    repo: '', // if no repo, the button will not show up
  },
];

// STACK DATA
export const stackData = [
  {
    id: nanoid(),
    name: 'Javascript',
    img: 'js.png',
  },
  {
    id: nanoid(),
    name: 'Vue',
    img: 'vue.png',
  },
  {
    id: nanoid(),
    name: 'Angular',
    img: 'angular.png',
  },
  {
    id: nanoid(),
    name: 'Gatsby',
    img: 'gatsby.png',
  },
  {
    id: nanoid(),
    name: 'aws',
    img: 'aws.png',
  },
  {
    id: nanoid(),
    name: 'Laravel',
    img: 'laravel.png',
  },
  {
    id: nanoid(),
    name: 'Node',
    img: 'node.jpg',
  },
  {
    id: nanoid(),
    name: 'PHP',
    img: 'php.png',
  },
  {
    id: nanoid(),
    name: 'React',
    img: 'react.png',
  },
  {
    id: nanoid(),
    name: 'sass',
    img: 'sass.png',
  },
  {
    id: nanoid(),
    name: 'typescript',
    img: 'typescript.png',
  },
  {
    id: nanoid(),
    name: 'heroku',
    img: 'heroku.png',
  },
  {
    id: nanoid(),
    name: 'Docker',
    img: 'docker.png',
  },
];

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    img: 'school.jpg',
    time: '2015 - 2017 | Kwara State University',
    title: 'School',
    role: 'Bachelor of Science',
    desc: `I graduated with a master of science in computer science.
     Lots of this knowledge can be applied for more complex problems
     in client-server architectures.`,
  },
  {
    id: nanoid(),
    img: 'office1.jpg',
    time: '2016 - 2018 | Flicks Technologies',
    title: 'flicks',
    role: 'Fullstack Developer',
    desc: `Developing front end website architecture. Designing user interactions on web pages`,
  },
  {
    id: nanoid(),
    img: 'office2.jpg',
    time: '2018 - 2019 | Supermart NG',
    title: 'supermart',
    role: 'Software Engineer',
    desc: `Developing back end website applications.
        Ensuring cross-platform optimization for mobile phones,
      Ensuring responsiveness of applications`,
  },
  {
    id: nanoid(),
    img: 'office3.jpg',
    time: '2020 - To Date | Altara Credit',
    title: 'altara',
    role: 'Senior Software Engineer',
    desc: `Designing and developing APIs, 
    Staying abreast of developments in web applications and programming languages.
    Ensure software is up-to-date with latest technologies.
     Ensure software is up-to-date with latest technologies`,
  },
];

// TESTIMONIES DATA
export const testimoniesData = [
  {
    id: nanoid(),
    name: 'Dayo Aderemi',
    img: 'sass.png',
    role: 'Senior Engineer, Access Systems',
    comment: `"Adeniyi takes his work very seriously and regularly enrolled in classes to
    stay abreast of the newest developments in programming. He also traveled to conferences across
    the country for this purpose. His ongoing professional development courses and trips helped him
    to easily learn new techniques and perform complex tasks the first time around."`,
  },
  {
    id: nanoid(),
    name: 'Femi Akinola',
    img: 'femi.jpg',
    role: 'CEO/Founder, Flicks Technologies',
    comment: `"As Founder and developer at Flicks, I had to often work with
    Adeniyi on Software Design for some of the platforms we developed. In particular, we worked
    together on Education Managament System and his contributions were
    always insightful and provided a unique perspective."`,
  },
  {
    id: nanoid(),
    name: 'Samuel Oyegbemi',
    img: 'samuel.jpg',
    role: 'Senior Software Engineer, WebCoupers',
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
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adeniyi-aderounmu-b46724ba/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/teebarg',
    },
  ],
};
