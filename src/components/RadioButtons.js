import "../App.css";
function RadioButtons(props) {
    return (
        <div>
            <h3>{props.elementName}</h3>
          {props.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                value={option}
                checked={props.getter === option}
                onChange={props.handler}
              />
              {option}
            </label>
          ))}
        </div>
      );
}

export default RadioButtons