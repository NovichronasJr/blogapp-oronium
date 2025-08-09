import React from "react";
import Image from "next/image";
function page() {
  return (
    <section className="w-[1180px] mx-auto">
      <div className="flex flex-col gap-6 border-b-1 border-[#E4E7EC] ">
        <h3 className="text-[#8b5cf6] text-2xl">Welcome</h3>
        <h2 className="text-[38px] font-semibold">Support</h2>
        <p className="text-2xl font-light mb-20">
          Check out our <span className="underline">FAQ’s</span> and please
          don’t hesitate to ask anything you have about Beyond UI.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-[33px] font-semibold mt-18">Contact info</h2>
        <h3 className="text-2xl font-light mb-2">Get in touch with us!</h3>
        <div className="flex flex-row justify-between">
          <div className="w-[580px]  h-[240px] p-4 bg-[#F9FAFB] flex flex-col gap-4 justify-center items-center rounded-md">
            <h2 className="text-[20px] font-light">Website</h2>
            <button className="w-[134px] h-[44px] border-1 border-[#E4E7EC] rounded-md text-[20px] flex items-center justify-center gap-2">
              <Image width={24} height={24} src={"/planet.png"} alt="planet" />
              <span className="underline">website</span>
            </button>
            <h2 className="text-[20px] font-light">www.beyondui.design</h2>
          </div>
          <div className="w-[580px] h-[240px] p-4 bg-[#F9FAFB] flex flex-col gap-2 justify-center items-center rounded-md">
            <h2 className="text-[20px] font-light">Email</h2>
            <button className="w-[134px] h-[44px] border-1 border-[#E4E7EC] rounded-md text-[20px] flex items-center justify-center gap-2">
              <Image width={24} height={24} src={"/mail.png"} alt="mail" />
              <span className="underline">email</span>
            </button>
            <h2 className="text-[20px] font-light">office@beyondstud.io</h2>
          </div>
        </div>
      </div>
      <div className="mt-22 flex flex-col gap-6 border-b-1 border-[#E4E7EC] mb-20">
        <h2 className="text-4xl font-semibold">Beyond UI on Social Media</h2>
        <p className="w-[50%] font-light text-xl">
          Follow us on social media for daily design inspiration and special
          promotions and discounts.
        </p>
        <div className="grid grid-cols-4 gap-2 gap-y-9 mb-20 ">
            <div className="flex flex-col justify-center items-center gap-6 bg-[#F9FAFB] p-4 rounded-md">
                <h1 className="text-[20px] font-light">Founder on X</h1>
                <button className="max-w-fit h-[44px] border-1 border-[#E4E7EC] rounded-md text-[20px] flex items-center justify-center gap-2 px-2">
                    <Image width={24} height={24} src={"/Vector.png"} alt="planet"/>
                    <span className="text-[20px] underline">Follow</span>
                </button>
                <div className="flex flex-row items-center gap-1">
                <h3 className="text-[20px] font-light">@lormigram</h3>
                <Image width={20} height={20} src={'/Avatar Indicator.png'} alt='blue-tick'/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 bg-[#F9FAFB] p-4 rounded-md">
                <h1 className="text-[20px] font-light">Layers</h1>
                <button className="max-w-fit h-[44px] border-1 border-[#E4E7EC] rounded-md text-[20px] flex items-center justify-center gap-2 px-2">
                    <Image width={24} height={24} src={"/layers.png"} alt="planet"/>
                    <span className="text-[20px] underline">Follow us</span>
                </button>
                <h3 className="text-[20px] font-light">@lormigram</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 bg-[#F9FAFB] p-4 rounded-md">
                <h1 className="text-[20px] font-light">Dribble</h1>
                <button className="max-w-fit h-[44px] border-1 border-[#E4E7EC] rounded-md text-[20px] flex items-center justify-center gap-2 px-2">
                <Image width={24} height={24} src={"/ball.png"} alt="planet"/>
                <span className="text-[20px] underline">Follow us</span>
                </button>
                <h3 className="text-[20px] font-light">@beyond_ui</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 bg-[#F9FAFB] p-4 rounded-md">
                <h1 className="text-[20px] font-light">Instagram</h1>
                <button className="max-w-fit h-[44px] border-1 border-[#E4E7EC] rounded-md text-[20px] flex items-center justify-center gap-2 px-2">
                <Image width={24} height={24} src={"/Original.png"} alt="planet"/>
                <span className="text-[20px] underline">Follow us</span>
                </button>
                <h3 className="text-[20px] font-light">@ui_beyond</h3>
            </div>
        </div>
      </div>
    </section>
  );
}

export default page;
