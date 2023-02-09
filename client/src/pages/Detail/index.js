import { Link } from "react-router-dom";
import AppContainer from "../../components/AppContainer/component";
import Header from "../../components/Header/component";
import TaskForm from "../../components/TaskForm/component";
import { loadTaskDetails, resetForm } from "../../reducers/taskFormSlice";

const Detail = () => {
    return (
        <AppContainer>
            <Header 
                leftItem={<Link to={"/"}>cancel</Link>}
                centerItem={<h1>task</h1>} 
                rightItem="delete"/> 
            <TaskForm />
        </AppContainer>
    )
}

export default Detail;