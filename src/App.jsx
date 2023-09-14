import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import "./index.scss"
import data from "./data"


export default function App() {



	return (
		<div>
			<Navbar />
			{/* <Hero /> */}
			<section className='cards'>
				{data.map(card => <Card {...card} key={card.id} />)}
			</section>
		</div >
	)
}