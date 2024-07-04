import { FaHome } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";

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
        <div>
            <p className="dashboard-heading">Services</p>
            <p className="dashboard-label">Airports</p>
            <p className="dashboard-label">Videos</p>
        </div>
        <div>
            <p className="dashboard-heading">Others</p>
            <p className="dashboard-label">list 1</p>
            <p className="dashboard-label">list 2</p>
            <p className="dashboard-label">list 3</p>
        </div>
    </div>
)

export default Dashboard 