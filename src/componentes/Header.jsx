import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const userMenu = useRef();
  const userMenuButton = useRef();

  
  const handleClick = () => {
    const aside1 = document.getElementById("aside1");
    const aside2 = document.getElementById("aside2");
    const main = document.getElementById("main");

    if (window.innerWidth < 700) {
      aside1.classList.add("hidden");
      aside2.classList.remove("hidden");
      main.classList.remove("ml-60");
      main.classList.add("ml-24");
    } else {
      if (aside1.classList.contains("hidden")) {
        aside1.classList.remove("hidden");
        aside2.classList.add("hidden");
        main.classList.remove("ml-24");
        main.classList.add("ml-60");
      } else {
        aside1.classList.add("hidden");
        aside2.classList.remove("hidden");
        main.classList.remove("ml-60");
        main.classList.add("ml-24");
      }
    }
  };

  const toggleDropdown = () => {
    const menu = userMenu.current;
    menu.classList.toggle("hidden");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("scale-95");
    menu.classList.toggle("opacity-100");
    menu.classList.toggle("scale-100");

    if (!menu.classList.contains("hidden")) {
      document.addEventListener("click", closeDropdownOnClickOutside);
    } else {
      document.removeEventListener("click", closeDropdownOnClickOutside);
    }
  };

  const closeDropdownOnClickOutside = (event) => {
    const menu = userMenu.current;
    const button = userMenuButton.current;

    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.add("hidden", "opacity-0", "scale-95");
      menu.classList.remove("opacity-100", "scale-100");
      document.removeEventListener("click", closeDropdownOnClickOutside);
    }
  };

  return (
    <header
      className="fixed w-full top-0 bg-gray-500 bg-gray-900 text-white"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between px-5">
        <div className="flex items-center justify-between h-20 py-4">
          <button
            className="hover:rounded-full hover:bg-gray-700 w-12 h-12 flex justify-center items-center"
            id="toggle-button"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
          <Link
            className="flex items-center justify-center select-none"
            to="/"
          >
            <img
              src="./src/assets/Banco-removebg-preview.webp"
              alt="logo-banco.webp"
              width="75px"
            />
            <h1 className="text-2xl font-bold self-start mt-3">Horizon</h1>
          </Link>
        </div>
        <div>
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                ref={userMenuButton}
                aria-expanded="false"
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Menu usuario</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-black fill-white"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                </svg>
              </button>
            </div>

            <div
              ref={userMenu}
              className="hidden absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white bg-zinc-950 text-gray-700 text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-0 scale-95"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <Link
                to="/login"
                className="block px-4 py-2 text-sm hover:bg-gray-500 hover:bg-zinc-900"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
                Iniciar sesion
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm hover:bg-gray-500 hover:bg-zinc-900"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
