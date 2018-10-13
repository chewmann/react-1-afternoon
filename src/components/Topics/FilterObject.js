import React, { Component} from 'react';


class FilterObject extends Component{
  constructor(){
    super();

    this.state ={
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput: "",
      filteredArray: []

    }
  }

  updateUserInput(e){
    this.setState ({
      userInput : e.target.value
    })
  }

  // filterObjects(userInput){
    
  // }

    render() {
      return(
        <div className="puzzleBox filterObjectPB">
          <h4>Filter Town</h4>
          <span className="puzzleText"></span>
          <input className="inputLine" onChange={(e) => this.updateUserInput(e)}></input>
          <button className="confirmationButton" >Filter</button>
          <span className="resultsBox filterObjectRB"></span>
        </div>
      )
    }
  }

  export default FilterObject;