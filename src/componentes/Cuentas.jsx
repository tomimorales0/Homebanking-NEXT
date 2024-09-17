
export default function Cuentas() {
  return (
    <main
      className="flex pb-6 ml-24 text-wrap text-black text-gray-300 bg-gray-800 min-h-screen"
      id="main"
    >
      <div className="flex flex-col items-center w-full gap-5">
        <h2 className="font-bold text-2xl uppercase">Cuentas</h2>
        <div
          className="flex flex-wrap 2xl:justify-around gap-2 w-full"
          id="cuentas-container"
        ></div>
        <h2 className="font-bold text-2xl uppercase">Tarjetas</h2>
        <div className="flex flex-wrap lg:flex-nowrap 2xl:justify-around gap-2 w-full">
          <a
            href="/cards/credit?id=1"
            className="m-4 border rounded-lg border-stone-400 p-8 flex flex-col gap-2 shadow-md shadow-stone-800/50 border-l-8 border-l-green-600 w-full max-w-[750px] bg-gray-800 hover:bg-gray-600"
          >
            <h2 className="font-bold text-xl uppercase">Tarjetas de credito</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              className="fill-black fill-white"
            >
              <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
            </svg>
            <div className="flex justify-between flex-col md:flex-row">
              <p className="font-medium">Saldo en uso:</p>
              <p className="font-bold">$ 10.000.000</p>
            </div>
            <div className="flex justify-between flex-col md:flex-row">
              <p className="font-medium">Saldo disponible:</p>
              <p className="font-bold">$ 40.000.000.000</p>
            </div>
            <div className="flex justify-between flex-col md:flex-row">
              <p className="font-bold">Disponibles:</p>
              <p className="font-bold uppercase">2</p>
            </div>
          </a>
          <a
            href="/cards/credit?id=1"
            className="m-4 border rounded-lg border-stone-400 p-8 flex flex-col gap-2 shadow-md shadow-stone-800/50 border-l-8 border-l-green-600 w-full max-w-[750px] bg-gray-800 hover:bg-gray-600"
          >
            <h2 className="font-bold text-xl uppercase">Tarjetas de debito</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              className="fill-black fill-white"
            >
              <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
            </svg>
            <div className="flex justify-between flex-col md:flex-row">
              <p className="font-medium">Saldo disponible:</p>
              <p className="font-bold">$ 12.000.000.000</p>
            </div>
            <div className="flex justify-between flex-col md:flex-row">
              <p className="font-bold">Disponibles:</p>
              <p className="font-bold uppercase">3</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
