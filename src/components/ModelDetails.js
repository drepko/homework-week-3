import * as React from 'react'

export default function Modeldetails(props){
    const detail = props.detail
   
    return(
    <div>
            {detail.map(one => 
           <ul>
            <li>{one.manufacturer}</li>
            <li>{one.year}</li>
            <li>{one.origin}</li>
           </ul>
           )}
    </div>

    )
}




