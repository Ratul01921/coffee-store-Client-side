
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  // console.log(loadedCoffee)
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>

      <h1 className='text-6xl text-purple-700' >Hit Hot Coffee: {coffees.length}</h1>
      <div className='w-10/12 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}

          ></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
