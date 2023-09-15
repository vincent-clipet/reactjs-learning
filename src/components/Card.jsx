export default function Card({ id, title, description, price, coverImg, stats, location, openSpots }) {
	return (
		<section className="card">
			<div className="card-status">
				<div className="card-status-background">
					<p className="card-status-text">{id}</p>
				</div>
				<img className="card-image" src={`/public/images/${coverImg}`}></img>
			</div>
			<section className="card-rating">
				<img className="card-rating-star" src="/public/images/star.png"></img>
				<span className="card-rating-rating"> {stats.rating} </span>
				<span className="card-rating-votes"> ({stats.reviewCount}) </span>
				<span className="card-rating-separator"> - </span>
				<span className="card-rating-location"> {location} </span>
			</section>
			<p className="card-title">{title}</p>
			<p className="card-price">
				<strong>From ${price}</strong> / person
			</p>
		</section>
	)
}