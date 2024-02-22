import "../App.css"

function HousingAuthority(props) {
    return (
        <div className="margin32">
            <label>
              <h3>
                Select housing authority{" "}
                <span style={{ color: props.requiredFieldColor }}>*</span>
              </h3>
              <div>
                <label>
                  <input
                    type="radio"
                    name="LACDA"
                    value="LACDA"
                    checked={props.housingAuthority === "LACDA"}
                    onChange={props.handleHousingAuthority}
                  />
                  LACDA
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="HACLA"
                    value="HACLA"
                    checked={props.housingAuthority === "HACLA"}
                    onChange={props.handleHousingAuthority}
                  />
                  HACLA
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="Other"
                    value="Other"
                    checked={props.housingAuthority === "Other"}
                    onChange={props.handleHousingAuthority}
                  />
                  Other
                </label>
              </div>
            </label>
          </div>
    )
}

export default HousingAuthority