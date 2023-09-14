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