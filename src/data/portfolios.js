import pro1 from '../img/portImages/pro1.png';
import pro2 from '../img/portImages/pro2.png';
import pro3 from '../img/portImages/pro3.png';
import blog from '../img/portImages/Blog.png';

const portfolios = [
    {
        id: 1,
        category: 'React',
        image: pro1,
        link1: 'https://github.com/ReyesGutierrez-JoseLuis/AdministrativeWebApp',
        link2: 'https://sirre-dashboard.herokuapp.com',
        title: 'Administrative web application',
        text: 'MongoDB, Express, Google Oauth, JavaScript, Handlebars, CSS, SCSS'
    },
    {
        id: 2,
        category: 'React',
        image: pro2,
        link1: 'https://github.com/ReyesGutierrez-JoseLuis/Start-Up',
        link2: 'https://start-up-react-app.netlify.app',
        title: 'React Web Site For Start-Up',
        text: 'React JS, CSS, HTML, API, Node.js'
    },
  
    {
        id: 3,
        category: 'Veu',
        image: blog,
        link1: 'https://github.com/ReyesGutierrez-JoseLuis/MyBlog',
        link2: 'https://myblog-jlrg.netlify.app/',
        title: 'MyBlog Vue and Firebase Application',
        text: 'Vue, JavaScript, Firebase, HTML'
    },
    {
        id: 4,
        category: 'React Native',
        image: pro3,
        link1: 'https://github.com/ReyesGutierrez-JoseLuis/Hunting',
        link2: 'https://expo.dev/@gxxxne/hunting',
        title: 'Hunting React Native App',
        text: 'React Native, JavaScript, Firebase, Facebook API, Google Maps '
    }

  
]

export default portfolios;