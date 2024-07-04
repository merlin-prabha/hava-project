import {Component} from "react"

import "./index.css"
import Header from "../Header"
import Dashboard from "../Dashboard";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="home-container">
                    <Dashboard />
                </div>
            </div>
        )
    }
}

export default Home 