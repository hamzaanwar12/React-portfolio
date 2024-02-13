import React from 'react'

export default function Contact() 
{
  const handleSubmit = (event)=>
  {
    event.preventDefault()
    alert("Your Message has been received")

  }
  return (
    <div className='bg-violet-900 text-white  py-intro'>
      <div className='w-[60%] mx-auto gap-y-6 text-white text-left flex flex-col'>
      <h1>Conatct Me</h1>

        <form onSubmit={handleSubmit} className='flex flex-col text-white gap-y-5 px-2'>
          <div className="flex  flex-col text-white gap-y-2">
            <label htmlFor="">Name</label>
            <input type="" placeholder="Name" className='bg-transparent border-white border-2 h-10 rounded-xl itlaic px-5 text-lg'/>
          </div>

          <div className="flex  flex-col text-white gap-y-2">
            <label htmlFor="">Email Address</label>
            <input type="" placeholder="Email Address" className='bg-transparent border-white border-2 h-10 rounded-xl itlaic px-5 text-lg'/>
          </div>

          <div className="flex  flex-col text-white gap-y-2">
            <label htmlFor="">Type of enquiry</label>
            <select id="serviceSelect" className='bg-transparent border-white border-2  min-h-10 rounded-xl itlaic px-5 text-lg'>
              <option className="text-black bg-white"value="default" selected disabled>Select a service...</option>
              <option className="text-black bg-white"value="webDevelopment">Web Development</option>
              <option className="text-black bg-white"value="mobileDevelopment">Mobile Development</option>
              <option className="text-black bg-white"value="backendDevelopment">Backend Development</option>
              <option className="text-black bg-white"value="databaseManagement">Database Management</option>
              <option className="text-black bg-white"value="cloudComputing">Cloud Computing</option>
            </select>
          </div>

          <div className="flex  flex-col text-white gap-y-2">
            <label htmlFor="">Meassage</label>
            <textarea type="" placeholder='Write a Message' className='bg-transparent border-white border-2 h-message rounded-xl itlaic px-5 text-lg'/>
          </div>

          <button type='submit' className='bg-violet-700 cursor-pointer h-12 w-[100%] rounded-lg hover:bg-white hover:text-violet-700 active:bg-violet-700 active:text-white'>Submit</button>

        </form>

      </div>

    </div >
  )
}
