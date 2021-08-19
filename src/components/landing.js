import pic2 from '../pics/main.jpg';
import { Link } from "react-router-dom"; 
import Button from '@material-ui/core/Button';

const Landing = () => {
    return (
        <div className="landing">
        <div className="part1">
            <img src = {pic2} alt = 'pic2' className="main"></img>
            <em className="emp">Test yourself with these questions!</em>
            <Link to='/questions'>
            <Button variant ="contained" color="primary" className="button1">Let's go!</Button>
            </Link>

        </div>
        
        </div>

    );
}

export default Landing;