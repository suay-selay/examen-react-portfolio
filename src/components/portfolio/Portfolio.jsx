import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic1.jpg'
import IMG2 from '../../assets/pic2.jpg'
import IMG3 from '../../assets/pic3.jpg'
import IMG4 from '../../assets/pic4.jpg'
import IMG5 from '../../assets/pic5.jpg'
import IMG6 from '../../assets/pic6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>Portfolio
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className="portfolio__item-image"></div>
          <img src={IMG1} alt=""/>
        <h3>This is portfolio item title</h3>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image"></div>
          <img src={IMG2} alt=""/>
        <h3>This is portfolio item title</h3>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image"></div>
          <img src={IMG3} alt=""/>
        <h3>This is portfolio item title</h3>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image"></div>
          <img src={IMG4} alt=""/>
        <h3>This is portfolio item title</h3>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image"></div>
          <img src={IMG5} alt=""/>
        <h3>This is portfolio item title</h3>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image"></div>
          <img src={IMG6} alt=""/>
        <h3>This is portfolio item title</h3>
      </article>

    </div>
  </section>
  )
}

export default Portfolio