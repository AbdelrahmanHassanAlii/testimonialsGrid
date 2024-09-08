/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import quoteSvg from '/images/bg-pattern-quotation.svg';

export default function Card({selector, name, status, testimonial, quote, img, hasBgQuote=false}) {
  return (
    <article className={`card card--${selector}`}>
      {hasBgQuote && <img className='quote-bg-svg' src={quoteSvg} alt="" />}
      <header className='card__header'>
        <img className='card__header--avatar' src={img} alt={`${name} avatar`} />
        <div className='wrapper__user-info'>
          <h2 className='username'>{name}</h2>
          <p className='status'>{status}</p>
        </div>
      </header>
      <p className='testimonial'>{testimonial}</p>
      <q className='quote'>{quote}</q>
    </article>
  )
}
