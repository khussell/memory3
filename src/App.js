import React from 'react';
import Header from "./components/Header"
import Game from "./components/Game"
import Footer from "./components/Footer"
import Instructions from "./components/Instructions"
import Info from "./components/Info"
import characters from "./pics.json"

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0
  }

  //when a picture is clicked that pic property of clicked will change to true unless it is already true
  //if it was false a point will be added
  //if it was true the player will lose and score will be compared to high score
  //function will be called to show info to player about win/lose/high score
  handleClick = (id) => {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].id === id) {
        if (characters[i].clicked === false) {
          characters[i].clicked = true
          if (this.state.score < 12) {
            this.setState({ score: this.state.score + 1 })
            console.log(this.state.score)
            if (this.state.score === 11) {
              this.showInfo("win")
            }
          }
        } else {
          if (this.state.score > this.state.highScore) {
            this.setState({ highScore: this.state.score })
            this.showInfo("highScore")
          } else {
            this.showInfo("lost")
          }
          this.setState({ score: 0 })
          for (let i = 0; i < characters.length; i++) {
            characters[i].clicked = false
          }

        }
      }
    }
  }

  //will show player that they won/lost/high score
  showInfo = (whatHappened) => {
    console.log("hi")
    const info = document.querySelector("#info")
    const infoP = document.querySelector("#infoP")
    info.style.display = "block"


    const addOrRemove = () => {
      if (info.style.display === "block") {
        info.style.display = "none"
        document.removeEventListener("click", addOrRemove)
      }
    }


    switch (whatHappened) {
      case "win":
        infoP.innerHTML = "You WON!!!";
        document.addEventListener("click", addOrRemove)
        break;
      case "lost":
        infoP.innerHTML = "You Lost!!!";
        document.addEventListener("click", addOrRemove)
        break;
      case "highScore":
        infoP.innerHTML = "You lost, but made a new high score!!!";
        document.addEventListener("click", addOrRemove)
        break;
      default:
        return console.log("hi")
    }

  }



//emptying the div when a pic is clicked
  emptyDiv = () => {
    let emptyThisDiv = document.getElementsByClassName("needsEmpty")
    emptyThisDiv.innerHTML = ""
  }

  render() {

    this.emptyDiv()

    //shuffling characters array
    const shuffle = array => {

      let arrayLength = array.length;
      let temporaryValue;
      let randomIndex;

    
      while (arrayLength > 0) {
        //Finding random index
        randomIndex = Math.floor(Math.random() * arrayLength);
        arrayLength -= 1;

      //switching things around
        temporaryValue = array[arrayLength];
        array[arrayLength] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;

    };

    var shuffled = shuffle(characters)


    return (
      <div>
        <Header score={this.state.score} highScore={this.state.highScore} />
        <Instructions />
        <Info />
        <Game score={this.state.score} highScore={this.state.score} handleClick={this.handleClick} characters={shuffled} />
        <Footer />
      </div>
    );
  }
}

export default App;
