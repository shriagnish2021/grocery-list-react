import Header from './components/Header.js'
import Form from './components/Form.js'
import Items from './components/GroceryItems.js'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
      {
          itemName:"tomatoes",
          units:3,
          price:30,
      },
      {
          itemName:"potatoes",
          units:1,
          price:60,
      },
  ])
  const addItem = (item) => {
    setItems([...items, item])
  }
  const deleteItem = (itemName) => {
    setItems(items.filter(item => item.itemName !== itemName))
  }
  const editItem = (editedItem,id) => {
    let toEditItemIndex = items.findIndex(item => item.itemName === id)
    let newArray = [...items]
    newArray[toEditItemIndex] = editedItem
    setItems(newArray)
  }
  return (
    <div className="container">
      <Header />
      <Form onAdd={addItem}/>
      {items.length? <Items items={items} onDelete={deleteItem} onEdit={editItem}/> : 'There are no items in your Grocery List.'}
    </div>
  );
}

export default App;
