import FormClient from "./formtranferencia";
import FormNewClient from "./nuevouser";

export default function Transferencias() {
  
 async function UserFetch() {
  
    const dataUser = async() => {
    const user = await fetch("https://json-placeholder.mock.beeceptor.com/users")
    return user.json();
  }
  const usuarios = await dataUser({})
  
  return (
    <div className="bg-gray-400"><ul className=""> {usuarios.map((user) => ( <li key={user.id} className="flex my-5 p-2 justify-between rounded-lg sm:border-white  hover:border-2 border-white"> <div><h2 className="text-gray-600 bg-white p-2 rounded-full sm:p-5">{getInitials(user.name)}</h2></div> <h2 className="text-white text-sm sm:text-lg">{user.name}<br/>{user.company}</h2> <FormClient/> </li> ))} </ul></div>
  );
}

const getInitials = (name) => {
  const nameParts = name.split(' ');
  const initials = nameParts.map(part => part[0].toUpperCase()).join('');
  return initials;
};



  return (
        <>
        <h2 className="text-4xl mb-5 font-bold py-2">Transferencias</h2>
      <div className="flex flex-col p-6 mb-6 bg-gray-400 rounded-lg">
          <div className="flex space-x-5 item-center">
        <h2 className="text-xl font-semibold mb-2">
            Contactos
          </h2>
          <FormNewClient/>
        </div>
         <UserFetch/>
        
      </div>
      </>
    )
  }
