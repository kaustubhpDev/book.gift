import "./Hero.css";
import hero from "../../assets/illustration_hero.svg"

function Hero(){
    return(
      <div className = "hero">
        <div className="hero-text-content">
          <h1 className="text-content">Let your audience fill your bookshelves.</h1>
          <h3 className="text-content">Book.Gift makes supporting easy and fun.</h3>
          <h3 className="text-content">In just a couple of taps, your fans can buy you a book and leave a message.</h3>
        </div>
        <div className="illustration-hero ">
            <img src={hero} className="illustration-hero-image" alt= "illustration_hero"/>
        </div>
      </div>
    )
}

export default Hero;