"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import bannerImg from "@/assets/bazar-hero.png";
import NavbarDate from "../shared/NavbarDate";

const Banner = () => {
  return (
    <section className="px-4 py-2 sm:px-6 lg:px-8 mt-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 overflow-hidden rounded-[28px] border border-[#DFE7DF] bg-[#FAFCFA] px-5 py-7 sm:px-8 md:grid-cols-[1.6fr_0.8fr] md:px-10 md:py-8">
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <span className="inline-flex rounded-full bg-[#E1F1E5] px-4 py-1.5 text-sm font-medium text-[#07883F]">
            <NavbarDate />
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-[#202B23] sm:text-4xl lg:text-[42px]">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#68736B] sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button
            type="button"
            onClick={() => {
              document.getElementById("all-products")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="btn mt-7 min-h-12 rounded-xl border-none bg-[#07883F] px-6 text-sm font-semibold text-white shadow-md hover:bg-[#066F34]"
          >
            সব পণ্য দেখুন
            <FaArrowRight className="ml-1" />
          </button>
        </div>

        {/* Right Illustration */}
        <div className="order-1 flex items-center justify-center md:order-2">
          <Image
            src={bannerImg}
            alt="রঙিন তাজা সবজির ঝুড়ি"
            priority
            className="h-44 w-56 object-contain sm:h-52 sm:w-64 md:h-60 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
