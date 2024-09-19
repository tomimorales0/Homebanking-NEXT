export default function Cuenta() {
    return (
      <>
      <h1 className="text-2xl font-bold py-2">Cuenta</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Saldo de cuenta</h2>
        <p className="text-gray-600 mb-4">Tu saldo actual</p>
        <p className="text-4xl font-bold">$12,345.67</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Transacciones Recientes</h2>
          <p className="text-gray-600 mb-4">Ultimas Actividades</p>
          <ul className="space-y-4">
            {[
              { id: 1, description: "Tienda de Conveniencia", amount: -85.32, date: "2023-06-15" },
              { id: 2, description: "Deposito de Salario", amount: 3000, date: "2023-06-14" },
              { id: 3, description: "Factura de Electricidad", amount: -120.50, date: "2023-06-13" },
              { id: 4, description: "Compra Online", amount: -65.99, date: "2023-06-12" },
            ].map((transaction) => (
              <li key={transaction.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <span className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        </>
    )
  }