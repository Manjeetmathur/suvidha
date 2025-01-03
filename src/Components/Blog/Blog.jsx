import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../Blog/blog1.txt'
const Blog = () => {
       const blogs = [
              {
                     title: "Comprehensive Guide to NRI Status: Eligibility, Benefits, and Taxation in India",
                     description: '',
                     link: "#",
              },
              {
                     title: "Why Invest in India?",
                     description: "Discover the top reasons why investing in India can be a game-changer for NRIs.",
                     link: "#",
              },
              {
                     title: "Managing Wealth Overseas",
                     description: "Expert tips to manage your wealth effectively while living abroad.",
                     link: "#",
              },
       ];

       return (
              <section className="py-12 bg-gray-50">
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
                                          >
                                                 <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                                                 <p className="mt-2 text-gray-600">{blog.description}</p>
                                                 <Link
                                                        to={blog.link}
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
