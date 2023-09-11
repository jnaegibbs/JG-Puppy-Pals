import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'
function App() {
  const [count, setCount] = useState(0)

const [puppies, setPuppies] = useState(puppyList);
console.log(puppies);
const [featPupId, setFeatPupId] = useState(null)
const featuredPup = puppies.find((pup)=> pup.id === featPupId)
return (
      <div className = "App">
        <h2> Puppy Pals</h2>
          {puppies.map((puppy) => {
            return (
            <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>);
            }
          )}
        {featPupId && (
          <div>
            <h3>{featuredPup.name}</h3>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
  );
}
export default App
