export default function Pagos() {
  return (
    <main
      className="flex ml-24 text-wrap text-black dark:text-gray-300 min-h-screen"
      id="main"
    >
      <div className="flex flex-col items-center w-full gap-5 dark:bg-gray-800">
        <h2 className="font-bold text-2xl uppercase mt-12">
          Pagos y Prestamos
        </h2>
        <div className="w-full flex justify-around my-12 flex-wrap md:flex-nowrap gap-5">
          <section className="dark:bg-gray-900 w-full sm:min-w-[300px]">
            <div className="flex flex-col dark:bg-gray-800 px-12">
              <div className="w-full bg-white rounded-sm shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 max-w-[800px]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 justify-center">
                  <h2 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white text-center">
                    Pagar
                  </h2>
                  <form
                    className="space-y-4 md:space-y-6"
                    id="hi-pagar-cuenta"
                  >
                    <div>
                      <label
                        htmlFor="codigo-pago"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nº codigo de barras
                      </label>
                      <input
                        type="text"
                        name="codigo-pago"
                        required={true}
                        id="codigo-pago"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="01700998974894189486454648489189189984497370"
                        autoComplete="off"
                        minLength="6"
                        aria-errormessage="Error: codigo incorrecto"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="amount-pago"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Monto
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="amount-pago"
                          id="amount-pago"
                          required
                          autoComplete="off"
                          className="block w-full rounded-md border-0 py-1.5 pl-7
                            pr-20 text-gray-900 dark:text-white dark:bg-gray-700
                            ring-gray-300 placeholder:text-gray-400 focus:ring-2
                            focus:ring-inset focus:ring-indigo-600 sm:text-sm
                            sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label
                            htmlFor="moneda-pago"
                            className="sr-only"
                          >
                            moneda-pago
                          </label>
                          <select
                            id="moneda-pago"
                            name="moneda-pago"
                            className="h-full rounded-md border-0 bg-transparent py-0 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm dark:text-white dark:bg-gray-700"
                          >
                            <option>ARS</option>
                            <option>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="emisor-transferencia"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Cuenta
                      </label>
                      <div className="mt-2">
                        <select
                          id="emisor-transferencia"
                          name="emisor-transferencia"
                          autoComplete="emisor-cuenta"
                          required
                          className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white"
                        >
                          <option
                            selected
                            value=""
                          >
                            Selecciona una cuenta
                          </option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full text-white bg-primary-600 hover:bg-primary-700 hover:ring-4 hover:ring-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Realizar Pago
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="dark:bg-gray-900 w-full sm:min-w-[300px]">
            <div className="flex flex-col dark:bg-gray-800 px-12 h-full">
              <div className="w-full bg-white rounded-sm shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 max-w-[800px]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 justify-center">
                  <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white text-center">
                    Pedir prestamo
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    id="hi-pedir-prestamo"
                  >
                    <div className="">
                      <label
                        htmlFor="cuenta-destino"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Cuenta destino
                      </label>
                      <div className="mt-2">
                        <select
                          id="cuenta-destino"
                          name="cuenta-destino"
                          autoComplete="cuenta-destino"
                          required
                          className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white"
                        >
                          <option
                            selected
                            value="nada"
                          >
                            Selecciona cuenta destino
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="cantidad-cuotas"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Cuotas
                      </label>
                      <div className="mt-2">
                        <select
                          id="cantidad-cuotas"
                          name="cantidad-cuotas"
                          autoComplete="cantidad-cuotas"
                          required
                          className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white"
                        >
                          <option
                            selected
                            value="nada"
                          >
                            Selecciona cuotas
                          </option>
                          <option value="3">3</option>
                          <option value="6">6</option>
                          <option value="9">9</option>
                          <option value="12">12</option>
                          <option value="24">24</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="amount-prestamo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Monto a pedir
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="amount-prestamo"
                          id="amount-prestamo"
                          required
                          autoComplete="off"
                          className="block w-full rounded-md border-0 py-1.5 pl-7
                            pr-20 text-gray-900 dark:text-white dark:bg-gray-700
                            ring-gray-300 placeholder:text-gray-400 focus:ring-2
                            focus:ring-inset focus:ring-indigo-600 sm:text-sm
                            sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label
                            htmlFor="moneda-prestamo"
                            className="sr-only"
                          >
                            moneda-prestamo
                          </label>
                          <select
                            id="moneda-prestamo"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm dark:text-white dark:bg-gray-700"
                          >
                            <option>ARS</option>
                            <option>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="w-full text-white bg-primary-600 hover:bg-primary-700 hover:ring-4 hover:ring-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Realizar pedido
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="flex flex-wrap 2xl:justify-around gap-2 w-full"
          id="cuentas-container"
        ></div>
      </div>
    </main>
  );
}
