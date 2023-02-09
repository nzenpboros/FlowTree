// Task factor level slider component
import { useSelector, useDispatch } from "react-redux";
import { updateTaskDetails, getTask } from "../../../reducers/taskFormSlice";
import "./styles/styles.css";

const TaskFactorLevel = ({name}) => {
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(updateTaskDetails({[name]: e.target.value}));
    }

    return (
        <div className="factor">
            <label className="label">{name}</label>
                <select value={useSelector(getTask)[name]} onChange={handleChange}>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3">M</option>
                    <option value="4">L</option>
                    <option value="5">XL</option>
                </select>
        </div>
    )
}

export default TaskFactorLevel;