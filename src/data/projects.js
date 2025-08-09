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
    nextjs,
    gql,
    zustand,
    barcelonaMobilityApi,
    threejs
  }
} = require('./badges');

const projects = [
  {
    name: 'Eterio',
    description: 'Cocktails Library',
    img: 'eterio.png',
    link: 'https://maximka76667.github.io/eterio',
    repoLink: 'https://github.com/maximka76667/jwt-generator',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, sass, ghpages],
    backStack: [python, fastapi, firebase],
    otherStacks: [docker, gcp]
  },
  {
    name: 'Metro Map',
    description: 'Interactive metro map',
    img: 'metro-barca.png',
    link: 'https://learn-r3f-nine.vercel.app/',
    repoLink: 'https://github.com/maximka76667/learn-r3f',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, gql, threejs, zustand, ghpages],
    backStack: [barcelonaMobilityApi],
    otherStacks: [vercel]
  },
  {
    name: 'Dimitry Portfolio',
    description: 'Artist portfolio',
    img: 'dimitry-portfolio.png',
    link: 'https://dimitry-portfolio-jet.vercel.app/',
    repoLink: 'https://github.com/maximka76667/dima-portfolio',
    color: '#f7f7f7',
    bgColor: '#000000',
    frontStack: [react, typescript, tailwind],
    backStack: [nextjs, vercel]
  },
  {
    name: 'What Did I Do',
    description: 'To Do List',
    img: 'whatdid.png',
    link: 'https://maximka76667.github.io/what-did-i-do',
    repoLink: 'https://github.com/maximka76667/what-did-i-do',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, sass, ghpages],
    backStack: [node, express, mongo],
    otherStacks: [docker, circleci, gcp]
  },
  {
    name: 'Dashboard',
    description: 'Starter Next.js project',
    img: 'dashboard.png',
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
    img: 'movies-explorer.png',
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
    img: 'mesto.png',
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
    img: 'kinopoisk.png',
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
    img: 'ttt.png',
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
    img: 'calcutador.png',
    link: 'https://maximka76667.github.io/calcutador',
    linkName: 'Calculate (Demo)',
    repoLink: 'https://github.com/maximka76667/calcutador',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, css, ghpages]
  },
  {
    name: 'JWT Generator',
    description: 'Simple Jwt Generator',
    img: 'jwt-generator.png',
    link: 'https://maximka76667.github.io/jwt-generator',
    repoLink: 'https://github.com/maximka76667/jwt-generator',
    color: '#000000',
    bgColor: '#f7f7f7',
    frontStack: [react, typescript, redux, sass, ghpages]
  },
  {
    name: 'Pass Gen',
    description: 'Password generator',
    img: 'passgen.png',
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
    img: 'dino-game.png',
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
