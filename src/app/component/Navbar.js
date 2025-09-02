"use client";

export default function Navbar() {
  return (
    <div className="bg-gray-100 px-4 py-6 w-full rounded-xl text-left flex items-center justify-end">
      <div>
        <img src="/img/user.png" style={{ height: "50px" }} alt="User" />
      </div>
      <div className="ml-4">
        <div className="font-bold text-md">Nabila Azzahra</div>
        <div className="text-sm">nabilaazzahra@gmail.com</div>
      </div>
    </div>
  );
}
