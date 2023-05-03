import React,{useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {

    const [courseGoals, setCourseGoals] = useState([{'id': 'cg1', 'text':"ReactJs - frontend Course"},
    {'id': 'cg2', 'text':"NodeJs - Backend Course"},
    {'id': 'cg3', 'text':"MongoDB - DATABASE"},
    {'id': 'cg4', 'text':"Connection - frondend and backend"}]);

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    //helps to render the previous course goals first and then adds the new goal.
    setCourseGoals(prevCourseGoals => 
       prevCourseGoals.concat(newGoal)
    )
  }

  return (
    <div>
      <h1 className="header-app"> My Course Goals</h1>
      <NewGoal onAddGoal = {addNewGoalHandler}/>        
      <GoalList goals={courseGoals}/>
    </div>
    );
}



export default App;


//props and attributes (app.js and GoalList) - (parent to child class)
//props and attributes (NewGoal and app.js) - (child to parent)
//USESTATE - Defines a state(data and method). whnever there is a change in the state it triggers the methods and re renders the components
/* Whenever a new goal is added to the array , it does not appear on the main page as the react does not
 re-render the component.
so the react needs to tell whenever there is an update made in the array it needs to re render its components.**/



// fejnrfbglgn

