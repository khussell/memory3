import React from "react"
import Character from "./Character"



class Game extends React.Component {
   

    render() {
       

        return (
            <div className="container needsEmpty">
                <div style={{ marginTop: 60 }} className="row">
                    {this.props.characters.map(char => {
                        return (<Character handleClick={this.props.handleClick} key={char.id} id={char.id} image={char.image} clicked={char.clicked} />)
                    })}
                </div>
            </div>
        )
    }
}

export default Game