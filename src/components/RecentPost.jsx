import React from "react";
import Image from "next/image";
import Link from "next/link";
const RecentPost = ({ posts }) => {
  return (
    <section className="w-[1180px] mx-auto flex flex-col gap-6 my-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">Recent Posts</h1>
        <Link href={'/blogs'}><button className="w-[80px] h-[40px] border-[#E4E7EC] border-1 rounded-[10px] text-[14px]">
          All Posts
        </button></Link>
      </div>
      <div className="flex flex-row gap-2 items-center">
        {posts.map((post, index) => {
          return (
            <Link key={post.id} href={`/blog/${post.id}`}>
            <div  className="flex flex-col gap-6">
              <div className="relative w-[375px] h-[300px] rounded-2xl">
                <Image
                  width={300}
                  height={300}
                  src={post.avatar}
                  alt="recent"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h2 className="text-xl font-medium">{post.title}</h2>
              <p>{post.description.split(" ",15).join(" ")}</p>
            </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPost;
