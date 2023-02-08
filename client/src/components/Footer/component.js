import AddTaskButton from "./AddTaskButton/component";
import DayDisplay from "./DayDisplay/component";
import "./styles/styles.css";

const Footer = () => {
    return (
        <div className="footer">
            <DayDisplay />
            <div className="actionBar">
                <div className="mode">Focus Mode</div>
                <AddTaskButton />
            </div>
        </div>
    )
}

export default Footer;