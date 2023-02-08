import AppContainer from "../../components/AppContainer/component";
import Header from "../../components/Header/component";
import Menu from "../../components/Header/Menu/component";
import SortButton from "../../components/Header/SortButton/component";
import TaskList from "../../components/TaskList/component";
import Footer from "../../components/Footer/component";
import "./styles/styles.css";
//fetch here for tasklist?? 

const Main = () => {
    return (
        <AppContainer>
            <Header leftItem={<Menu />}
                    centerItem={<h1>Plan Mode</h1>}
                    rightItem={<SortButton />}
            />
            <div className="body">
                <TaskList />
                <Footer />
            </div>
        </AppContainer>
    )
}

export default Main;