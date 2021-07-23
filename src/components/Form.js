import Input from './Input.js'
import Button from './Button.js'
import { useState } from 'react'

const Form = ({ onAdd }) => {
    const [itemName, setItemName] = useState('')
    const [units, setUnits] = useState(0)
    const [price, setPrice] = useState(0)
    const onSubmit = (e) => {
        e.preventDefault()  
        e.target.reset()
        onAdd({ itemName,units,price })
        setItemName('')
        setUnits(0)
        setPrice(0)
    }
    return (
        <form onSubmit={onSubmit}>
            <Input type="text" name="itemName" placeholder="Name of Item" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
            <Input type="number" name="units" placeholder="Number of Units" value={units} onChange={(e) => setUnits(+e.target.value)} />
            <Input type="number" name="price" placeholder="Per Unit Price" value={price} onChange={(e) => setPrice(+e.target.value)} />
            <Button text="Add Item" />
        </form>
    )
}

export default Form
