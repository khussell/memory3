import React from "react"




class Character extends React.Component{
    state={
      clicked: false
    }

    render() {
        return(
            <div className="col-4 col-sm-3 col-md-3  col-lg-3 ">
              <img  className="images" alt="Lilu" onClick={() => this.props.handleClick(this.props.id)} style={{margin: 20,
            backgroundColor: "white", padding: 5}} width="70%"  src={this.props.image}/>
            </div>
        )
    }
}


export default Character