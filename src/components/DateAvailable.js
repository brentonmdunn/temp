import "../App.css"

function DateAvailable(props) {
    return (
        <label className="text-col">
              <h3>
                Date Available
                <span style={{ color: props.requiredFieldColor }}>*</span>
              </h3>{" "}
              <div>
                <label>
                  <input
                    type="date"
                    name="No"
                    value={props.dateAvailable === "N/A" ? "" : props.dateAvailable}
                    onChange={props.handleDateAvailable}
                  />
                </label>
              </div>
            </label>
    )
}

export default DateAvailable