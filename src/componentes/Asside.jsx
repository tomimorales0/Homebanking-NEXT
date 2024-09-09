import { Link } from "react-router-dom";

export default function Asside() {
  return (
    <>
      <aside
        className="w-60 text-white fixed h-screen bg-gray-50 dark:bg-gray-900 mt-20 hidden z-50"
        id="aside1"
        
      >
        <div className="flex flex-col">
          <nav className="flex-1 px-4 py-6 bg-gray-500 dark:bg-gray-900">
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-sm font-bold rounded-md bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
                  </svg>

                  <span className="ml-6">Inicio</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/cuentas"
                  className="flex items-center px-4 py-2 text-sm font-bold rounded-md hover:bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                  </svg>
                  <span className="ml-6">Cuentas</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/transferencias"
                  className="flex items-center px-4 py-2 text-sm font-bold rounded-md hover:bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z" />
                  </svg>

                  <span className="ml-6">Transferencias</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/pagos"
                  className="flex items-center px-4 py-2 text-sm font-bold rounded-md hover:bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M120-160q-33 0-56.5-23.5T40-240v-440h80v440h680v80H120Zm160-160q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80q0-33-23.5-56.5T280-480v80h80Zm400 0h80v-80q-33 0-56.5 23.5T760-400Zm-200-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM280-640q33 0 56.5-23.5T360-720h-80v80Zm560 0v-80h-80q0 33 23.5 56.5T840-640Z" />
                  </svg>

                  <span className="ml-6">Pagos</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <aside
        className="w-24 text-white fixed h-screen bg-gray-50 dark:bg-gray-900 mt-20"
        id="aside2"
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4 py-6 bg-gray-500 dark:bg-gray-900">
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="flex items-center justify-center px-4 py-8 text-sm font-bold rounded-lg bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
                  </svg>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/cuentas"
                  className="flex items-center justify-center px-4 py-8 text-sm font-bold rounded-lg hover:bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path
                      d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                    />
                  </svg>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/transferencias"
                  className="flex items-center justify-center px-4 py-8 text-sm font-bold rounded-lg hover:bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path
                      d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z"
                    />
                  </svg>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/pagos"
                  className="flex items-center justify-center px-4 py-8 text-sm font-bold rounded-lg hover:bg-gray-800 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-black dark:fill-white"
                  >
                    <path
                      d="M120-160q-33 0-56.5-23.5T40-240v-440h80v440h680v80H120Zm160-160q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80q0-33-23.5-56.5T280-480v80h80Zm400 0h80v-80q-33 0-56.5 23.5T760-400Zm-200-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM280-640q33 0 56.5-23.5T360-720h-80v80Zm560 0v-80h-80q0 33 23.5 56.5T840-640Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
