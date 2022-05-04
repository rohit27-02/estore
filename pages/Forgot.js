import React from 'react'

const Forgot = () => {
  return (
    <section className="text-gray-600 body-font">
        <h1 className='font-bold text-3xl text-center mt-10'>Forgot Password</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col  text-center w-full ">
      <div className="relative flex-grow w-full  md:w-3/5">
        <label htmlFor="email" className="leading-7  px-10 text-lg font-semibold text-gray-600">Enter Your Registered Email</label>
        <input type="email" id="email" name="email" className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-8 leading-8 transition-colors duration-200 ease-in-out my-8 mx-8"/>
      <button className="text-white bg-pink-500 border-0 px-3 py-1 focus:outline-none hover:bg-pink-600 rounded text-lg">Send</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Forgot