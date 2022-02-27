import './Home.css';
import photo from '../../images/photo.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="about-me">
        <h1 className="about-me__greetings">I‘m <span className='about-me__name'>Maxim</span>. I‘m web developer and I love it! <span className='about-me__heart'>❤</span></h1>
        <img className='about-me__photo' src={photo} alt="" />
      </div>
      <div className='home__links'>
        <Link to="/projects" className="home__link">Look my projects</Link>
        <Link to="/blog" className="home__link">Read my blog</Link>
      </div>
    </div>
  )
}

export default Home;