import { useNavigate } from "react-router-dom";
import "./styles/styles.css";

const AddTaskButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/task/new");
    }

    return (
        <button className="addTaskButton"
                onClick={handleClick}
        >+</button>
    )
}

export default AddTaskButton;