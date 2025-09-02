"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <div className="mt-44 flex items-center justify-between mx-64">
      <div className="">
        <div
          className="text-[#1C3F3A] font-extrabold text-2xl"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          STACK PLAN!
        </div>
        <div
          className="text-[70px] text-wrap font-bold leading-[65px] mb-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          No more task <span className="text-amber-400 italic">drama</span>,
          <br></br> just Stack Plan
        </div>
        <div
          className="text-wrap text-lg"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="2500"
        >
          Aplikasi manajemen tugas kekinian buat kamu yang nggak mau ribet.{" "}
          <br></br> 🎯 Rencanain bareng tim, pantau progres, dan beresin satu
          per satu—tanpa drama. Lebih rapi. Lebih terstruktur. Lebih chill.
        </div>
        <div className="flex gap-6 mt-3">
          <button
            className="w-28 hover:font-bold"
            data-aos="zoom-in"
            data-aos-delay="3000"
          >
            Sign Up
          </button>
          <Link href="/auth/sign-in">
            <button
              className="w-28 bg-gray-100 py-2 rounded-4xl hover:border-2 hover:border-[#1C3F3A]"
              data-aos="zoom-in"
              data-aos-delay="3000"
            >
              Sign In
            </button>
          </Link>
        </div>
        <div className="mt-2 absolute z-0 flex gap-10 items-center justify-center text-center">
          <img
            src="/img/lottiefiles.png"
            style={{ width: "70px", height: "70px" }}
            className="rounded-2xl grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
          ></img>
          <img
            src="/img/flaticon.webp"
            style={{ height: "60px" }}
            className="grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="1000"
          ></img>
          <img
            src="/img/nextjs.png"
            style={{ height: "100px" }}
            className="grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="1200"
          ></img>
          <img
            src="/img/laravel.png"
            style={{ height: "200px" }}
            className="grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="1200"
          ></img>
          <img
            src="/img/tailwindcss.png"
            style={{ height: "250px" }}
            className="grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="1200"
          ></img>
          <img
            src="/img/nyalse.png"
            style={{ width: "70px", height: "70px" }}
            className="rounded-2xl grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="1200"
          ></img>
          <img
            src="/img/node.png"
            style={{ height: "90px" }}
            className="rounded-2xl grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="1200"
          ></img>
          <img
            src="/img/github.png"
            style={{ height: "90px" }}
            className="rounded-2xl grayscale hover:grayscale-0"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="1200"
          ></img>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <lottie-player
          src="/json/landing.json"
          background="transparent"
          speed="1"
          style={{ width: "450px", height: "450px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
