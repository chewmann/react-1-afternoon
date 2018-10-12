import React, { Component} from 'react';


class EvenAndOdd extends Component{
  constructor(){
    super();
    
    this.state ={
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
  }

  updateUserInput(e){
    this.setState ({
      userInput : e.target.value
    })
    
  }

  returnEvenAndOdd(userInput){
    var arr = userInput.split(',');
    var evens = [];
    var odds =[];

    for (var i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }

    this.setState({
      evenArray: evens,
      oddArray: odds
    });
    console.log(this.evenArray);
    console.log(this.oddArray);
    
  }



    render() {
      return(
        <div className="puzzleBox evenAndOddPB">
          <h4>Even Stevens</h4>
          <input className="inputLine" onChange={(e) => this.updateUserInput(e)}>
          </input>
          <button className="confirmationButton" onClick={()=> {this.returnEvenAndOdd(this.state.userInput)}}>
          Split
          </button>
          <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
          <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
        </div>
      )
    }
  }

  export default EvenAndOdd;