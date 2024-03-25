import { url } from "inspector";
import Link from "next/link";
import { title } from "process";

const Navbar = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
    { url: "/projects", title: "Projects" },
  ];

  return (
    <div
      className="h-full items-center flex 
      justify-between px-4 sm:px-8 md:px-12 lg:px-20
      xl:px-48"
    >
      {/* logo */}
      <div>
        <Link
          href={"/"}
          className="text-sm rounded-md
         bg-black p-1 font-semibold flex 
          items-center justify-center"
        >
          <span className="text-white mr-1">Kham</span>
          <span
            className="text-black w-12 h-8 
            rounded bg-white flex items-center
            justify-center"
          >
            .dev
          </span>
        </Link>
      </div>
      {/* menu button */}
      <div>
        <button>
          <div
            className="w-10 h-8 flex 
              flex-col justify-between"
          >
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
          </div>
        </button>
        {/* menu list */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
