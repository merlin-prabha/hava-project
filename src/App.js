import {Component} from "react"
import {Switch, Route} from "react-router-dom"
import './App.css';
import Airports from './components/Airports'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Airports} />
      </Switch>
    )
  }
}

export default App;
