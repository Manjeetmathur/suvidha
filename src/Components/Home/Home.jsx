import React, { useEffect } from 'react'
import p2 from '../../assets/p2.jpeg'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.jpeg'
import p6 from '../../assets/p6.png'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.jpeg'
import p9 from '../../assets/p9.webp'
import p10 from '../../assets/p10.webp'
import p11 from '../../assets/p11.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
const Home = () => {
  const item = [p3, p4, p5, p6, p7, p8, p3, p4, p5, p6, p7, p8]
  const person1 = {
    name: 'Ravi Patel',
    country:"USA",
    profession: "Engineer",
    content: "Suvidha made it incredibly easy to invest in India. I was always hesitant due to tax complexities, but their expert guidance simplified everything. Now I’m confident in managing my wealth back home!  Now I’m confident in managing my wealth back home!"
  }
  const person2 = {
    name: 'Priya Sharma',
    country:"UK",
    profession: "Teacher",
    content: "The seamless experience Suvidha offers is a game-changer for NRIs. From setting up my investment account to tracking my portfolio, everything is easy to navigate. Highly recommend!"
  }
  const person3 = {
    name: 'Arjun Mehta',
    country:"Canada",
    profession: "Lawyer",
    content: "I’ve always wanted to invest in Indian real estate, but didn’t know where to start. Suvidha guided me through the entire process, from tax benefits to repatriation, making it effortless."
  }
  const person4 = {
    name: 'Neha Kapoor',
    country:"UAE",
    profession: "Entrepreneur",
    content: "Finally, a platform that understands the unique needs of NRIs! Suvidha helped me navigate India’s financial landscape and grow my wealth. I love how easy they make everything!"
  }
  const person5 = {
    name: 'Amit Desai',
    country:"Singapore",
    profession: "Engineer",
    content: "Finally, a platform that understands the unique needs of NRIs! Suvidha helped me navigate India’s financial landscape and grow my wealth. I love how easy they make everything!"
  }
  const review = [person1,person2,person3,person4,person5]
     console.log(review)

     useEffect(()=>{
      Aos.init({
        duration:1500,
        easing : 'ease-in-out',
        once:false,
      })
     },[])

  return (
    <div className="w-full p-">
      <div className="px-3 pt-3" >
        {/* Image Background */}
        <img
          src={p2}
          className="object-cover w-[98vw] h-[50vw] md:h-[40vw] 
            lg:h-[30vw] rounded-lg shadow-lg" 
          alt=""
        />
        {/* Overlay Text */}
        <div className="w-full flex flex-col justify-center items-center 
          my-5 md:my-10  text-whit text-center md:text-left" data-aos='fade-up'>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight font- ">
            Be the Part of India’s Growth Story
          </h1>
          <div className="flex justify-center">
            <Link to={"/contact"} className="bg-blue-500 text-white font-semibold py-2 px-4 md:py-3 md:px-5
             rounded-lg shadow-xl hover:bg-blue-600 hover:text-white 
              transition duration-300 ease-in-out my-5  md:mt-10">
              Join Now
            </Link>
          </div>
        </div>

      </div>
      <div className="border-y-border-gray-00 shadow-xl" >
        <div className="w-full flex flex-col justify-center items-center 
          md:mt-10 my-5  text-whit text-center md:text-left " data-aos='fade-up'>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight  ">
            Our Companions
          </h1>
        </div>
        <div className="p-2 w-[100%] flex overflow-x-auto gap-5 scr ">
          {
            item.map(item => (
              <img src={item} alt="" className='w-[100px] h-[100px] rounded-[40px] md:h-[140px] md:w-[140px]'  data-aos='fade-left' />
            ))
          }
        </div>
        <div className="w-full flex flex-col justify-center items-center 
           text-whit text-center  px-5 my-" data-aos='fade-up'>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10  px-6">
            Start your Investment Journey Today with Top AMCs
          </h1>
          {/* <div className=" pt-6 flex justify-center">
            <button className="bg-blue-500 text-white font-semibold py-1 px-2 md:py-2 md:px-4
             rounded-lg shadow-xl hover:bg-blue-600 hover:text-white 
              transition duration-300 ease-in-out mb-8">
              Register Now
            </button>
          </div> */}
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center mt-12 gap-8 lg:flex-row shadow-xl pb-10  ">
        <div className=" flex gap-8 flex-col md:flex-row">
          <div className="relative bg-blue-500 text-white rounded-lg shadow-2xl p-6 w-[300px] h-[400px]"  data-aos='fade-up'>
            {/* Image Section */}
            <div className="mb-4"  data-aos='zoom-in'>
              <img
                src={p9}
                alt="Card Example"
                className="rounded-lg object-cover h-[200px] w-[250px]"
              />
            </div>

            {/* Text Content */}
            <div className='absolute bottom-8'>
              <h2 className="text-xl font-bold mb-2">Seamless Investment Process</h2>
              <p className="text-sm">
                Suvidha ensures compliance with all necessary regulations, so you
                don’t have to worry about paperwork.
              </p>
            </div>
          </div>
          <div className="relative  text-black rounded-lg shadow-2xl border-2 border-gray-400 p-6 w-[300px] h-[400px] "  data-aos='fade-up'>
            {/* Image Section */}
            <div className="mb-4"   data-aos='zoom-in'>
              <img
                src={p10}
                alt="Card Example"
                className="rounded-lg object-cover h-[200px] w-[250px]"
              />
            </div>

            {/* Text Content */}
            <div className='absolute bottom-8 '>
              <h2 className="text-xl font-bold mb-2">Tax Compliance</h2>
              <p className=" text-sm">
                Suvidha helps you take advantage of tax-saving
                opportunities like the NRE account’s tax-free status,
                and ensures you’re compliant with Indian tax regulations.
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:bg-green-600 bg-blue-500 text-white rounded-lg shadow-2xl p-6 w-[300px] h-[400px]"  data-aos='fade-up'>
          {/* Image Section */}
          <div className="mb-4"   data-aos='zoom-in'>
            <img
              src={p11}
              alt="Card Example"
              className="rounded-lg object- h-[200px] w-[250px]"
            />
          </div>

          {/* Text Content */}
          <div className='absolute bottom-8'>
            <h2 className="text-xl font-bold mb-2">Easy Repatriation</h2>
            <p className=" text-sm">
              When you’re ready to take money back to your country of
              residence, Suvidha simplifies the repatriation
              process. Transfer your funds securely and with minimal
              hassle, ensuring compliance with RBI regulations
            </p>
          </div>
        </div>


      </div>
      <div className=" my-10 shadow-xl pb-5" data-aos='zoom-in'>
        <div className="w-full flex flex-col justify-center items-center 
           text-whit text-center md:text-left "  data-aos='fade-up'>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight  ">
            Your trusted financial partner
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center 
          my-5 text-whit text-center md:text-left " data-aos='fade-up'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight  ">
            15-40%
          </h1>
          <h1 className="text-md md:text-2xl lg:text-2xl  leading-tight  ">
            Get Upto Returns yearly
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center 
          my-5 text-whit text-center md:text-left " data-aos='fade-up'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight  ">
            24/7
          </h1>
          <h1 className="text-md md:text-2xl lg:text-2xl  leading-tight  ">
            Customer care services
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center 
          my-5 text-whit text-center md:text-left " data-aos='fade-up'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight  ">
            1M +
          </h1>
          <h1 className="text-md md:text-2xl lg:text-2xl leading-tight  ">
            trusted by customer
          </h1>
        </div>

      </div>
      <div className="flex flex-col items-center">
         <div className="w-full flex flex-col justify-center items-center 
          my-5 text-whit text-center " data-aos='fade-up'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                  Our Testimonial
                </h1>
                <h1 className="text-2xl mt-4 md:text-3xl lg:text-4xl font-bold">
                  Client's experience
                </h1>
              </div>
       <div className="w-full flex items-center md:flex-row overflow-x-auto scr" >
       {
          review.map(item => (
              <div className="" data-aos='fade-left'>
                <div className="max-w-sm m-5 p-6 border rounded-lg shadow-md bg-gray-50 w-[280px] h-[280px]">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name} <span className="text-sm text-gray-500">({item.country})</span>
                  </h2>
                  <p className="text-sm italic text-gray-600">{item.profession}</p>
                  <p className="mt-4 text-gray-700">{item.content.slice(0,200)} 
                    <span className='text-gray-400 cursor-pointer'>{item.content.length > 200 && 'Read More . . . '}</span> 
                  </p>
                </div>
              </div>
          ))
        }
       </div>

      </div>

    </div>

  )
}

export default Home
