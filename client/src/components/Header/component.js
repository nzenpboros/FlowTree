import "./styles/styles.css";

const Header = ({leftItem, centerItem, rightItem}) => {
    return (
        <div className="header">
            <div>{leftItem}</div>
            <div className="center">{centerItem}</div>
            <div>{rightItem}</div>
        </div>
    )
}

export default Header;