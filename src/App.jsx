
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  // console.log(loadedCoffee)


  return (
    <>

      <h1 className='text-6xl text-purple-700' >Hit Hot Coffee: {coffees.length}</h1>
      <div  className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
