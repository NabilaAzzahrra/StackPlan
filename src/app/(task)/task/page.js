"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [todoOpen, setTodoOpen] = useState(false);
  const [onprogressOpen, setOnProgressOpen] = useState(false);
  const [doneOpen, setDoneOpen] = useState(false);
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="font-bold text-xl">Task</div>
          <div className="text-sm text-gray-300 mb-4">
            Plan, prioritize, andaccomplish ypur tasks with ease.
          </div>
        </div>
        <div className="flex gap-4">
          {/* <button className="text-emerald-500 rounded-full h-6 w-6 flex text-center items-center justify-center">
            <i className="fi fi-sr-filter mt-2 text-xl" />
          </button> */}
          <button className="text-emerald-500 h-8 w-8" title="add list">
            <i className="fi fi-sr-add text-3xl"></i>
          </button>
        </div>
      </div>
      <div className="bg-gray-100 px-6 py-6 rounded-xl">
        <div className="flex gap-4 border-b border-gray-300 mb-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-2 ${
              activeTab === "all"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("todo")}
            className={`pb-2 ${
              activeTab === "todo"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500"
            }`}
          >
            To Do
          </button>
          <button
            onClick={() => setActiveTab("onprogress")}
            className={`pb-2 ${
              activeTab === "onprogress"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500"
            }`}
          >
            On Progress
          </button>
          <button
            onClick={() => setActiveTab("done")}
            className={`pb-2 ${
              activeTab === "done"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500"
            }`}
          >
            Done
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "all" && (
          <div>
            <div className="font-bold">
              <span className="text-red-500">*</span> Note:{" "}
              <span className="ml-1 font-normal">
                Urutan data berdasarkan waktu penambahan terbaru
              </span>
            </div>
            <div
              className="mt-4 flex items-center gap-4 bg-emerald-50 px-4 pt-2 pb-1 rounded-xl border border-emerald-300"
              onClick={() => setTodoOpen(!todoOpen)}
            >
              <div className="">
                <i className="fi fi-sr-dot-circle text-2xl"></i>
              </div>
              <div className="-mt-1 font-bold text-lg">Todo</div>
            </div>
            {todoOpen && (
              <>
                <div className="mt-2 text-gray-400 flex">
                  <div className="w-full">Name</div>
                  <div className="w-1/4 text-left">Start Date</div>
                  <div className="w-1/4 text-left">Due Date</div>
                  <div className="w-1/4">Priority</div>
                </div>
                <hr className="mt-2 border-gray-400"></hr>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold mt-[2px] ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-sky-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Medium</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-red-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Hard</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-gray-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Low</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {/* Tab Content */}
        {activeTab === "all" && (
          <div>
            <div
              className="mt-4 flex items-center gap-4 bg-amber-50 px-4 pt-2 pb-1 rounded-xl border border-amber-300"
              onClick={() => setOnProgressOpen(!onprogressOpen)}
            >
              <div className="">
                <i className="fi fi-sr-dot-circle text-2xl"></i>
              </div>
              <div className="-mt-1 font-bold text-lg">On Progress</div>
            </div>
            {onprogressOpen && (
              <>
                <div className="mt-2 text-gray-400 flex">
                  <div className="w-full">Name</div>
                  <div className="w-1/4 text-left">Start Date</div>
                  <div className="w-1/4 text-left">Due Date</div>
                  <div className="w-1/4">Priority</div>
                </div>
                <hr className="mt-2 border-gray-400"></hr>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold mt-[2px] ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-sky-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Medium</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-red-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Hard</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-gray-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Low</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {/* Tab Content */}
        {activeTab === "all" && (
          <div>
            <div
              className="mt-4 flex items-center gap-4 bg-sky-50 px-4 pt-2 pb-1 rounded-xl border border-sky-300"
              onClick={() => setDoneOpen(!doneOpen)}
            >
              <div className="">
                <i className="fi fi-sr-dot-circle text-2xl"></i>
              </div>
              <div className="-mt-1 font-bold text-lg">Done</div>
            </div>
            {doneOpen && (
              <>
                <div className="mt-2 text-gray-400 flex">
                  <div className="w-full">Name</div>
                  <div className="w-1/4 text-left">Start Date</div>
                  <div className="w-1/4 text-left">Due Date</div>
                  <div className="w-1/4">Priority</div>
                </div>
                <hr className="mt-2 border-gray-400"></hr>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold mt-[2px] ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-sky-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Medium</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-red-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Hard</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-gray-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Low</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {activeTab === "todo" && (
          <div>
            <div className="font-bold">
              <span className="text-red-500">*</span> Note:{" "}
              <span className="ml-1 font-normal">
                Urutan data berdasarkan waktu penambahan terbaru
              </span>
            </div>
            <div
              className="mt-4 flex items-center gap-4 bg-emerald-50 px-4 pt-2 pb-1 rounded-xl border border-emerald-300"
              onClick={() => setTodoOpen(!todoOpen)}
            >
              <div className="">
                <i className="fi fi-sr-dot-circle text-2xl"></i>
              </div>
              <div className="-mt-1 font-bold text-lg">Todo</div>
            </div>
            {todoOpen && (
              <>
                <div className="mt-2 text-gray-400 flex">
                  <div className="w-full">Name</div>
                  <div className="w-1/4 text-left">Start Date</div>
                  <div className="w-1/4 text-left">Due Date</div>
                  <div className="w-1/4">Priority</div>
                </div>
                <hr className="mt-2 border-gray-400"></hr>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold mt-[2px] ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-sky-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Medium</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-red-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Hard</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-gray-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Low</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {activeTab === "onprogress" && (
          <div>
            <div
              className="mt-4 flex items-center gap-4 bg-amber-50 px-4 pt-2 pb-1 rounded-xl border border-amber-300"
              onClick={() => setOnProgressOpen(!onprogressOpen)}
            >
              <div className="">
                <i className="fi fi-sr-dot-circle text-2xl"></i>
              </div>
              <div className="-mt-1 font-bold text-lg">On Progress</div>
            </div>
            {onprogressOpen && (
              <>
                <div className="mt-2 text-gray-400 flex">
                  <div className="w-full">Name</div>
                  <div className="w-1/4 text-left">Start Date</div>
                  <div className="w-1/4 text-left">Due Date</div>
                  <div className="w-1/4">Priority</div>
                </div>
                <hr className="mt-2 border-gray-400"></hr>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold mt-[2px] ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-sky-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Medium</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-red-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Hard</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-gray-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Low</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {activeTab === "done" && (
          <div>
            <div
              className="mt-4 flex items-center gap-4 bg-sky-50 px-4 pt-2 pb-1 rounded-xl border border-sky-300"
              onClick={() => setDoneOpen(!doneOpen)}
            >
              <div className="">
                <i className="fi fi-sr-dot-circle text-2xl"></i>
              </div>
              <div className="-mt-1 font-bold text-lg">Done</div>
            </div>
            {doneOpen && (
              <>
                <div className="mt-2 text-gray-400 flex">
                  <div className="w-full">Name</div>
                  <div className="w-1/4 text-left">Start Date</div>
                  <div className="w-1/4 text-left">Due Date</div>
                  <div className="w-1/4">Priority</div>
                </div>
                <hr className="mt-2 border-gray-400"></hr>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold mt-[2px] ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-sky-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Medium</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-red-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Hard</div>
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div className="w-5">
                    <input
                      type="checkbox"
                      id="id"
                      name="name"
                      placeholder="placeholder"
                      className="w-4 h-4 border border-slate-500 outline-none rounded-sm	bg-transparent"
                    />
                  </div>
                  <div className="w-full font-bold ml-6">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus....
                  </div>
                  <div className="w-1/4 text-left">02/09/25</div>
                  <div className="w-1/4 text-left">10/09/25</div>
                  <div className="w-1/4 flex gap-2 items-center text-gray-500">
                    <div className="">
                      <i className="fi fi-sr-flag-alt"></i>
                    </div>
                    <div className="-mt-1">Low</div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Nanti ketika input task ada pilihan sama kek inputan sebelumnya, jadi ga usah input satu satu lagi, misal input task pengembangan siakad menambahkan keuangan, terus besoknya nambahin fitur krs nahhhh setingannya pilih aja kek yang sebelumnya jadi ga usah ngisi dari awal lagi kek PIC nya, divisinya, dll.
