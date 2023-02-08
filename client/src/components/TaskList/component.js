import TaskSummary from "./TaskSummary";
import "./styles/styles.css";

const TaskList = () => {

    //fetch tasks from DB and store in state
    //map through and render tasksummary
    //if no tasks, render "No tasks here! Press the '+' button to add tasks

    return (
        <div className = "taskList">
            <TaskSummary title="Prepare notes" tags="presentation" dueDate="Jan 31" />
            <TaskSummary title="Schedule meeting" tags="meeting" dueDate="Feb 2" />
        </div>
    )
}

export default TaskList;