import * as React from 'react'

export default function Modeldetails(props) {

    const detail = props.detail
    return (
        <div>
            {detail.map(one =>
                <ul key={one.name}>
                    <li>{`Name: ${one.name}`}</li>
                    <li>{`Manufacturer: ${one.manufacturer}`}</li>
                    <li>{`Year: ${one.year}`}</li>
                    <li>{`Origin: ${one.origin}`}</li>
                </ul>
            )}
        </div>

    )
}




