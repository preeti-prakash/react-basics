import React from 'react';
import "./GoalList.css";

const goalList = (props) => {
    return (
        <ul className = "goal-list">{
            props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>
            })
         } </ul>
    )
}

export default goalList;




//props - it is used to transfer data from one component to the other 
/* Current EXAMPLE - The objects in the array(courseGoals) created in the file "app.js" are retrieved from the attribute(goals) mentioned
 within the GoalList component in the "app.js" file. 
 <GoalList goals={courseGoals} /> - 
 the above attribute holds the data of the array
 In the goallist component "props" is used to use the attribute and get the data of the array.
 **/
