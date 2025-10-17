import React, { useRef, useState } from 'react'

function SalesApp() {
    let [price1,setPrice1] = useState('')
    let [cost1,setCost1] = useState("");
    let qty1 = useRef()

    function displayPrice() {
        if (price1 == "") {
            setPrice1(2000)
        } else {
            setPrice1("")
        }
    }

    function calCost1() {
        setCost1(price1 * qty1.current.value)
    }

    
  return (
    <div className=' flex justify-center'>
        <table className=' w-[50%] border-4'>
            <tr className=' border-3'>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Cost</th>
            </tr>
            <tr className=' border-3'>
                <td><input type="checkbox" onClick={displayPrice}/> Bag</td>
                <td><input type="number" onInput={calCost1} ref={qty1} className=' border-2' placeholder='quantity'/></td>
                <td><input type="number" className=' border-2' placeholder='Price' value={price1} disabled/></td>
                <td><input type="number" className=' border-2' placeholder='Cost' value={cost1}/></td>
            </tr>
        </table>

    </div>
  )
}

export default SalesApp