import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/img-7.jpg"
              text="Go Fast and Furious along the AutoBahn"
              label="Adrenaline"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Take a Tour of WestfalonStadion, Home of Borussia Dortmund FC"
              label="Football"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/img-6.jpg"
              text="Experience the City of Cologne and its majestic Cathedrals"
              label="Cologne"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Take a tour of the gorgeous Berliner Dom"
              label="Berliner Dom"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Check out Rural German Homes"
              label="Local"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
