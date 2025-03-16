"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className={`${
        pathname == "/"
          ? "fixed left-0 w-full z-[99999] text-white"
          : "sticky bg-white shadow-lg shadow-black/5"
      } top-0 md:p-4 p-2 pb-0 z-50`}
    >
      <div className="flex max-w-[1500px] w-full mx-auto md:rounded-2xl rounded-lg">
        <div className="px-5 py-2">
          <Link href={`/`}>
            <img src="/logo.png" alt="WIT logo" className="md:w-52 w-40" />
          </Link>
        </div>
        <nav
          className={`${
            pathname == "/"
              ? " bg-blue-500 md:rounded-bl-2xl rounded-bl-lg md:rounded-tr-2xl rounded-tr-lg"
              : ""
          } basis-0 grow`}
        >
          <ul className="lg:flex hidden items-center justify-end gap-2 h-full">
            <li>
              <Link className="x-navbar" href={``}>
                Links
              </Link>
            </li>
            <li>
              <Link className="x-navbar" href={``}>
                News
              </Link>
            </li>
            <li>
              <Link className="x-navbar" href={``}>
                Events
              </Link>
            </li>
            <li>
              <Link className="x-navbar" href={``}>
                Academics
              </Link>
            </li>
            <li>
              <Link className="x-navbar" href={`/handbook`}>
                Handbook
              </Link>
            </li>
            <li>
              <Link className="x-navbar" href={``}>
                Campus Life
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
