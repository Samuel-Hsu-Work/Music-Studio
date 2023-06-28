import React, { useState } from 'react';


function Contact() {
    return (
      <section name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='post' action="https://getform.io/f/c8bc4018-ec0f-41f6-9cde-1d8d84f60b56" className='flex flex-col max-w-[600px] w-full'>
          <div className='pd-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Email me: sky19930112@gmail.com</p>
          </div>
          <input className='bg-white' type="text" placeholder='Name' name='name'></input>
          <input className='my-4 p-2' bg-white type="email" placeholder='Name' name='name'></input>
          <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message' ></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-6oo px-4 py-3 my-8'>submit</button>
        </form>
      </section>
    );
  }

  export default Contact;