import "../App.css";

function Textbox(props) {
  return (
    <div className="text-col">
      {props.elementName && props.requiredFieldColor ? (
        <h3 className="element-header">
          {props.elementName}{" "}
          <span style={{ color: props.requiredFieldColor }}>*</span>
        </h3>
      ) : (
        <h3>{props.elementName}</h3>
      )}

      {!props.elementName && <h3 className="element-header">&nbsp;</h3>}

      <div>
        <label>
          {!props.placeholder && (
            <input
              className="textbox"
              type="text"
              name={props.name}
              value={props.value}
              onChange={props.handler}
            />
          )}
          {props.placeholder && (
            <input
              className="textbox"
              type="text"
              placeholder={props.placeholder}
              name={props.name}
              value={props.value}
              onChange={props.handler}
            />
          )}
        </label>
      </div>
    </div>
  );
}
export default Textbox;
