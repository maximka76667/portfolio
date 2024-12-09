const {
  badges: {
    react,
    typescript,
    sass,
    python,
    fastapi,
    firebase,
    docker,
    gcp,
    redux,
    node,
    mongo,
    circleci,
    ghpages,
    express,
    javascript,
    css,
    pg,
    vercel,
    tailwind,
    nextjs
  }
} = require('./badges');

const projects = [
  {
    name: 'Eterio',
    description: 'Cocktails Library',
    img: 'https://imgur.com/xEnpn9g.png',
    link: 'https://maximka76667.github.io/eterio',
    repoLink: 'https://github.com/maximka76667/jwt-generator',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, sass, ghpages],
    backStack: [python, fastapi, firebase],
    otherStacks: [docker, gcp]
  },

  {
    name: 'What Did I Do',
    description: 'To Do List',
    img: 'https://imgur.com/HpsOjpo.png',
    link: 'https://maximka76667.github.io/what-did-i-do',
    repoLink: 'https://github.com/maximka76667/what-did-i-do',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, sass, ghpages],
    backStack: [node, express, mongo],
    otherStacks: [docker, circleci, gcp]
  },
  {
    name: 'JWT Generator',
    description: 'Simple Jwt Generator',
    img: 'https://imgur.com/wYRPYO1.png',
    link: 'https://maximka76667.github.io/jwt-generator',
    repoLink: 'https://github.com/maximka76667/jwt-generator',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, redux, sass, ghpages]
  },
  {
    name: 'Dashboard',
    description: 'Starter Next.js project',
    img: 'https://imgur.com/J7dRCNx.png',
    link: 'https://nextjs-dashboard-orpin-sigma-26.vercel.app/dashboard',
    linkName: 'Link to next.js dashboard',
    repoLink: 'https://github.com/maximka76667/nextjs-dashboard',
    color: '#000000',
    bgColor: '#ffffff',
    frontStack: [react, typescript, css, tailwind],
    backStack: [pg],
    otherStacks: [nextjs, vercel]
  },
  {
    name: 'Movies Explorer',
    description: 'Searching and saving movies',
    img: 'https://imgur.com/4wb6GH8.png',
    link: 'https://maximka76667.github.io/movies-explorer-frontend',
    linkName: 'Save some movies (Demo)',
    repoLink: 'https://github.com/maximka76667/movies-explorer-frontend',
    color: '#ffffff',
    bgColor: '#072e3f',
    frontStack: [react, javascript, css, ghpages],
    backStack: [node, express, mongo],
    otherStacks: [docker, gcp]
  },
  {
    name: 'Mesto',
    description: 'Photos posting social media',
    img: 'https://imgur.com/ICNuiBr.png',
    link: 'https://maximka76667.github.io/react-mesto-auth',
    linkName: 'Post photos (Demo)',
    repoLink: 'https://github.com/maximka76667/react-mesto-api-full',
    color: '#ffffff',
    bgColor: '#000000',
    frontStack: [react, javascript, css, ghpages],
    backStack: [node, express, mongo]
  },
  {
    name: 'Kinopoisk',
    description: 'Search movies info',
    img: 'https://imgur.com/3NwgDu2.png',
    link: 'https://maximka76667.github.io/kinopoisk',
    linkName: 'See project (Demo)',
    repoLink: 'https://github.com/maximka76667/kinopoisk',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, javascript, css, ghpages]
  },
  {
    name: 'Tic Tac Toe',
    description: 'Single and multiplayer game',
    img: 'https://imgur.com/DWIac4v.png',
    link: 'https://maximka76667.github.io/tic-tac-toe',
    linkName: 'Tic Tac Toe (Demo)',
    repoLink: 'https://github.com/maximka76667/tic-tac-toe',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, sass, ghpages]
  },

  {
    name: 'CalcuTADOR',
    description: 'Calculator which detects KeyPress events',
    img: 'https://imgur.com/ydtfSkV.png',
    link: 'https://maximka76667.github.io/calcutador',
    linkName: 'Calculate (Demo)',
    repoLink: 'https://github.com/maximka76667/calcutador',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, css, ghpages]
  },
  {
    name: 'Pass Gen',
    description: 'Password generator',
    img: 'https://imgur.com/LrrnwHU.png',
    link: 'https://maximka76667.github.io/pass-gen',
    linkName: 'Generate password (Demo)',
    repoLink: 'https://github.com/maximka76667/pass-gen',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, sass, ghpages]
  },
  {
    name: 'Dino Game',
    description: 'Clone of Google Dino Game',
    img: 'https://imgur.com/QzzWbGh.png',
    link: 'https://maximka76667.github.io/dino-game',
    linkName: 'Play it again?! (Demo)',
    repoLink: 'https://github.com/maximka76667/dino-game',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [javascript, css, ghpages]
  }
];

function getProjects() {
  return projects;
}

module.exports = {
  getProjects
};
