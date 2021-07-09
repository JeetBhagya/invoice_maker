import React,{useState,useEffect} from 'react'
import './body.css'
import { v4 as uuidv4 } from 'uuid';

function Body() {

    const [itemName, setItemName] = useState("")
    const [itemPrice, setItemPrice] = useState(0)
    const [itemQuantity, setItemQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [items, setItems] = useState([])
    const addItem = (e) => {
        e.preventDefault()
        if (itemName != "" && itemPrice != 0 && itemPrice != 0) {
            setItems([...items, { itemName, itemPrice, itemQuantity, id: uuidv4() }])
            setTotalPrice(totalPrice + (itemPrice * itemQuantity))

            setItemName("")
            setItemPrice(0)
            setItemQuantity(0)
        }
        else {
            alert("Don't leave the input field empty")
        }
    }
    const deleteItem = (e,id)=>
    {
        e.preventDefault()
        console.log(id);
    }
    useEffect(() => {
      
    }, [items])
   
    return (
        <div className="body">
        <h1 className="input_text">Invoice Form</h1>
           <form  id="form">
           <input className="input_first" type="text" name="" id="" placeholder="Customer Name"/>
           <input  className="tag_input" type="tel" name="" id="" placeholder="Contact Number" />
           <input  className="input_first" type="text" name="" id="" placeholder="Shop Name"/>
           <input type="text" name="" id="" className="item_name" value={itemName} onChange={(e) => { setItemName(e.target.value) }} placeholder="Item Name" />
            <input type="number" name="" id="" className="item_price" value={itemPrice} onChange={(e) => { setItemPrice(e.target.value) }} placeholder="Item Price" />
            <input type="number" name="" id="" className="item_quantity" value={itemQuantity} onChange={(e) => { setItemQuantity(e.target.value) }} placeholder="Item Quantity" />
            <div className="item_list">
                <h3>Items</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Item Name
                            </th>
                            <th>
                                Item Price
                            </th>
                            <th>
                                Item Quantity
                            </th>
                            <th>
                                Total Price
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        items.map((item) => {
                            return (
                               
                                    <tr className="item" key={item.id} >
                                        <td className="name">{item.itemName}</td>
                                        <td className="price">{item.itemPrice}</td>

                                        <td className="quantity">{item.itemQuantity}</td>
                                        <td className="total_price">{item.itemPrice * item.itemQuantity}</td>
                                    <td id="edit" style={{cursor:"pointer"}}>📝</td>
                                    <td id="delete" style={{cursor:"pointer"}} onClick={(e)=>{
                                        // e.preventDefault()
                                        deleteItem(e,item.id)}}>⚔️</td>
                                    </tr>
                               

                            )
                        }
                        )


                    }
                    </tbody>
                    <tfoot>
                        <tr className="total_item_price">
                            <td colSpan="4">Total Sum: {totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button onClick={addItem} className="add" onClick={addItem}>+</button>
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Body;
