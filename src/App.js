import { Component } from 'react';
import './App.css';
import Copy from './images/Copy.jpg'


class App extends Component {
  state = {
    fullName: 'Hayari Mohammed',
    bio: 'im happy',
    imgSrc: Copy,
    profession: 'Developper',
    show: false
  }
  handelShow = () => this.setState({ show: !this.state.show })
  
  render() {
    return (
      <>
<button  onClick={this.handelShow}>SHOWN</button>
        {this.state.show &&
          <div>
            <p>{this.state.fullName}</p>
            <p>{this.state.bio}</p>
            <img style={{ width:'100px',height:'100px' }} src={ this.state.imgSrc } alt='pic' />
            <p>{this.state.profession}</p>
          </div>
        }

      </>
    )

  }
}
export default App;


// import React from 'react'
// import './App.css'
// import {useState} from 'react'

// const App = () => {

//   const [items, setItems] = useState([{ task: 'ok', done: false }])
//   const [newItems,setNewItems]=useState('')

//   const addItem = (em) => {
//     const newObj={...newItems,task:em}
//     const lisItem = [...items, newObj]
//     setItems(lisItem)
//     setNewItems('')
//   }

//   const handelDelete = (tem) => {
//     const newTem = items.filter(item => item.task!==tem)
//     setItems(newTem)
//   }
 

//   return (
//     <div   > 
//       <input value={newItems} onChange={(e)=>setNewItems(e.target.value)} />
//       <button onClick={()=>addItem(newItems)}>Add Item</button>
//       {items.map(item => (
//         <div>
//         <span>{item.task}</span>
//           <button onClick={()=>handelDelete(item.task)}>Delete</button>
//           </div>
//       ))}
     
//     </div>
//   )
// }

// export default App
