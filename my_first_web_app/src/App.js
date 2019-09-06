import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

 /* state = {
  persons: [
         {name:'shanu', age: 22},
         {name:'puru',  age: 23},
         {name:'sumit', age: 22}
         ], 
         otherState: 'Some Other Value'
        };

    switchNameHandler = (newName) => {
     // console.log('was clicked!');
     // this.state.persons[0].name = 'shanukumar';

      this.setState({
      persons: [
      {name:newName, age: 22},
      {name:'puruChandra',  age: 24},
      {name:'sumit', age: 25}
        ]
      });
     };
  

      nameChangedHandler = (event) => {
        this.setState({
          persons: [
          {name:'shanu', age: 22},
          {name: event.target.value,  age: 24},
          {name:'sumit', age: 25}
            ]
           });
          };


        render () {
          const style = {
            backgroungColor: 'blue',
            font: 'inherit',
            border: '2px solid blue',
            padding: '6px',
            cursor: 'pointer'
          };

            return (
            <div className="App">
            <h1>React!!</h1>
            <h4>Developing a WebApplication!!</h4>
            <p>Prakat Solutions!!</p>
            <button style={style}  onClick={() => this.switchNameHandler('ShanuKumar!!')}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Shanu!')} changed={this.nameChangedHandler}> My Hobbies is: singing</Person>    
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
          );
          }
        } */
      
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Developing a WebApplication!'));
              state = {
                username: 'kumarshanu!'
              }

              usernameChangedHandler = (event) => {
                this.setState({username: event.target.value})
              }

          render() {
            return(

              <div className="App">
                <ol>
                <li>Create two commt components: UserInput and UserOutput</li>
                <li>UserInput should hold an input element, UserOutput two paragraphs</li>
                <li>Output multiple UserOutput components in the App Component (any paragraph texts of your choice)</li>
                <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
                <li>Add state to the App component (=> the UserName) and Pass the username to the UserOutput component</li>
                <li>Add a method to manipulate the state (=> an event-handler method)</li>
                <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
                <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
                <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                <li>Add Styling of your choice to your components/elements in the components - both with inline styles and stylesheets</li>
              </ol>
              <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}></UserInput>
              <UserOutput userName={this.state.username}></UserOutput>
              <UserOutput userName={this.state.username}></UserOutput>
              <UserOutput userName="Mehta"></UserOutput>

              </div>
              );
          }
}

export default App;
