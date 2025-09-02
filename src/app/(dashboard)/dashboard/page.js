"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <div className="mt-4">
      <div className="font-bold text-xl">Dashboard</div>
      <div className="text-sm text-gray-300 mb-4">
        Plan, prioritize, andaccomplish ypur tasks with ease.
      </div>
      <div className="bg-gray-100 px-6 py-6 rounded-xl">
        <div className="grid grid-cols-4  gap-4">
          <div className="rounded-3xl h-40 shadow bg-gradient-to-br from-green-700 to-green-600 text-white p-6 text-left">
            <div className="flex items-center justify-between">
              <div className="font-bold text-lg">Total Task</div>
              <div className="text-sm bg-white text-black w-8 h-8 flex items-center justify-center font-extrabold rounded-4xl pt-1">
                <i className="fi fi-sr-arrow-up-right"></i>
              </div>
            </div>
            <div className="mt-3 text-3xl font-bold">100</div>
            <div className="flex text-amber-200 text-xs mt-3 items-center">
              <div className="font-bold border px-3 rounded-md">5</div>
              <div className="ml-2">Meningkat dari bulan sebelumnya</div>
            </div>
          </div>
          <div className="bg-white rounded-3xl h-40 text-left shadow p-6">
            <div className="flex items-center justify-between">
              <div className="font-bold text-lg">Total RAB</div>
              <div className="text-sm bg-white border text-black w-8 h-8 flex items-center justify-center font-extrabold rounded-4xl pt-1">
                <i className="fi fi-sr-arrow-up-right"></i>
              </div>
            </div>
            <div className="mt-3 text-3xl font-bold">Rp 100.000</div>
            <div className="flex text-emerald-700 text-xs mt-3 items-center">
              <div className="font-bold border px-3 rounded-md">5</div>
              <div className="ml-2">Meningkat dari bulan sebelumnya</div>
            </div>
          </div>
          <div className="bg-white rounded-3xl h-40 text-left shadow p-6">
            <div className="flex items-center justify-between">
              <div className="font-bold text-lg">Total Planning</div>
              <div className="text-sm bg-white border text-black w-8 h-8 flex items-center justify-center font-extrabold rounded-4xl pt-1">
                <i className="fi fi-sr-arrow-up-right"></i>
              </div>
            </div>
            <div className="mt-3 text-3xl font-bold">1000</div>
            <div className="flex text-emerald-700 text-xs mt-3 items-center">
              <div className="font-bold border px-3 rounded-md">5</div>
              <div className="ml-2">Meningkat dari bulan sebelumnya</div>
            </div>
          </div>
          <div className="bg-white rounded-3xl h-40 text-left shadow p-6">
            <div className="flex items-center justify-between">
              <div className="font-bold text-lg">Total User</div>
              <div className="text-sm bg-white border text-black w-8 h-8 flex items-center justify-center font-extrabold rounded-4xl pt-1">
                <i className="fi fi-sr-arrow-up-right"></i>
              </div>
            </div>
            <div className="mt-3 text-3xl font-bold">3</div>
            <div className="flex text-emerald-700 text-xs mt-3 items-center">
              <div className="font-bold border px-3 rounded-md">5</div>
              <div className="ml-2">Meningkat dari bulan sebelumnya</div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex w-full gap-4">
            <div className="bg-white rounded-xl px-12 py-4">
              <div className="font-extrabold text-lg">Project Analytic</div>
              <div className="flex mt-4 gap-4 items-end">
                <div className="text-center">
                  <div className="w-12 h-32 rounded-full bg-[repeating-linear-gradient(45deg,_#ccc_0px,_#ccc_5px,_transparent_5px,_transparent_10px)]"></div>
                  <div className="font-extrabold text-emerald-800">S</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-36 bg-emerald-700 rounded-4xl"></div>
                  <div className="font-extrabold text-emerald-800">M</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-24 bg-emerald-400 rounded-4xl"></div>
                  <div className="font-extrabold text-emerald-800">T</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-44 bg-emerald-900 rounded-4xl"></div>
                  <div className="font-extrabold text-emerald-800">W</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-48 rounded-full bg-[repeating-linear-gradient(45deg,_#ccc_0px,_#ccc_5px,_transparent_5px,_transparent_10px)]"></div>
                  <div className="font-extrabold text-emerald-800">T</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-16 rounded-full bg-[repeating-linear-gradient(45deg,_#ccc_0px,_#ccc_5px,_transparent_5px,_transparent_10px)]"></div>
                  <div className="font-extrabold text-emerald-800">F</div>
                </div>
              </div>
            </div>
            <div className="bg-white w-72 px-12 py-4 rounded-xl">
              <div className="font-extrabold text-lg">Reminders</div>
              <div className="text-xl mt-12">Perpanjang Zoom Meet</div>
              <div className="text-md text-gray-500">Jumat, 25 Juli 2025</div>
              <div className="bg-emerald-700 text-white mt-12 px-4 text-center py-2 rounded-full">
                Start this task
              </div>
            </div>
          </div>
          <div className="bg-white w-full px-6 py-4 rounded-xl">
            <div className="font-extrabold text-lg">Task Progress</div>
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <div className="text-emerald-700 font-bold mr-2">Complate</div>
                <div className="w-96 bg-emerald-700 h-8 rounded-full"></div>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <div className="text-emerald-400 font-bold">In Progress</div>
                <div className="w-80 bg-emerald-400 h-8 rounded-full"></div>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <div className="text-emerald-800 font-bold mr-6">Pending</div>
                <div className="w-44 bg-emerald-800 h-8 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 mt-12">
              <div className="text-center">
                <div className="text-4xl">100%</div>
                <div className="font-extrabold text-emerald-800">
                  Project Ended
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white px-6 py-6 rounded-xl">
          <div className="font-bold text-lg">About Application</div>
          <div className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
            pretium tellus duis convallis tempus leo eu aenean sed diam urna
            tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas
            iaculis massa nisl malesuada lacinia integer nunc posuere ut
            hendrerit semper vel class aptent taciti sociosqu ad litora torquent
            per conubia nostra inceptos himenaeos orci varius natoque penatibus
            et magnis dis parturient montes nascetur ridiculus mus donec rhoncus
            eros lobortis nulla molestie mattis scelerisque maximus eget
            fermentum odio phasellus non purus est efficitur laoreet mauris
            pharetra vestibulum fusce dictum risus.
          </div>
        </div>
      </div>
    </div>
  );
}
