
import { client } from '@/sanity/lib/client'
import Header from '@/components/header'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Blog {
  blogImg: string;
  blogHeading: string;
  blogTime: string;
  blogDate: string;
  blogAuthor: string;
  blogMaterial: string;
  blogDescription: string;
}

export default async function BlogPage() {
  // Fetch the blog data directly in the async function
  const res = await client.fetch(
    "*[_type=='landingPage'][0].sections[4].blogCards[]{'blogImg':blogImg.asset->url,'blogHeading':blogHeading,'blogTime':blogTime,'blogDate':blogDate,'blogAuthor':blogAuthor,'blogMaterial':blogMaterial,'blogDescription':blogDescription}"
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 bg-gray-200 flex items-center justify-center z-1">
  <Image
    src="/blog.png"
    alt="Hero Image"
    width={1920}
    height={1080}
    style={{
      objectFit: 'cover',
      width: '100%',  // Full width of the container
      height: 'auto'  // Maintain aspect ratio
    }}
    sizes="(max-width: 768px) 100vw, 100vw" // Ensures it takes full width on all screen sizes
  />
  <div className="text-center absolute z-[1] px-4">
    <img src="/log.png" alt="Logo" className="mx-auto mb-4" />
    <h1 className="text-4xl md:text-5xl font-medium mb-4">Blog</h1>
    <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
      <span>Home</span>
      <span>&gt;</span>
      <span className="font-light">Blog</span>
    </div>
  </div>
</section>


      <main className="container mx-auto px-[20px] py-8 mt-[50px] ">
        <div className="flex flex-col lg:flex-row gap-[10px]">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div>
              {res.slice(3, 6).map((item: Blog, index: number) => (
                <div key={index} className="mb-16">
                  <Image src={item.blogImg} alt={item.blogHeading} width={600} height={400} style={{ objectFit: 'cover' }}
                   className='hover:scale-105 transition duration-300' />
                  <div className='flex text-gray-600 mt-[20px] gap-[5px]'>
                    <h2>{item.blogAuthor}</h2>
                    <Clock size={20} className="ml-4" />
                    <h2>{item.blogDate}</h2>
                    <Calendar size={20} className="ml-4" />
                    <h2>{item.blogMaterial}</h2>
                  </div>
                  <h2 className='text-[20px] font-semibold mt-[10px] mb-[10px]'>{item.blogHeading}</h2>
                  <h2 className='text-gray-600 text-justify lg:w-[600px] mb-[10px]'>{item.blogDescription}</h2>
                  <div className='cursor-pointer underline font-semibold text-[20px] mt-[20px]'>Read More</div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-8">
              <Button variant="outline" className="w-12 h-12 rounded-lg bg-[#FBEBB5]">1</Button>
              <Button variant="outline" className="w-12 h-12 rounded-lg">2</Button>
              <Button variant="outline" className="w-12 h-12 rounded-lg">3</Button>
              <Button variant="outline" className="px-4 h-12 rounded-lg">Next</Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-white rounded-lg shadow">
              <Input type="search" placeholder="Search..." className="w-full p-6 border border-gray-500" />
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow ">
              <h3 className="text-xl font-medium mb-8">Categories</h3>
              <ul className="space-y-6 text-gray-500">
                <li className="flex justify-between"><span>Crafts</span> <span className="text-gray-500">2</span></li>
                <li className="flex justify-between"><span>Design</span> <span className="text-gray-500">8</span></li>
                <li className="flex justify-between"><span>Handmade</span> <span className="text-gray-500">7</span></li>
                <li className="flex justify-between"><span>Interior</span> <span className="text-gray-500">1</span></li>
                <li className="flex justify-between"><span>Wood</span> <span className="text-gray-500">6</span></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-4">Recent Posts</h3>
              {res.slice(6).map((item: Blog, index: number) => (
                <ul className="space-y-4" key={index}>
                  <li className="flex space-x-4 mb-[40px]">
                    <Image src={item.blogImg} alt="Recent post" width={90} height={90} className=" rounded-lg" />
                    <div>
                      <h4 className="font-medium">{item.blogHeading}</h4>
                      <p className="text-sm text-gray-500">{item.blogDate}</p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF4F4] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">Free Delivery</h3>
              <p className="text-gray-600">For all orders over $50, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">90 Days Return</h3>
              <p className="text-gray-600">If goods have problems, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

