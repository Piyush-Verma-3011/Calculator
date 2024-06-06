import React from 'react'
import { add, sub, divide, multi }from './calc.js';
const App = () => {
  return (
    <>
      <ul>
      <li>sum of numbers is={add(40,2)}</li>
      <li>sub of numbers is={sub(40,30)}</li>
      <li>division of numbers is={divide(40,12)}</li>
      <li>multiplication of numbers is={multi(40,3)}</li>
    </ul>
    </>
  )
}

export default App;