import React from 'react';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

async function Blog() {
  interface Blog {
    blogImg: string;
    blogHeading: string;
    blogTime: string;
    blogDate: string;
    blogAuthor: string;
    blogMaterial: string;
    blogDescription: string;
  }

  const res = await client.fetch(
    "*[_type=='landingPage'][0].sections[4].blogCards[]{'blogImg':blogImg.asset->url,'blogHeading':blogHeading,'blogTime':blogTime,'blogDate':blogDate,'blogAuthor':blogAuthor,'blogMaterial':blogMaterial,'blogDescription':blogDescription,}"
  );
  const { blogImg, blogHeading, blogTime, blogDate, blogDescription, blogAuthor, blogMaterial } = await res;

  return (
    <div className="container mx-auto px-4 pt-16 pb-24">
      <h2 className="text-[40px] font-bold text-center mb-8">Our Blogs</h2>
      <p className="text-gray-500 text-center text-base mb-12">Find a bright ideal to suit your taste with our great selection</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:px-[100px]">
        {res.slice(0, 3).map((item: Blog, index: number) => (
          <div key={index} className="rounded-lg overflow-hidden">

            <Image
              src={item.blogImg}
              alt={item.blogHeading}
              objectFit="cover"
              width={330}
              height={350}
              className="w-full h-[250px] md:h-[350px] lg:h-[380px] object-cover rounded-[10px] hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{item.blogHeading}</h3>
              
              <Link href="/blog" className=" text-[28px] font-semibold hover:text-gray-600 mb-4 flex justify-center items-center ">
                Read More
              </Link>
              <div className="w-16 sm:w-[140px] h-1 bg-black ml-[70px] xl:block xxs:hidden" />
              <div className="flex mb-4 justify-center items-center mt-[30px] ">
                <Clock size={20} className="mr-2" />
                <span>{item.blogTime}</span>
                <Calendar size={20} className="mx-2" />
                <span>{item.blogDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/blog" className="text-2xl font-semibold hover:text-gray-600">
          View All Posts
        </Link>
      </div>
    </div>
  );
}

export default Blog;