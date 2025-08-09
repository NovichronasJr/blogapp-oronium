"use client";

import { React, use } from "react";
import { useQuery } from "@tanstack/react-query";
import getSingleBlog from "../../../lib/api/singleblog";
import Image from "next/image";
import Link from "next/link";
const page = ({ params }) => {
  const { id } = use(params);

  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getSingleBlog(id),
  });
  console.log(data);
  return (
    <>
      {isLoading && <p className="text-center">Loading...</p>}
      {!isLoading && (
        <section className="w-[1180px] mx-auto flex flex-col justify-center items-center gap-8 translate-y-1/6">
          <div className="flex flex-row justify-between">
            <div className="w-[50%] h-[500px] relative rounded-md">
              <Image
                width={400}
                height={400}
                src={data.avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-[45%] rounded-md flex flex-col justify-evenly p-4 gap-4">
              <div className="max-w-fit max-h-fit border-1 border-gray-200 rounded-t-4xl text-center p-4 ">
                <h1 className="text-2xl font-medium">{data.title}</h1>
              </div>
              <div className="max-w-fit max-h-fit bg-gray-200 rounded-br-4xl p-6">
                <p className="font-light">{data.description}</p>
              </div>
              <button className="p-4 rounded-md border-2 border-[#E4E7EC]">
                {data.createdAt.split("T")[0]}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link href={'/blogs'}><button className="w-[118px] h-[40px] rounded-[10px] bg-[#141C25] text-white text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#1d2733] transition-colors duration-200">
              <span className="text-lg">←</span>
              Back
            </button></Link>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
