import React from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
// import {robotdata} from './robotdata';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
constructor(){
  super()
  this.state = {
    robotdata:[],
    searchfield:''
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robotdata: users}))
  // this.setState({robotdata: robotdata})
}
onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
  // console.log(event.target.value);
  
}
  render(){
    const {robotdata, searchfield} =this.state;
    const filteredRobotdata = robotdata.filter(robotdata =>{
      return robotdata.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    // console.log(filteredRobotdata);
    return !robotdata.length === 0 ?
      <h1 >Loading</h1> :
    (
    <div className="tc">
      <h1> RobotFriend</h1>
      <Searchbox searchChange={this.onSearchChange}/>
      <Scroll>
      <ErrorBoundary>
      <Cardlist robotdata={filteredRobotdata}/>
      </ErrorBoundary>
      </Scroll>
    </div>
  )
  
}
}

export default App;
