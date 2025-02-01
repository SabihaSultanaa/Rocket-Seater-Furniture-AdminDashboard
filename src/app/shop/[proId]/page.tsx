//src\app\shop\[proId]\page.tsx
import Image from "next/image";
import {
  Facebook,
  Heart,
  Linkedin,
  MessageCircle,
  Star,
  Trash2,
  Twitter,
} from "lucide-react";
import Header from "@/components/header";

import Link from "next/link";
import Counter from "@/components/qty";
import { client } from "@/sanity/lib/client";
// import { Sheet } from '@/components/ui/sheet';

import ProductReviews from "@/components/productReview";

import { useCartStore } from "@/store/cart";
import CommentSection from "@/components/CommentSection";
// import { AddToCartButton } from "@/components/add-to-cart-button";


export default async function sigleProductDynamic({
  searchParams,
}: {
  searchParams: Promise<{
    name: string;
    image: string;
    price: number;
    category: string;
    _id: string;
    description: string;
  }>;
}) {
  const { name, image, price, category, _id, description } = await searchParams;

   
  const res = await client.fetch(
    "*[_type=='productPage'][0].sections[0].card[]{'cardHeading':cardHeading,'cardImg':cardImg.asset->url,'cardPrice':cardPrice,}"
  );
  const { cardHeading, cardImg, cardPrice } = await res;
  interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    imagePath: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
  }

  const response = await client.fetch(`*[_type=='product']{
      _id,
      imagePath,
        description,
        price,
        name,
        category,
        discountPercentage,
        isFeaturedProduct,
        stockLevel
    }`);

  return (
    <>
      <Header />

      <div className="container mx-auto px-4">
        <div className="xl:mx-0 my-[80px]">
          <div className="w-[363px] h-[21px] text-gray-500 text-[16px] pl-[20px]">
            Home &nbsp; / &nbsp; Shop &nbsp; / &nbsp;{" "}
            <span className="text-black font-normal">{name}</span>
          </div>
        </div>

        <section className="flex flex-col md:flex-row gap-[16px] my-[80px]">
          <div className="flex flex-col gap-[16px]">
            <div className="w-[170px] h-[138px] relative rounded-[4px] flex justify-center items-center">
              {image && (
                <Image src={image} alt="image" width={100} height={50} />
              )}
            </div>
            <div className="w-[170px] h-[138px]  relative rounded-[4px] flex justify-center items-center">
              {image && (
                <Image src={image} alt="image" width={100} height={50} />
              )}
            </div>
            <div className="w-[170px] h-[138px]  relative rounded-[4px] flex justify-center items-center">
              {image && (
                <Image src={image} alt="image" width={100} height={50} />
              )}
            </div>
            <div className="w-[170px] h-[138px]  relative rounded-[4px] flex justify-center items-center">
              {image && (
                <Image src={image} alt="image" width={100} height={50} />
              )}
            </div>
          </div>
          <div className="lg:w-[500px] lg:h-[600px] relative  rounded-[4px] flex justify-center items-center xxs:w-[200px]">
            {image && (
              <Image src={image} alt="image" width={446} height={315} />
            )}
          </div>
          {/* third new div corner */}
          <div className="xl:w-[500px] xxs:w-[200px] h-[600px] xl:ml-[60px] xxs:ml-[0px]">
            <div className="text-[42px] font-semibold tracking-[1px]">
              {name}
            </div>
            <div className="text-[24px] font-normal tracking-[1px] text-gray-700 mt-[10px]">
              Rs. {price}.00
            </div>
            <div className="flex gap-1 mt-[16px]">
              <Star size={20} fill="#FFAD33" color="#FFAD33" />
              <Star size={20} fill="#FFAD33" color="#FFAD33" />
              <Star size={20} fill="#FFAD33" color="#FFAD33" />
              <Star size={20} fill="#FFAD33" color="#FFAD33" />
              <Star size={20} fill="#bebebe" color="#bebebe" />
              <div className="text-gray-500 relative bottom-[5px] left-[5px] text-[16px]">
                5 Customer Review
              </div>
            </div>

            <div className="text-[16px] mt-[10px] w-[373px] xxs:hidden lg:inline-block h-[63px] text-justify">
              {description}
            </div>

            {/* colours */}

            {/* size */}
            <div className="text-[16px] text-black mt-[20px]">Size:</div>
            <div className="mt-[10px] w-[296px] h-[32px] flex gap-[16px] items-center text-center">
              <div
                className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-[#fbeab0]
                  pt-[3px] bg-[#fbe7a7] cursor-pointer
                  transition ease-in-out delay-50 font-semibold"
              >
                L
              </div>
              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] bg-[#ebe5e5] pt-[3px] hover:bg-[#FBEBB5] cursor-pointer transition ease-in-out delay-50 font-semibold">
                XL
              </div>
              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] bg-[#ebe5e5] pt-[3px] hover:bg-[#FBEBB5] cursor-pointer font-semibold ">
                XS
              </div>
            </div>

            <div className="text-[16px] mr-[8px] xl:mt-[20px] xxs:mt-[40px] text-black">
              Colours:
            </div>
            <div className="flex gap-[10px] w-[455px] h-[20px] border-3 items-center mt-[10px] mb-[40px]">
              <div
                className="rounded-full h-[20px] w-[20px] bg-[#816DFA] cursor-pointer  
                active:border-2 active:border-black"
              ></div>
              <div className="rounded-full h-[20px] w-[20px] bg-black cursor-pointer active:border-2 active:border-black"></div>
              <div className="rounded-full h-[20px] w-[20px] bg-[#CDBA7B] cursor-pointer   active:border-2 active:border-black"></div>
            </div>
            {/* 1 2 3 , buynow, heart */}
            <div
              className="mt-[24px] text-[24px] font-semibold w-[350px] h-[50px] gap-[16px]
          flex justify-center items-center "
            >
              {/* 1 2 + */}
              <div className="rounded-[10px] flex  border-gray-500 xxs:hidden  xl:block">
                <Counter />
              </div>

              {/* add to cart--------------------------------------------------------------------------------------*/}
              <Link href={`/cart?name=${name}&image=${image}&price=${price}`}>
                <button
                  className="w-[180px] p-[20px] border-2 border-black text-[16px] text-center
               rounded-[10px] hover:bg-black hover:text-white transition duration-300 
                xxs:ml-[0px]"
                >
                  Add To Cart
                </button>
              </Link>

            
            </div>
          

            {/* category */}
            <div className="mt-[40px] h-[90px] w-[400px] rounded-t-[4px] flex gap-[16px] items-center leading-6">
              <div className="w-[270] h-[40px] ml-[12px] mt-[10px] text-black">
                <div className="flex gap-[40px]">
                  <div>SKU </div>
                  <div>: SS000{_id}</div>
                </div>
                <br />
                <div className="flex gap-[10px]">
                  <div>Category </div>:<div> {category}</div>
                </div>
                <br />
                <div className="flex gap-[45px]">
                  <div>Tags </div>
                  <div>: Sofa , Chair , Home , Shop</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share */}
        <div className="w-[250]  ml-[780px] gap-[35px] pt-[15px] lg:flex xxs:hidden ">
          <div className="text-sm text-black text-[16px]"> Share </div>
          <span>:</span>
          <div className="flex gap-4">
            <Facebook className=" border-2  h-[30px] w-[30px] text-white bg-black rounded-full p-[4px]" />
            <Linkedin className="border-2  h-[30px] w-[30px] text-white bg-black rounded-full p-[4px]" />
            <Twitter className="border-2  h-[30px] w-[30px] text-white bg-black rounded-full p-[4px]" />
          </div>
        </div>

      
          {/* <ProductReviews /> */}
<div className="mt-[200px]">
<CommentSection/>
</div>
          {/* product review */}
       

        <div className="text-[36px] font-semibold text-center pt-[10px] mt-[80px] xxs:ml-[0px]">
          Related Products
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-[100px]">
        {response.slice(12, 16).map((item: Product, index: number) => {
          const transformStyle = index % 2 === 0 ? "sm:translate-y-8" : "sm:-translate-y-8"

          return (
            <div
              key={index}
              className={`relative w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-lg shadow-lg overflow-hidden group ${transformStyle} transition-transform duration-300 ease-in-out`}
            >
              <Link
                href={`/shop/proId?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.imagePath)}&price=${item.price}&category=${encodeURIComponent(item.category)}&description=${encodeURIComponent(item.description)}`}
                className="block w-full h-full"
              >
                <Image
                  src={item.imagePath || "/placeholder.svg"}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end text-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-xl sm:text-2xl font-bold mb-2">Rs. {item.price.toFixed(2)}</p>
                <p className="text-sm line-clamp-2">{item.description}</p>
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/shop/proId?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.imagePath)}&price=${item.price}&category=${encodeURIComponent(item.category)}&description=${encodeURIComponent(item.description)}`}
                  className="bg-white text-black font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          )
        })}
      </div>
        <div className="h-[50px] w-[104px] flex flex-col gap-[3px] mt-[140px] mx-auto mb-[51px]">
          <div className="text-[20px] font-bold cursor-pointer hover:text-gray-600">
            <Link href={"/shop"}>View More</Link>
          </div>
          <div className="border-b-[2px] border-black w-[100px] h-[10px]"></div>
        </div>
      </div>
    </>
  );
}
