import { addDoc, collection, getFirestore, doc, updateDoc} from 'firebase/firestore';
import React, { useEffect } from 'react'

const Checkout = () => {
    // aca crear los estados de los input
    
        const sendOrder = () => {

                const order = {
                    buyer: {name: "Juan", phone: "1234556", email: "juan@carlos.com"},
                    items: [{ id: "3", title: "Buzito", price: 30}],
                    total: 30
                };

                const db = getFirestore()

                const ordenesRef = collection(db, "ordenes")

                addDoc(ordenesRef, order)

            }
// no hay que hacerla para el proyecto final
//         const updateOrder = () =>{

//                 const db = getFirestore()
// // en las letras va el id del elemento a editar
//                 const ordenRef = doc(db, "ordenes", "UajP7uhbrVOhe0EZyXTd")

//                 // lo de aca es lo que queremos editar
//                 updateDoc(ordenRef, {total : 200})
//             }
    

  return (
    <div>
        <form action="">
            <input type="text" placeholder='Juan Perez'/>
            <input type="email" placeholder='tuemail@example.com'/>
            <input type="tel" placeholder='1112341234'/>
            <button onClick={sendOrder}>Finalizar Compra</button>
            <button onClick={sendOrder}>guarda orden</button>
            {/* <button onClick={updateOrder}>actualiza orden</button> */}
        </form>
    </div>
  )
}

export default Checkout