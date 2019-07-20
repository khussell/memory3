import React from "react"

class Info extends React.Component{
    render() {
        return (
            <div id="info" className="popup row align-items-center" style={{position: "absolute", zIndex: 3, backgroundColor: "white", display: "none"}}>
                <div className="col">
                <p id="infoP" ></p>
                </div>
            </div>
        )
    }
}

export default Info