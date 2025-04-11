"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <>
      <header
        className={`${
          pathname == "/"
            ? "fixed left-0 w-full z-[99999] text-white"
            : "sticky bg-white shadow-lg shadow-black/5"
        } top-0 md:p-4 p-2 md:pb-0 z-50`}
      >
        <div className="flex justify-between items-center max-w-[1500px] w-full mx-auto md:rounded-2xl rounded-lg">
          <div className="md:px-5 px-2 py-2 md:w-52 w-40">
            {/* <Link onClick={() => setSidebar(false)} href={`/`}>
              <img src="/logo.png" alt="WIT logo" className="md:w-52 w-40" />
            </Link> */}
          </div>
          <div
            className={`basis-0 grow md:block hidden ${
              pathname == "/"
                ? " bg-blue-500 md:rounded-bl-2xl rounded-bl-lg md:rounded-tr-2xl rounded-tr-lg"
                : ""
            }`}
          >
            <Navbar />
          </div>
          <button
            className="md:hidden block mr-2"
            onClick={() => setSidebar(!sidebar)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <aside
        className={`absolute left-0 w-full bg-gradient-to-br from-blue-400 to-blue-500 text-white x-animation z-50 ${
          sidebar
            ? "max-h-[35rem] py-3 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }
        ${pathname == "/" ? "pt-14" : ""}`}
      >
        <Navbar toggle={setSidebar} />
      </aside>
    </>
  );
}
