import React from 'react'

export default function Contact() {
  return (
    <div className='Tabs__contact'>
      <input type='text' placeholder='Name' className='Tabs__contact--input' />
      <input type='email' placeholder='Email' className='Tabs__contact--input' />
      <textarea type='text' placeholder='Message' className='Tabs__contact--input' />
      <button className='Tabs__contact--btn'>Submit</button>
    </div>
  )
}
