import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Blog = () => {
       useEffect(() => {
              Aos.init({
                     duration: 2000,
                     once: false,
              })
       }, [])
       const blogs = [
              {
                     id: '1',
                     title: <p>What is an NRI?</p>,
                     description: <p>Definition of NRI
                            NRI stands for Non-Resident Indian. It refers to an Indian citizen
                            who resides outside of India for work, education, or other purposes.
                     </p>,

              },
              {
                     id: '2',
                     title: "Different Categories of NRIs",
                     description: <p>
                            NRIs Working Abroad
                            Many Indian citizens work abroad for a variety of reasons, including employment with multinational companies,
                     </p>,
              },
              {
                     id: '3',
                     title: <p>Eligibility Criteria for NRI Status in India</p>,
                     description: <p>Duration of Stay
                            The primary criterion for NRI status is the amount of time an individual spends outside India during a financial year
                     </p>,
              },
              {
                     id: '4',
                     title: <p>Tax Benefits for NRIs</p>,
                     description: <p>Basic Exemptions
                            NRIs can avail of the basic tax exemptions similar to residents, but only on income earned or accrued in India.
                     </p>,
              },
              {
                     id: '5',
                     title: <p>Disadvantages of Being an NRI</p>,
                     description: <p>Limited Access to Some Investment Schemes
                            NRIs are not allowed to invest in certain Indian investment schemes like the Public Provident Fund (PPF)
                     </p>,
              },
              {
                     id: '6',
                     title: <p>Benefits of Being an NRI </p>,
                     description: <p>Tax-Free Interest on NRE Accounts
                            NRIs can open Non-Resident External (NRE) accounts in India, where the interest earned is entirely tax-free.
                     </p>,
              },
              {
                     id: '7',
                     title: <p>Qualifying as an NRI </p>,
                     description: <p>
                            There are two main ways to qualify as an NRI:
                            Physically Staying Outside India
                            To be classified as an NRI, an Indian citizen
                     </p>,
              },
              {
                     id: '8',
                     title: <p>Why Suvidha? </p>,
                     description: <p>
                            Tailored for NRIs:
                            : Suvidha is designed specifically for the global Indian diaspora, addressing the complexities of cross-border investments, taxes, and financial regulations. We provide solutions that cater to your unique needs.
                     </p>,
              },
              {
                     id: '9',
                     title: <p>What If Suvidha Went Bankrupt? </p>,
                     description: <p>
                          1. Your Investments and Money Stay Safe:

At Suvidha, your investments and financial assets are held securely with regulated financial institutions (such as banks, brokers, or custodians) and not directly with us. </p>

              },
       ];

       return (
              <section className="py-12 bg-gray-50  mt-8">
                     <Outlet />
                     <div className="container mx-auto px-6">
                            <div className="text-center mb-10">
                                   <h2 className="text-3xl font-bold text-gray-800">Our Blog</h2>
                                   <p className="mt-2 text-gray-600">Stay updated with the latest insights, tips, and guides.</p>
                            </div>
                            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                                   {blogs.map((blog, index) => (
                                          <div
                                                 key={index}
                                                 className="bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                                                 data-aos='zoom-in'
                                          >
                                                 <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                                                 <div className="mt-2 text-gray-600">{blog.description}</div>
                                                 <Link
                                                        to={`/readmore/${blog.id}`}
                                                        className="inline-block mt-4 text-indigo-600 hover:underline font-medium"
                                                 >
                                                        Read More →
                                                 </Link>
                                          </div>
                                   ))}
                            </div>
                     </div>
              </section>
       );
};

export default Blog;
