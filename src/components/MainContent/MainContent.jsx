import React from 'react'
import { Link } from 'react-scroll'
import { SvgLogos, Projects } from '../../data'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Form from '../Form/Form'
import {socialMedias} from '../../data'


const MainContent = () => {

    return (
      <>
        <header className="hero">
            <ul className='hero-links'>
              {socialMedias.map((socialMedia, i) => (
                <li key={i}><a href={socialMedia.url} className='test'>{socialMedia.icon}</a></li>
              ))}
            </ul>
            <div className='main-hero'>
              <p>My name is</p>
              <h2>Emanuel Tejada</h2>
              <h4>Web developer</h4>
              <Link spy={true}
                    smooth={true}
                    offset={-135}
                    duration={1000} 
                    activeClass='active' 
                    to='contact'
                    className='hero-btn'>Get in touch</Link>
            </div>
        </header>
        <section>
          <section className='about'>
          <h2>About Me</h2>
          <p>Hi! My name is Emanuel and I'm currently a software developer graduated from the ITSC, I'm also a self taugth web developer. I'd like to say learning to code has been a dififult journey, however I keep putting effort and time every day learning new skills  and improving what I already know to bring value to any future employer or customer that I could have. Even if it's difficult, I belive in my habilities to learn and keep going this road much further</p>
          </section>
          <section>
                <h2>Skills</h2>
                <div className='skills'>
                  {SvgLogos.map( (logo, i) => (
                     <div key={i} className='skill'>
                       <img  src={logo.url} alt={logo.alt} />
                       <h4>{logo.name}</h4>
                     </div>  
                   ))}
                </div>
                   
          </section>
         </section>
          <main>   
              <h2>Projects</h2>
              <div className='projects'>
              {Projects.map( (project, i) => (
                <div key={i} className='project'>
                  <div className='project-info'>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className='tech-icons'>
                      {project.usedTech.map((icon, i) =>(
                        <img className='tech-icon' src={icon} alt='tech icon'  key={i} />
                      ))}
                    </div>
                    <div className='buttons'>
                        <a href={project.github} rel="noreferrer" target='_blank' className='button'>Github <i><FiGithub /></i></a>
                        <a href={project.deployed} rel="noreferrer" target='_blank' className='button'>Live <i><FiExternalLink /></i></a>
                    </div>
                   
                  </div>
                  <img src={project.image} alt={project.alt} className='project-image'/>
                </div>
              ))}
              </div>
          </main>

          <section className='contact'>
            <h2>Get in touch</h2>
            <Form />
          </section>

      </>
    )
}

export default MainContent
