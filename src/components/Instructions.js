import React from "react"

class Instructions extends React.Component{
    render() {
        return(
            <div id="instruct" className="popup" style={{position: "absolute", zIndex: 3, backgroundColor: "white", display: "none"}}>
                <p className="instructP">This game will challenge your memory. Everytime the images shuffle you will click an image you HAVE NOT clicked yet. If you get all 12 you win!</p>
            </div>
        )
    }
}

export default Instructions