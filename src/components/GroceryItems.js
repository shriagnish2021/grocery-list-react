import GrandTotal from './GrandTotal.js'
import Item from './Item.js'

const GroceryItems = ({ items,onDelete,onEdit }) => {
    
    const grandTotal = items.reduce((grandTotalAccumulator,item) => {
        return grandTotalAccumulator + (item.units * item.price);
    },0)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Grocery Item</th>
                        <th>No. of Units</th>
                        <th>Per unit price</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                       <Item item={item} onDelete={onDelete} onEdit={onEdit} key={item.itemName} id={item.itemName}/>
                    ))}
                </tbody>
            </table>
            <GrandTotal grandTotal={grandTotal}></GrandTotal>
        </>
    )
}

export default GroceryItems
