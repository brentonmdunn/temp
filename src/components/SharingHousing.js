import "../App.css"

function SharingHousing(props) {
    return (<div className="margin32">
    <label>
      <h3>
        Sharing house acceptable?{" "}
        <span style={{ color: props.requiredFieldColor }}>*</span>
      </h3>
      <div>
        <label>
          <input
            type="radio"
            name="sharingHousingYes"
            value="Yes"
            checked={props.sharingHousing === "Yes"}
            onChange={props.handleSharingHousing}
          />
          Yes
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="sharingHousingNo"
            value="No"
            checked={props.sharingHousing === "No"}
            onChange={props.handleSharingHousing}
          />
          No
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="sharingHousingUncertain"
            value="Uncertain"
            checked={props.sharingHousing === "Uncertain"}
            onChange={props.handleSharingHousing}
          />
          Uncertain
        </label>
        <br />
      </div>
    </label>
  </div>)

}

export default SharingHousing