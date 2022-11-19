import React from "react";
import "../resourses/styles/index.css";

const Home = function (props) {
    console.log(props);
    return (
        <div>
             <p>{`${props.name} - ${props.surname}`}</p>
        </div>
    )
    
}

export default Home;