/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
import React, { useEffect, useRef, useContext } from 'react'
import ThemeContext from './../context/ThemeContext'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projectImage1 from './../assets/project-image-1.PNG'
import projectImage2 from './../assets/project-image-2.PNG'
import projectImage3 from './../assets/project-image-3.PNG'
import projectImage4 from './../assets/project-image-4.PNG'
import projectImage5 from './../assets/project-image-5.PNG'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { ImEmbed2 } from 'react-icons/im'
import './styles/Projects.css'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const { darkTheme } = useContext(ThemeContext)
  const titleProjects = useRef(null)
  const paraProjects = useRef(null)
  const listProjects = useRef(null)

  useEffect(() => {
    gsap.to(titleProjects.current, {
      scrollTrigger: {
        trigger: titleProjects.current,
        start: 'top bottom',
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut,
    })
    gsap.to(paraProjects.current, {
      scrollTrigger: {
        trigger: paraProjects.current,
        start: 'top bottom',
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut,
    })
    gsap.to(listProjects.current, {
      scrollTrigger: {
        trigger: listProjects.current,
        start: 'top bottom',
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut,
    })
  }, [])

  const butStyle = {
    backgroundColor: '#109259',
    color: '#fefefe',
    border: 'none',
    transition: 'all 1s ease',
  }

  const butCustomStyle = darkTheme ? butStyle : null

  return (
    <section id='projects' className='Projects__Section'>
      <h2 ref={titleProjects}>My Projects</h2>
      <p ref={paraProjects}>
        I love to code ideas, making layouts, designing prototypes, deploying
        results, and fulfilling dreams.
      </p>
      <div ref={listProjects} className='Projects__List'>
        <article className='Projects__Item'>
          <header className='Item__Title'>
            <IoCheckmarkCircleSharp className='Item__Tic' />
            <div className='Title-Techs'>
              <h2>
                <a
                  href='https://objective-ritchie-3edf0b.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Adopt Me App
                </a>
              </h2>
              <span>React | JavaScript | CSS3 | Parcel</span>
            </div>
            <a
              className='Item__Code-Link'
              href='https://github.com/jorge-llanque/Adopt-me'
              target='_blank'
              rel='noreferrer'
            >
              <ImEmbed2 />
            </a>
          </header>
          <div className='Thumbnail__Wrap'>
            <img src={projectImage5} alt='img' />
          </div>
        </article>
        <article className='Projects__Item'>
          <header className='Item__Title'>
            <IoCheckmarkCircleSharp className='Item__Tic' />
            <div className='Title-Techs'>
              <h2>
                <a
                  href='https://nutrition-information-jorge-llanque.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Nutrition Recipes
                </a>
              </h2>
              <span>React | JavaScript | CSS3 | API Edamam</span>
            </div>
            <a
              className='Item__Code-Link'
              href='https://github.com/jorge-llanque/Recipe-Preparation-React'
              target='_blank'
              rel='noreferrer'
            >
              <ImEmbed2 />
            </a>
          </header>
          <div className='Thumbnail__Wrap'>
            <img loading='lazy' src={projectImage1} alt='img' />
          </div>
        </article>
        <article className='Projects__Item'>
          <header className='Item__Title'>
            <IoCheckmarkCircleSharp className='Item__Tic' />
            <div className='Title-Techs'>
              <h2>
                <a
                  href='https://favoritevideos.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Favorite Videos
                </a>
              </h2>
              <span>SCSS | Redux | React | Jest | Webpack</span>
            </div>
            <a
              className='Item__Code-Link'
              href='https://github.com/jorge-llanque/favorite_videos'
              target='_blank'
              rel='noreferrer'
            >
              <ImEmbed2 />
            </a>
          </header>
          <div className='Thumbnail__Wrap'>
            <img loading='lazy' src={projectImage2} alt='img' />
          </div>
        </article>
        <article className='Projects__Item'>
          <header className='Item__Title'>
            <IoCheckmarkCircleSharp className='Item__Tic' />
            <div className='Title-Techs'>
              <h2>
                <a
                  href='https://yourfriendlystore.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Your Friendly Store
                </a>
              </h2>
              <span>React | Redux | SCSS | API Paypal | API Asos</span>
            </div>
            <a
              className='Item__Code-Link'
              href='https://github.com/jorge-llanque/Your-friend-store'
              target='_blank'
              rel='noreferrer'
            >
              <ImEmbed2 />
            </a>
          </header>
          <div className='Thumbnail__Wrap'>
            <img loading='lazy' src={projectImage3} alt='img' />
          </div>
        </article>
        <article className='Projects__Item'>
          <header className='Item__Title'>
            <IoCheckmarkCircleSharp className='Item__Tic' />
            <div className='Title-Techs'>
              <h2>
                <a
                  href='https://gifshuriken.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Shuriken Gif
                </a>
              </h2>
              <span>React | CSS3 | API Giffy | Jest</span>
            </div>
            <a
              className='Item__Code-Link'
              href='https://github.com/jorge-llanque/Gif-Shuriken'
              target='_blank'
              rel='noreferrer'
            >
              <ImEmbed2 />
            </a>
          </header>
          <div className='Thumbnail__Wrap'>
            <img loading='lazy' src={projectImage4} alt='img' />
          </div>
        </article>
      </div>
      <a
        style={butCustomStyle}
        href='https://github.com/jorge-llanque'
        target='_blank'
        className='Projects_Section-Button'
        rel='noreferrer'
      >
        ... all projects on Github
      </a>
    </section>
  )
}
