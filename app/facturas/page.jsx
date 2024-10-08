"use client"
import React, { useState } from 'react';

export default function Facturaciones() {
  const [facturas, setFacturas] = useState([
    { id: 1, empresa: "Electrica", monto: 13000, fechaVencimiento: "2023-05-15" },
    { id: 2, empresa: "Agua", monto: 4000, fechaVencimiento: "2023-05-20" },
    { id: 3, empresa: "Internet", monto: 10000, fechaVencimiento: "2023-05-25" },
    { id: 4, empresa: "Gas", monto: 3000, fechaVencimiento: "2023-05-30" },
  ]);


  const pagarFactura = (factura) => {
    setFacturas(facturas.filter(f => f.id !== factura.id));
    addPayment({
      id: factura.id,
      empresa: factura.empresa,
      monto: factura.monto,
      fechaPago: new Date().toISOString().split('T')[0]
    });
  };  
  const totalAPagar = facturas.reduce((total, factura) => total + factura.monto, 0);

  return (
    <div>
    <h1 className="text-4xl mb-5 font-bold py-2">Facturaciones</h1>
    <div className="bg-gray-400 px-10 py- rounded-lg text-white mx-auto ">
      <div className="py-5">
        <h2 className="text-xl font-semibold mb-2 text-black">Facturaciones pendientes</h2>
        <p className="text-black">Gestiona y paga tus facturas desde aquí</p>
      </div>
      <div>
        <div>
          <div>
            <div className="flex text-xl space-x-64 text-white text-bold">
              <p>Empresa</p><p>Monto</p>
              <p>Fecha de Vencimiento</p>
          
            </div>
          </div>
          <div>
            {facturas.map((factura) => (
              <ul key={factura.id} className="flex bg-gray-600 p-5 rounded-lg justify-between">
                <li className="py-5"><div>{factura.empresa}</div></li>
                <li className="py-5"><div>${factura.monto.toFixed(2)}</div></li>
                <li className="py-5"><div>{factura.fechaVencimiento}</div></li>
                <li className="flex center-item py-5"><button onClick={() => pagarFactura(factura)} className="bg-green-500 p-2">Pagar</button></li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between py-10">
        <div className="flex">
          <span className="text-lg p-2 border-2 font-semibold">Total a Pagar: ${totalAPagar.toFixed(2)}</span>
        </div>
        <button className="bg-green-500 rounded-lg p-2"onClick={() => totalAPagar(facturas)}> 
         Pagar Todo
        </button>
      
      </div>
          <section className="bg-gray-400 ">
            <div className="flex flex-col bg-gray-400">
              <div className="">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-xl text-black">
                    Pedir prestamo
                  </h1>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 justify-center">
                  
                  <form
                    className="space-y-4 md:space-y-6"
                    id="hi-pedir-prestamo"
                  >
                    <div className="">
                      <label
                        htmlFor="cuenta-destino"
                        className="block mb-2 text-sm font-medium  text-white"
                      >
                        Cuenta destino
                      </label>
                      <div className="mt-2">
                        <select
                          id="cuenta-destino"
                          name="cuenta-destino"
                          autoComplete="cuenta-destino"
                          required
                          className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-gray-700 text-white"
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
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Cuotas
                      </label>
                      <div className="mt-2">
                        <select
                          id="cantidad-cuotas"
                          name="cantidad-cuotas"
                          autoComplete="cantidad-cuotas"
                          required
                          className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-gray-700 text-white"
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
                        className="block mb-2 text-sm font-medium  text-white"
                      >
                        Monto a solicitar
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
                            pr-20 text-gray-900 text-white bg-gray-700
                            ring-gray-300 placeholder:text-gray-400 focus:ring-2
                            focus:ring-inset focus:ring-green-600 sm:text-sm
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
                            className="h-full rounded-md border-0 bg-transparent py-0 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm text-white bg-gray-700"
                          >
                            <option>ARS</option>
                            <option>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="w-full text-white bg-primary-600 hover:bg-primary-700 hover:ring-4 hover:ring-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                      Realizar pedido
                    </button>
                  </form>
          
          </div>
          </div>
          </div>
          </section>
      </div>
      </div>

    
  );
}
