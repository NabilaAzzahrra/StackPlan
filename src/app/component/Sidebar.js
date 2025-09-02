"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-gray-100 h-full w-60 px-4 py-4 rounded-2xl">
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="bg-red-500 w-10 h-10 rounded-full"></div>
        <div className="font-bold text-lg">STAK PLAN</div>
      </div>

      <div>
        <div className="mt-10 text-gray-500">MENU</div>
        <Link href="/dashboard">
          <div className="mt-3">
            <div className="flex gap-3 items-start justify-start">
              <div className="bg-emerald-600 w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
              <div className="text-2xl mt-2 text-emerald-600">
                <i className="fi fi-sr-dashboard-monitor" />
              </div>
              <div className="text-black text-md mt-2">Dashboard</div>
            </div>
          </div>
        </Link>
        <Link href="/task">
          <div className="mt-3">
            <div className="flex gap-3 items-start justify-start">
              <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
              <div className="text-2xl mt-2 text-gray-400">
                <i className="fi fi-sr-task-checklist"></i>
              </div>
              <div className="text-gray-500 text-md mt-2">Task</div>
            </div>
          </div>
        </Link>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-note"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Planning</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-file-invoice-dollar"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">RAB</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-analytics"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Report</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-database"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Server Notes</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-sitemap"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Network Notes</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-envelope-open-text"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Surat Keputusan</div>
          </div>
        </div>

        <div className="mt-10 text-gray-500">GENERAL</div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-settings"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Settings</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-interrogation"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Help</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-3 items-start justify-start">
            <div className="bg-transparent w-2 h-10 -ml-4 rounded-tr-full rounded-br-full"></div>
            <div className="text-2xl mt-2 text-gray-400">
              <i className="fi fi-sr-user-logout"></i>
            </div>
            <div className="text-gray-500 text-md mt-2">Logout</div>
          </div>
        </div>
        <div className="mt-6 w-full bg-black p-4 rounded-2xl h-[93px] text-white">
          <div className="w-5 h-5 bg-white rounded-2xl"></div>
          <div className="text-sm mt-2">
            <span className="font-bold">Download</span> Our <br></br> Mobile App
          </div>
        </div>
      </div>
    </div>
  );
}
