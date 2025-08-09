import React from "react";
import Image from "next/image";
import Link from "next/link";
const FeaturedPost = ({ Mainpost, featurePost }) => {
  const mainpost = Mainpost[0];
  return (
    <div className="w-[1180px] mx-auto h-[500px] flex flex-row gap-10">
      <section className="w-[60%]  overflow-y-hidden rounded-[15px] ">
        <Link href={`/blog/${mainpost.id}`}>
        <div className="w-full h-full relative group  overflow-y-hidden rounded-[15px]">
          <Image
            src={mainpost.avatar}
            alt="mainpost"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-[15px] group-hover:blur-[2px]"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-950/50 backdrop-blur-none text-white rounded-b-[15px]
               translate-y-[100%] group-hover:translate-y-0
               transition-transform duration-300 ease-in-out px-8 py-4"
          >
            <h2 className="text-2xl font-semibold text-white">
              {mainpost.title}
            </h2>
          </div>
        </div>
        </Link>
      </section>
      <section className="w-[40%] flex flex-col justify-between">
        <h2 className="text-2xl font-medium mb-2">Other featured posts</h2>
        { featurePost.map((post,index)=>{
          return(
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="flex flex-row gap-2 items-center border-b-1 border-[#E4E7EC]">
           <div className="relative w-[100px] h-[70px] rounded-2xl my-2">
              <Image
              width={50}
              height={50}
              src={post.avatar}
              alt="features"
              className="w-full h-full object-cover rounded-2xl"
              />
           </div>
           <h3>{post.title}</h3>
          </div>
          </Link>
          )
        })
        }
      </section>
    </div>
  );
};

export default FeaturedPost;
