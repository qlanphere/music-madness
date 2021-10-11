import React from 'react'
import { useState } from 'react'

const Like = (props) => {

    const [like, setLike] = useState(true)

    const likeit = () => setLike(like =>  !like)
  
    const liked = like ? '👎':'👍'

    return (
        
            <tr className = {props.color}>
                <td>{props.song}</td>
                <td>{props.artist}</td>
                <td>{props.link}</td>
                <td><span data-testid = "span" onClick = {likeit}>{liked}</span></td>
            </tr>
    )
}

export default Like
