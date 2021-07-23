import { FaTimes,FaPenSquare } from 'react-icons/fa'
import { useState } from 'react'

const Item = ({ item,onDelete,onEdit,id }) => {
    const [itemInput,setItem] = useState({
        itemName:item.itemName,
        units:item.units,
        price:item.price,
        edit:"false",
    })
    const onInput = (e) => {
        const columns = e.target.childNodes
        const itemName = columns[1].textContent.replace(/\s+/g, '')
        const units = +columns[2].textContent
        const price = +columns[3].textContent
        setItem({
            itemName,
            units,
            price,
            edit:"true",
        })
    }
    return (
    <tr contentEditable={itemInput.edit} onInput={onInput} className={(itemInput.edit === 'true'? 'edit':'')} onBlur={() => {
        setItem({
            itemName:item.itemName,
            units:item.units,
            price:item.price,
            edit:"false",
        })
            onEdit(itemInput,id)
        }} suppressContentEditableWarning>
        <td contentEditable="false"><span title="delete item" style={{display:'inline'}}><FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(itemInput.itemName)}/></span>&nbsp;&nbsp;<span title="Click and edit your item" style={{display:'inline'}}><FaPenSquare style={{cursor:'pointer'}} onClick={(itemInput) => {
                setItem({
                    itemName:item.itemName,
                    units:item.units,
                    price:item.price,
                    edit:"true",
                })
            }}/></span></td>
        <td>{item.itemName}</td>
        <td>{item.units}</td>
        <td>{item.price}</td>
        <td contentEditable="false" suppressContentEditableWarning>{item.price * item.units}</td>
    </tr>
    )
}

export default Item
