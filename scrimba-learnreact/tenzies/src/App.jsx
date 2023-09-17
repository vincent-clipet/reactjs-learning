import { useState } from 'react'
import Die from './components/Die'
import RollButton from './components/RollButton'



function App() {

  let idGen = 1
  const [dies, setDies] = useState(initializeDies())



  function initializeDies() {
    const newDies = []
    for (let i = 0; i < 10; i++) {
      newDies.push({
        id: idGen++,
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return newDies
  }

  function handleReroll(event) {
    const updatedDies = [...dies]
    updatedDies.forEach((die) => {
      die.value = die.isHeld ? die.value : Math.ceil(Math.random() * 6)
    })
    setDies(updatedDies)
  }

  function handleHold(event, id) {
    const updatedDies = [...dies]
    updatedDies.forEach((die) => {
      die.isHeld = die.id === id ? !die.isHeld : die.isHeld
    })
    setDies(updatedDies)
  }



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
                  isHeld={die.isHeld}
                  handleHold={handleHold}
                />
              )
            }
          </section>
          <RollButton handleReroll={handleReroll} />
        </div>
      </div>
    </main>
  )
}

export default App
