import "../App.css"

function ThirdPartyPayment(props) {
    return (<div className="margin32"><h3>
        3rd party payment accepting{" "}
        <span style={{ color: props.requiredFieldColor }}>*</span>
      </h3>{" "}
      <div>
        <label>
          <input
            type="radio"
            name="Yes"
            value="Yes"
            checked={props.thirdPartyPayment === true}
            onChange={props.handleThirdPartyPayment}
          />
          Yes
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="No"
            value="No"
            checked={props.thirdPartyPayment === false}
            onChange={props.handleThirdPartyPayment}
          />
          No
        </label>
      </div></div>)
}

export default ThirdPartyPayment