import React from 'react'
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from 'react-icons/gr'

export default function Links() {
  return (
    <div className='Tabs__links'>
      <a href='#' className='Tabs__link'>
        <span className='sr-only'>Facebook</span>
        <GrFacebookOption />
      </a>
      <a href='#' className='Tabs__link'>
        <span className='sr-only'>Twitter</span>
        <GrTwitter />
      </a>
      <a href='#' className='Tabs__link'>
        <span className='sr-only'>Instagram</span>
        <GrInstagram />
      </a>
      <a href='#' className='Tabs__link'>
        <span className="sr-only">LinkedIn</span>
        <GrLinkedinOption />
      </a>
    </div>
  )
}
