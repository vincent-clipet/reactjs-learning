import { useState, useEffect } from 'react'
import Die from './components/Die'
import RollButton from './components/RollButton'
import Confetti from 'react-confetti'



function App() {

  let idGen = 1
  const [dies, setDies] = useState(initializeDies())
  const [tenzies, setTenzies] = useState(false)



  const checkIfGameWon = useEffect(() => {
    let previousValue = null
    const allHeld = dies.every(die => die.isHeld)
    const allSameValue = dies.every(die => die.value === dies[0].value)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("WIN")
    }
  }, [dies])



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

  function handleNewGame(event) {
    setDies(initializeDies())
    setTenzies(false)
  }



  return (
    <main>
      <div className='board'>
        <div className='game'>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
          <RollButton
            handleReroll={handleReroll}
            handleNewGame={handleNewGame}
            tenzies={tenzies}
          />
          {tenzies && <Confetti />}
        </div>
      </div>
    </main>
  )
}

export default App
