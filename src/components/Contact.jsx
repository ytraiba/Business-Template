import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-600 flex justify-center items-center p-4'>
        <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#b625d9] text-white'>Contact</p>
                <p className='text-white py-4'>Submit the form below or shoot us an email at myemail@gmail.com</p>
            </div>
            <input className='text-black bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='text-black my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='text-black bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#b625d9] hover:border-[#b625d9] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact