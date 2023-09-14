/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
	- image
	- star icon (star.png), rating, and review count
	- title
	- cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/


export default function Card() {
	return (
		<section className="card">
			<div className="card-status">
				<div className="card-status-background">
					<p className="card-status-text">SOLD OUT</p>
				</div>
				<img className="card-image" src="/src/images/katie-zaferes.png"></img>
			</div>
			<section className="card-rating">
				<img className="card-rating-star" src="/src/images/star.png"></img>
				<span className="card-rating-rating">5.0</span>
				<span className="card-rating-votes">&nbsp;(6)</span>
				<span className="card-rating-separator">&nbsp;-</span>
				<span className="card-rating-country">&nbsp;USA</span>
			</section>
			<p className="card-title">Life lessons with Katie Zaferes</p>
			<p className="card-price">
				<strong>From $136</strong> / person
			</p>
		</section>
	)
}