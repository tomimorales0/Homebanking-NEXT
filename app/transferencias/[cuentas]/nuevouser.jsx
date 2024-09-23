'use client';

import { useState } from 'react';

const FormNewClient = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
      setShowForm(false); 
    }
  };

  return (
    <div>
      <button
        onClick={toggleForm}
        className="bg-green-500 text-white font-bold px-4 py-1 rounded hover:bg-emerald-500 transition"
      >Nuevo +
      </button>

      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10 modal-wrapper"
          onClick={handleClickOutside}
        >
          
          <div className="flex flex-col bg-gray-400 ring-2 ring-emerald-500 p-10 rounded-lg">
                  <h2 className="text-lg font-bold text-white md:text-xl text-center">
                    Transferir
                  </h2>
                  <form
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="receptor"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        CBU / Alias
                      </label>
                      <input
                        type="text"
                        name="receptor"
                        required={true}
                        id="receptor-tranferencia"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0170099220000067797370"
                        autoComplete="off"
                        maxLength="22"
                        minLength="6"
                        aria-errormessage="Error: CVU incorrecto"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Monto
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input className="block w-full rounded-md border-0 py-1.5 pl-7
                            pr-20 text-gray-900 text-white bg-gray-700
                            ring-gray-300 placeholder:text-gray-400 focus:ring-2
                            focus:ring-inset focus:ring-indigo-600 sm:text-sm
                            sm:leading-6"
                          type="number"
                          name="amount"
                          id="amount-transfer"
                          required
                          autoComplete="off"
                          
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label
                            htmlFor="currency"
                            className="sr-only"
                          >
                            Currency
                          </label>
                          <select
                            id="currency"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-white bg-gray-700"
                          >
                            <option defaultValue value="ARS">ARS</option>
                            <option value="USD">USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                
                    <button className="w-full text-white bg-primary-600 hover:bg-primary-700 hover:ring-4 hover:ring-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                      Realizar Transferencia
                    </button>
                  </form>
                </div>
        </div>
      )}
    </div>
  );
};

export default FormNewClient;
