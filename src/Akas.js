import { useEffect, useState } from 'react'

function Akas({id}) {
    const [displayAkas, setDisplayAkas] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}/akas`)
            .then(response => response.json())
            .then(data => setDisplayAkas(data))
        },[id])
        return (
            <>
                {
                    displayAkas.map((d) =>
                        <p key={d.name}>{d.name} (in {d.country.name} )</p>
                    )
                }
            </>
        )
    
}

export default Akas


