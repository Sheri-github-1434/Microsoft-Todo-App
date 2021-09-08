import React, {FC} from "react"
import { FcPlanner } from "react-icons/fc"


export const AssignedToYou: FC = () => {
         return (
             <>
        <div className="assignedtoyou">Assigned to you</div>;
        <FcPlanner style={{width: "100vh", height: "50vh", marginLeft: "350px"}} />
           <h1 style={{fontFamily: "sans-serif", fontWeight: "lighter", color:"grey", margin: "0 auto", textAlign: "center"}}>Tasks Assigned Show up here!</h1>
        </>
         )
     };