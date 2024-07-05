import { FaHome } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import  "./index.css"

const Dashboard = () => (
    <div className="dashboard-container">
        <div>
            <div className="home-dashboard">
                <FaHome className="dashboard-icon" />
                <p className="dashboard-icon-label">Home</p>
            </div>
            <div className="home-dashboard">
                <PiDotsNineBold className="dashboard-icon" />
                <p className="dashboard-icon-label">Dashboard</p>
            </div>
        </div>
        <div className="db-container">
            <p className="dashboard-heading">Services</p>
            <Link to="/" className="link-element">
              <button type="button" className="dashboard-btn">
                Airports
              </button>
            </Link>
            <Link to="/videos" className="link-element">
              <button type="button" className="dashboard-btn">
                Vidoes
              </button>
            </Link>
        </div>
        <div className="db-container">
            <p className="dashboard-heading">Others</p>
            <p className="dashboard-label">list 1</p>
            <p className="dashboard-label">list 2</p>
            <p className="dashboard-label">list 3</p>
        </div>
    </div>
)

export default Dashboard 