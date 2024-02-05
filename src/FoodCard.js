function FoodCard({card,onClick}) {
    return (
      <div className="container">
        <div className="card" onClick={() => onClick(card)} >
          <img src={card.image} alt={card.foodName} />
          <h3>{card.foodName}</h3>
          <h2>Price: ${card.price}</h2>
          <p>{card.discription}</p>
        </div>
      </div>
    );
  }
  
  export default FoodCard;