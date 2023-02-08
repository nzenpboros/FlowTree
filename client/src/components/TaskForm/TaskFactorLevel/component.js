// Task factor level slider component
import "./styles/styles.css";

const TaskFactorLevel = ({name, onChange}) => {
    return (
        <div className="factor">
            <label className="label">{name}</label>
                <select>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3" selected="selected">M</option>
                    <option value="4">L</option>
                    <option value="5">XL</option>
                </select>
        </div>
    )
}

export default TaskFactorLevel;