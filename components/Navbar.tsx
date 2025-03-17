import Link from "next/link";

type PropType = {
  toggle?: (value: boolean) => void;
};

export default function Navbar({ toggle }: PropType) {
  return (
    <nav>
      <ul className="flex md:flex-row flex-col items-center justify-end gap-2 h-full">
        <li>
          <Link
            onClick={() => toggle ? toggle(false) : ""}
            className="x-navbar-item"
            href={`/link`}
          >
            Links
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggle ? toggle(false) : ""}
            className="x-navbar-item"
            href={`/form`}
          >
            Form
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggle ? toggle(false) : ""}
            className="x-navbar-item"
            href={`/news`}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggle ? toggle(false) : ""}
            className="x-navbar-item"
            href={`/event`}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggle ? toggle(false) : ""}
            className="x-navbar-item"
            href={`/academic`}
          >
            Academics
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggle ? toggle(false) : ""}
            className="x-navbar-item"
            href={`/handbook`}
          >
            Handbook
          </Link>
        </li>
        <li>
          <Link
            onClick={() => toggle ? toggle(false) : ""}
            className="x-navbar-item"
            href={`/campus`}
          >
            Campus Life
          </Link>
        </li>
      </ul>
    </nav>
  );
}
