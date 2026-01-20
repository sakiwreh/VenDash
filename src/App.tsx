import { useState } from 'react'
import './App.css'
import './index.css'
import { MdEditNote } from 'react-icons/md'
import ProductDetails from './components/ProductDetails'
import Navigation from './components/Navigation'

function App() {
  let initialProducts = [
    {id:0, name: "Laptop-Lenovo", description: "High performance working laptop. Integrated GPU", price:99999, unit:50},
    {id:1, name: "Charger-Lenovo", description: "dcddcnjdn dc jkjdndn", price:899, unit:0},
    {id:2, name: "Iphone-17", description: "cdnndn dj njdn", price:130000, unit:30},
    {id:3, name: "Canon-DSLR", description: "dhcjhd jhcdc", price:45000, unit:150},
    {id:4, name: "Test-Product", description: "cdjjjnj hxihie", price:8500, unit:2}
  ];

  // const [count, setCount] = useState(0)
  const [Products,setProducts] = useState(initialProducts);

  return (
    <>
      <div>
        <Navigation/>
        <ul>
          {
          Products.map(Product=>(
            <li key={Product.id}>
              <ProductDetails name={Product.name} description={Product.description} price={Product.price} unit={Product.unit}/>
            </li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default App
