import "./styles/styles.css";

const AppContainer = ({children}) => {
    return (
        <div className="container">
            <div className="appContainer">{children}</div>
        </div>
    )
}

export default AppContainer;