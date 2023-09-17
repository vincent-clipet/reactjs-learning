import { useState } from 'react'
import Die from './components/Die'



function App() {

  function getRandomDieValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const dies = [
    { id: 1, value: getRandomDieValue() },
    { id: 2, value: getRandomDieValue() },
    { id: 3, value: getRandomDieValue() },
    { id: 4, value: getRandomDieValue() },
    { id: 5, value: getRandomDieValue() },
    { id: 6, value: getRandomDieValue() },
    { id: 7, value: getRandomDieValue() },
    { id: 8, value: getRandomDieValue() },
    { id: 9, value: getRandomDieValue() },
    { id: 10, value: getRandomDieValue() }
  ]





  return (
    <main>
      <div className='board'>
        <div className='game'>
          <section className='dies'>
            {
              dies.map((die) =>
                <Die
                  key={die.id}
                  id={die.id}
                  value={die.value}
                />
              )
            }
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
