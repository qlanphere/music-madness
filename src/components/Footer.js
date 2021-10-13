import React from 'react'
import Button from './Button'
import { useState } from 'react'



const Footer = () => {

    const [text, setTextContent] = useState('')
    const useTextContent = (e) => {
        e.preventDefault()
        setTextContent(text => text = `Your song request of ${document.getElementById('songRequest').value} has been submitted`)
    }
    return (
        <div>
            <form className = "footer-margin" >
                <label style = {{display:'block'}}>Song Request</label>
                <input style = {{marginRight:'10px'}} type="text" id="songRequest" placeholder="song name"></input>
                <Button text="submit" onClick={useTextContent} />
                <span  style = {{display: 'block'}} id="form">{text}</span>
            </form>
            
        </div>
    )
}

export default Footer
