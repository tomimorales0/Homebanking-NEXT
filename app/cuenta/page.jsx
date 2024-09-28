export async function generateMetadata() {
  return {
    title: 'Cuentas',
    description: 'Consulta tu saldo',
    keywords: ['saldo', 'transacciones recientes', 'dinero'],
  };
}

export default function Cuenta() {
    return (
      <>
      <h1 className="text-4xl mb-5 font-bold py-2">Cuenta</h1>
      <div className="bg-gray-400 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Saldo de cuenta</h2>
        <p className="text-white mb-4">Tu saldo actual:</p>
        <p className="text-4xl text-green-400 font-bold">$12,345.67</p>
      </div>
      <div className="bg-gray-400 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Transacciones Recientes</h2>
          <p className="text-white mb-4">Ultimas Actividades:</p>
          <ul className="space-y-4">
            {[
              { id: 1, description: "Tienda de Conveniencia", amount: -85.32, date: "10-09-2024" },
              { id: 2, description: "Deposito de Salario", amount: 3000, date: "03-08-2024" },
              { id: 3, description: "Factura de Electricidad", amount: -120.50, date: "11-08-2024" },
              { id: 4, description: "Compra Online", amount: -65.99, date: "24-07-2024" },
            ].map((transaction) => (
              <li key={transaction.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium text-white">{transaction.description}</p>
                  <p className="text-sm text-white">{transaction.date}</p>
                </div>
                <span className={transaction.amount > 0 ? "text-green-600" : "text-red-500"}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        </>
    )
  }