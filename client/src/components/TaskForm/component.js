import DatePicker from "react-datepicker";
import TaskFactorLevel from "./TaskFactorLevel/component";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/styles.css";

const handleChange = () => {

}

const handleSubmit = (e) => {
    e.preventDefault();
    //set state for status
}

const handleHideDetails = () => {

}

//install date dropdown
const TaskForm = () => {
    return (
        <form className="taskForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="formBody">
                <div className="taskTitleSection">
                    <input className="item" type="text" name="taskName" placeholder="Task" onChange={handleChange} />
                    <button className="item" full={false} onclick={handleSubmit}>Update</button>
                </div> 
                <button className="item hideButton" onChange={handleHideDetails}>Hide Details</button>
                <div className="detailsSection">
                    <TaskFactorLevel className="item" name="Impact" onChange={handleChange}/>
                    <TaskFactorLevel className="item" name="Effort" onChange={handleChange}/>
                    <TaskFactorLevel className="item" name="Urgency" onChange={handleChange}/>
                    <input className="item" type="text" name="tags" placeholder="Tags" onChange={handleChange} />
                    <label className="item">Due Date
                        <DatePicker
                            selected={new Date()} // set to whatever date is in state
                            onSelect={(date) => handleChange} 
                            onChange={(date) => handleChange} 
                            showTimeSelect
                            dateFormat="Pp"
                        />
                    </label>
                    <div className="item">
                        <label>Notes
                            <textarea className="notes" name="notes" rows="5" onChange={handleChange} />
                        </label>
                    </div>
                    <button className="item" full={true} onclick={handleSubmit}>Update</button>
                </div>
            </div>
        </form>
    )
        
}

export default TaskForm;