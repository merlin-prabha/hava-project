import {Component} from "react"
import {Switch, Route} from "react-router-dom"
import './App.css';
import Airports from './components/Airports';
import Videos from './components/Videos'
import Details from './components/Details'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route extact path="/" component={Details} />
        <Route extact path="/videos" component={Videos} />
        <Route exact path="/airport/:id" component={Details} />
      </Switch>
    )
  }
}

export default App;
