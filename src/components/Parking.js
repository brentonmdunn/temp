import "../App.css"

function Parking(props) {
    return (
        <div className="margin32">
            <label>
              <h3>
                Parking <span style={{ color: props.requiredFieldColor }}>*</span>
              </h3>
              <div className="radio-checkbox-container">
                <div className="radio-checkbox-col">
                  <label>
                    <input
                      type="checkbox"
                      name="Garage with assigned spots"
                      value="Garage with assigned spots"
                      checked={props.parking.includes("Garage with assigned spots")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "Garage with assigned spots",
                          props.parking,
                          props.setParking,
                        )
                      }
                    />
                    Garage with assigned spots
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="Attached to house"
                      value="Attached to house"
                      checked={props.parking.includes("Attached to house")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "Attached to house",
                          props.parking,
                          props.setParking,
                        )
                      }
                    />
                    Attached to house{" "}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="Gated"
                      value="Gated"
                      checked={props.parking.includes("Gated")}
                      onChange={() =>
                        props.handleCheckBoxNA("Gated", props.parking, props.setParking)
                      }
                    />
                    Gated{" "}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="Covered"
                      value="Covered"
                      checked={props.parking.includes("Covered")}
                      onChange={() =>
                        props.handleCheckBoxNA("Covered", props.parking, props.setParking)
                      }
                    />
                    Covered
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="Underground"
                      value="Underground"
                      checked={props.parking.includes("Underground")}
                      onChange={() =>
                        props.handleCheckBoxNA("Underground", props.parking, props.setParking)
                      }
                    />
                    Underground{" "}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="No parking on site"
                      value="No parking on site"
                      checked={props.parking.includes("No parking on site")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "No parking on site",
                          props.parking,
                          props.setParking,
                        )
                      }
                    />
                    No parking on site
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="Street parking"
                      value="Street parking"
                      checked={props.parking.includes("Street parking")}
                      onChange={() =>
                        props.handleCheckBoxNA("Street parking", props.parking, props.setParking)
                      }
                    />
                    Street parking
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="parkingN/A"
                      value="N/A"
                      checked={props.parking.includes("N/A")}
                      onChange={() =>
                        props.handleCheckBoxNA("N/A", props.parking, props.setParking)
                      }
                    />
                    N/A
                  </label>
                </div>
              </div>
            </label>
          </div>
    )
}

export default Parking