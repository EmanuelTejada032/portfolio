
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const html5 = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/html5_kt9kol.svg'
const css3 = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/css3_degk7j.svg'
const javascript = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617839889/Test/logo-javascript_ipm3za.svg'
const bootstrap = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617833898/Test/bootstrap-4_lgpmht.svg'
const react = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617833898/Test/react-2_z8tmub.svg'
const materialUI = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617839889/Test/material-ui-1_khpiqs.svg'
const nodeJs = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/nodejs-icon_vpzqco.svg'
const mongoDB = 'https://res.cloudinary.com/emanueltejada/image/upload/v1617844514/Test/mongodb-icon-1_yd86rk.svg'


export const SvgLogos = [
    {
        name: 'HTML5',
        alt: 'Html5 logo',
        url: html5
    },
    {
        name: 'CSS3',
        alt: 'CSS3 UI logo',
        url: css3
    },
    {   
        name: 'Javascript',
        alt: 'Javascript logo',
        url: javascript
    },
    {   
        name: 'Bootstrap',
        alt: 'Bootstrap logo',
        url: bootstrap,
    },
    {
        name: 'Node Js',
        alt: 'Node Js logo',
        url: nodeJs
    },
    {
        name: 'Mongo DB',
        alt: 'Mongo DB logo',
        url: mongoDB
    },
    
    {
        name: 'React',
        alt: 'React logo',
        url: react
    },
    {
        name: 'Material UI',
        alt: 'Material UI logo',
        url: materialUI
    },
       
]

export const Projects = [
    {
        title: 'Yelpcamp',
        description: 'This is an application built into the web developer bootcamp from udemy, the course teach fundamentals about Node.js, Express and Mongodb, on top of the course content I added some features like user roles, search functionality, simple profile page, favorite section and more details.',
        usedTech: [
            html5,
            css3,
            javascript,
            mongoDB,
            bootstrap,
            nodeJs
        ],
        image: 'https://res.cloudinary.com/emanueltejada/image/upload/v1618423385/Test/Home_tir3yy.png',
        github: 'https://github.com/EmanuelTejada032/yelp',
        deployed: 'https://protected-badlands-88004.herokuapp.com/',
        fade: 'fade-right'
    },
    {
        title: 'Shopping Cart',
        description: 'I recreated a simple front-end for e-commerce to learn about React and Material UI, This app is using a third party API called commerce js to fetch products and other functionality without the need of a complex backend',
        usedTech: [
            html5,
            css3,
            javascript,
            react,
            materialUI,
            
        ],
        image: 'https://res.cloudinary.com/emanueltejada/image/upload/v1618505015/Test/Screenshot_1_hhzfok.png',
        github: 'https://github.com/EmanuelTejada032/commercejs',
        deployed: 'https://shopping-cart.emanueltejada.site/',
        fade: 'fade-left'
    },
    {
        title: 'FakeFlix',
        description: 'In the process of learning react, I\'ve built a simple movie application with react fetching posters and other information about movies and tv shows from themoviedb API.',
        usedTech: [
            html5,
            css3,
            javascript,
            react
        ],
        image: 'https://res.cloudinary.com/emanueltejada/image/upload/v1620008691/Test/WhatsApp_Image_2021-05-02_at_10.21.40_PM_bo0srd.jpg',
        github: 'https://github.com/EmanuelTejada032/fakeflix',
        deployed: 'https://fakeflix.emanueltejada.site/',
        fade: 'fade-right'
    }
]


export const  socialMedias = [
    {
        title: 'linkedin',
        url: 'https://www.linkedin.com/in/emanuel-tejada/',
        icon: <FiLinkedin />
    },
    {
        title: 'github',
        url:'https://github.com/EmanuelTejada032',
        icon: <FiGithub />
    },
    {
        title: 'twitter',
        url:'https://twitter.com/emanueltejada3',
        icon: <FiTwitter />
    },
    {
        title: 'instagram',
        url:'https://www.instagram.com/emanueltejada/',
        icon: <FaInstagram />
    }
]