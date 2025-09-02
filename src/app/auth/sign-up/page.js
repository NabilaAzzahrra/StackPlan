"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex justify-between items-center mx-12 py-6 gap-5">
      <div className="w-full">
        <div className="font-bold text-[40px]" data-aos="fade-right">
          Let’s Get Started!
        </div>
        <p
          className="mb-3"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <span className="font-bold">Yuk, daftar dulu sebelum mulai!</span>{" "}
          <br></br> Masukkan data kamu dengan benar biar bisa gabung dan
          nikmatin semua fitur seru yang tersedia. Jangan lupa, cuma yang udah
          daftar yang bisa masuk ke dalam~ ✨😎
        </p>
        <form className="" action="" method="">
          <div className="flex gap-5">
            <div className="">
              <div
                className="mb-5 w-80"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required
                />
              </div>
              <div
                className="mb-5 w-80"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="">
              <div
                className="mb-5 w-80"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  required
                />
              </div>
              <div
                className="mb-5 w-80"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <input
                  type="password"
                  id="password-confirm"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <div
            className="mt-3"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <span className="font-bold">Sudah punya akun?</span> <br></br>
            Kamu bisa langsung {" "}
            <a
              href="/auth/sign-in"
              className="font-bold text-sky-500 hover:underline"
            >
              Sign In
            </a>{" "}
            di sini dan menggunakan fitur yang ada yaa! 🚀✨
          </div>
        </form>
      </div>
      <div
        className="w-full text-right bg-[#1C3F3A] h-full rounded-t-3xl rounded-br-3xl rounded-bl-[100px] text-white justify-center items-center flex flex-col"
        data-aos="fade-left"
        style={{
          backgroundImage: `
      linear-gradient(rgba(28, 63, 58, 0.93), rgba(28, 63, 58, 0.93)),
      url('/img/pattern.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{
            el: ".custom-pagination",
            clickable: false,
          }}
          modules={[Pagination]}
          className="w-full max-w-xl text-center"
        >
          <SwiperSlide>
            <div className="text-center">
              <div className="ml-14">
                <lottie-player
                  src="/json/Sadness.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "450px", height: "450px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="text-xl font-bold mb-4">
                Ngatur tugas? Jangan nunggu mepet, ntar stresnya dobel!
              </div>
              <p className="text-sm">
                Stack Plan bantu kamu planning tugas dari awal. Anti panik, anti
                SKS ✌️
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-3xl">
              <div className="ml-14">
                <lottie-player
                  src="/json/task.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "450px", height: "450px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="text-xl font-bold mb-4">
                Multitasking itu keren, tapi fokus selesain satu-satu tuh jauh
                lebih epic 💥
              </div>
              <p className="text-sm">
                Di Stack Plan, kamu bisa prioritasin tugas — yang penting
                duluan, yang ribet belakangan
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-3xl">
              <div className="ml-14">
                <lottie-player
                  src="/json/chill.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "450px", height: "450px" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="text-xl font-bold mb-4">
                Tugas numpuk bukan alasan rebahan, kita gaspol pelan-pelan 🛹✨
              </div>
              <p className="text-sm">
                Stack Plan kasih reminder + progres tugas kamu. Jadi bisa tetap
                chill tapi terarah
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Titik-titik pagination */}
        <div className="custom-pagination mt-6 flex justify-center gap-2" />
      </div>
    </div>
  );
}
