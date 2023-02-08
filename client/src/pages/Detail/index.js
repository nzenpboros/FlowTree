import AppContainer from "../../components/AppContainer/component";
import Header from "../../components/Header/component";
import TaskForm from "../../components/TaskForm/component";

const Detail = () => {
    return (
        <AppContainer>
            <Header leftItem="cancel" centerItem={<h1>task</h1>} rightItem="delete"/> 
            <TaskForm />
        </AppContainer>
    )
}

export default Detail;