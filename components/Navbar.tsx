import Link from "next/link";
import { usePathname } from "next/navigation";

type PropType = {
  toggle?: (value: boolean) => void;
};

export default function Navbar({ toggle }: PropType) {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex md:flex-row flex-col md:items-center justify-end gap-2 h-full">
        <li className="relative group">
          <button className="x-navbar-item">Guideline</button>
          <div
            className={`${
              pathname == "/" ? "md:bg-white md:text-black" : "md:bg-blue-500 md:text-white"
            } md:absolute top-full left-9 md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible w-60 md:shadow-lg shadow-black/5 rounded-xl rounded-tl-none z-[99] x-animation`}
          >
            <span className={`${pathname == "/" ? "border-white" : "border-blue-500"} absolute md:block hidden bottom-full left-0 border-[6px]  border-r-transparent border-t-transparent z-0`}></span>
            <ul className="relative flex flex-col gap- z-10">
              <li>
                <Link
                  onClick={() => (toggle ? toggle(false) : "")}
                  className="x-navbar-subItem"
                  href={`/bank-account`}
                >
                  Opening Bank Account
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => (toggle ? toggle(false) : "")}
                  className="x-navbar-subItem"
                  href={`/police-registration`}
                >
                  Police Registration
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => (toggle ? toggle(false) : "")}
                  className="x-navbar-subItem"
                  href={`/medical-test`}
                >
                  Medical Test
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => (toggle ? toggle(false) : "")}
                  className="x-navbar-subItem"
                  href={`/residence-permit`}
                >
                  Residence Permit
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            onClick={() => (toggle ? toggle(false) : "")}
            className="x-navbar-item"
            href={`/campus`}
          >
            Campus Life
          </Link>
        </li>
        <li>
          <Link
            onClick={() => (toggle ? toggle(false) : "")}
            className="x-navbar-item"
            href={`/link`}
          >
            Links
          </Link>
        </li>
        <li>
          <Link
            onClick={() => (toggle ? toggle(false) : "")}
            className="x-navbar-item"
            href={`/form`}
          >
            Form
          </Link>
        </li>
        <li>
          <Link
            onClick={() => (toggle ? toggle(false) : "")}
            className="x-navbar-item"
            href={`/news`}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            onClick={() => (toggle ? toggle(false) : "")}
            className="x-navbar-item"
            href={`/event`}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            onClick={() => (toggle ? toggle(false) : "")}
            className="x-navbar-item"
            href={`/academic`}
          >
            Academics
          </Link>
        </li>
      </ul>
    </nav>
  );
}
