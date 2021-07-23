import { FaTimes,FaPenSquare } from 'react-icons/fa'
import { useState } from 'react'

const Item = ({ item,onDelete,onEdit,id }) => {
    const [itemInput,setItem] = useState({
        itemName:item.itemName,
        units:item.units,
        price:item.price,
    })
    const onInput = (e) => {
        const columns = e.target.childNodes
        const itemName = columns[0].textContent.replace(/\s+/g, '')
        const units = +columns[1].textContent
        const price = +columns[2].textContent
        setItem({
            itemName,
            units,
            price,
        })
    }
    return (
    <tr contentEditable onInput={onInput} onBlur={() => onEdit(itemInput,id)} suppressContentEditableWarning>
        <td><FaPenSquare style={{cursor:'pointer'}}/><FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(item.itemName)}/>   {item.itemName}</td>
        <td>{item.units}</td>
        <td>{item.price}</td>
        <td contentEditable="false" suppressContentEditableWarning>{item.price * item.units}</td>
    </tr>
    )
}

export default Item
