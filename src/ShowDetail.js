import {useState} from 'react'
import Akas from './Akas'

function ShowDetail({show}){
    const [displayDetails, setDisplayDetails] = useState(false)
    const [displayAkas, setDisplayAkas]= useState(false)

    return(
        <>
        <h3 onClick={() => setDisplayDetails(!displayDetails)}>{show.name}</h3>
        {displayDetails ? <p> {show.genre} / {show.status} </p> : " "}
        <img src={show.image.medium} alt=" asddasd" onClick={() => setDisplayAkas(!displayAkas)} />
        {displayAkas ? <Akas id={show.id} /> : " "}
        </>
    )
}

export default ShowDetail




























// // this component is meant to deal with the the onClick events that go from displaying content to emptying  the value and displaying nothing which is represented with an empty string

// import React, {useState} from 'react'
// import Akas from './Akas'

// function ShowDetail ({shows}){
//     const [displayDetails, setDisplayDetails] = useState(false)
//     const [displayAkas, setDisplayAkas] = useState(false)

//     return(
//         //create a header of the show's title and when clicked it will switch the value of displayDetails back and forth. so first we need a onClick to that uses state function with the state variable cpontaining a bang operator to switch the boolean value bwetween true and false. We then use a ternary to say if the state is displayed, then we will show the details of show, otherwise an empty string. 
//         <>
//         <h3 onClick={() => setDisplayDetails(!displayDetails)}>{shows.name}</h3>
//         { displayDetails ? <p> {shows.genres} / {shows.status} </p> : " "}
//         <img src={shows.image.medium} alt="pic" onClick={() => setDisplayAkas(!displayAkas)}></img>
//         { displayAkas ? <Akas id={shows.id} /> : " "}
//         </>
//     )
// }

// export default ShowDetail