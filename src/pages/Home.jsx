import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div >
        {<Navbar/>} 
        <div className='w-full min-h-screen bg-blue-400' >
          <div className='p-1'>
            <div className='1st page w-full h-[80vh] bg-red-500 '>
              <img src="" alt="" />
            <h1 className='text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>Welcome to PMT ST Boys Hostel</h1>
            </div>

            <div className='facilities'>
              <h1 className='text-xl text-center mt-20 mb-8' >Facilities</h1>
              <div className='flex  gap-52 justify-between px-32 ' >
                <div className='w-[40vh] h-[37vh] bg-yellow-400 rounded-lg' ></div>
                <div className='w-[40vh] h-[37vh] bg-yellow-400 rounded-lg' ></div>
                <div className='w-[40vh] h-[37vh] bg-yellow-400 rounded-lg' ></div>
              </div>
            </div>  

            <div className='About' >
              <h1 className='text-center mt-20 mb-10' >About </h1>
              <div className='flex justify-between px-14'>
                <p className='w-[50%]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi consequatur saepe, fuga enim sunt maiores aperiam est animi officiis quaerat, corporis esse ab quos quod exercitationem aliquid repudiandae quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at dolorem, quisquam autem nobis accusantium voluptatem incidunt doloremque sint obcaecati explicabo reiciendis et numquam qui fugit libero est, ab nostrum quos possimus? Dolor consectetur tempora, exercitationem quibusdam illo expedita perferendis.</p>
                <div className='w-[90vh] h-[30vh] bg-yellow-400 ' >
                  <img src="" alt="" />
                </div>
              </div>

            </div>
            <div className='gallery' >
              <h1 className='text-center text-xl my-10' >Gallery</h1>
              <div className='flex justify-between px-5' >
                <div className='w-[65vh] h-[40vh] bg-yellow-500 rounded-lg' ></div>
                <div className='w-[65vh] h-[40vh] bg-yellow-500 rounded-lg' ></div>
                <div className='w-[65vh] h-[40vh] bg-yellow-500 rounded-lg' ></div>

              </div>
            </div>
            <div className='Contact my-10' >
              <h1 className='text-center text-xl' >Contact Us</h1>
              <div className='flex justify-between px-5 my-5' >
                <div className='w-[60vh] h-[30vh] bg-yellow-400 rounded p-2' >
                <h2>Hostel address</h2>
                </div>
                <div className='w-[60vh] h-[30vh] bg-yellow-400 rounded p-2' >
                  <h2>General Enguiries</h2>
                </div>
                <div className='w-[60vh] h-[30vh] bg-yellow-400 rounded p-2' >
                  <h2>all Us</h2>
                </div>

              </div>
            </div>

            <div className='footer w-full h-[35vh] bg-blue-600 p-5' >

              <div className='flex justify-between py-20' >
                <div className='flex gap-5  pl-20' >
                  <h3>Home</h3>
                  <h3>About</h3>
                  <h3>Gallery</h3>
                  <h3>Facilities</h3>
                  <h3>Addmission</h3>
                </div>
                <div>
                  <h2>+91-8269434702 ,  pmthostel40@gmail.com</h2>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Home