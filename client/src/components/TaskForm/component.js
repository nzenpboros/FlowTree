import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import TaskFactorLevel from "./TaskFactorLevel/component";
import { loadTaskDetails, updateTaskDetails, getTask } from "../../reducers/taskFormSlice";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/styles.css";

const TaskForm = () => {
    const { taskId } = useParams(); 

    console.log("current form state", useSelector(getTask));

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateTaskDetails({[e.target.name]: e.target.value}));
    }

    const handleDateChange = (date) => {
        dispatch(updateTaskDetails({due: date.toString()}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //set state for submit status via reducer

        //form validation

        //set task id 
    }

    const handleHideDetails = () => {

    }


    return (
        <form className="taskForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="formBody">
                <div className="taskTitleSection">
                    <input className="item" type="text" name="taskName" placeholder="Task" value={useSelector(getTask).taskName} onChange={handleChange} />
                    <button className="item" full="false" onClick={handleSubmit}>Update</button>
                </div> 
                <button className="item hideButton" onChange={handleHideDetails}>Hide Details</button>
                <div className="detailsSection">
                    <TaskFactorLevel className="item" name="impact" />
                    <TaskFactorLevel className="item" name="effort" />
                    <TaskFactorLevel className="item" name="urgency" />
                    <input className="item" type="text" name="tags" placeholder="Tags" value={useSelector(getTask).tags} onChange={handleChange} />
                    <label className="item">Due Date
                        <DatePicker 
                            selected={new Date()} //need to set this to reflect date in state new Date(useSelector(getTask)) results in error
                            onSelect={(date) => handleDateChange(date)} 
                            onChange={(date) => handleDateChange(date)} 
                            showTimeSelect
                            dateFormat="Pp"
                        />
                    </label>
                    <div className="item">
                        <label>Notes
                            <textarea className="notes" name="notes" rows="5" value={useSelector(getTask).notes} onChange={handleChange} />
                        </label>
                    </div>
                    <button className="item" full="true" onClick={handleSubmit}>Update</button>
                </div>
            </div>
        </form>
    )
        
}

export default TaskForm;