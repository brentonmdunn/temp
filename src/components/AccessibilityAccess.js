import "../App.css"

function AccessibilityAccess(props) {
    return (
        <div className="margin32">
              <h3>
                Accessibility Access{" "}
                <span style={{ color: props.requiredFieldColor }}>*</span>
              </h3>
              <div className="radio-checkbox-container">
                <div className="radio-checkbox-col">
                  <label>
                    <input
                      type="checkbox"
                      name="1st floor"
                      value="1st floor"
                      checked={props.accessibility.includes("1st floor")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "1st floor",
                          props.accessibility,
                          props.setAccessibility,
                        )
                      }
                    />
                    1st floor{" "}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="2nd floor and above"
                      value="2nd floor and above"
                      checked={props.accessibility.includes("2nd floor and above")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "2nd floor and above",
                          props.accessibility,
                          props.setAccessibility,
                        )
                      }
                    />
                    2nd floor and above{" "}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="Ramps up to unit"
                      value="Ramps up to unit"
                      checked={props.accessibility.includes("Ramps up to unit")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "Ramps up to unit",
                          props.accessibility,
                          props.setAccessibility,
                        )
                      }
                    />
                    Ramps up to unit
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="Stairs only"
                      value="Stairs only"
                      checked={props.accessibility.includes("Stairs only")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "Stairs only",
                          props.accessibility,
                          props.setAccessibility,
                        )
                      }
                    />
                    Stairs only
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="Elevators to unit"
                      value="Elevators to unit"
                      checked={props.accessibility.includes("Elevators to unit")}
                      onChange={() =>
                        props.handleCheckBoxNA(
                          "Elevators to unit",
                          props.accessibility,
                          props.setAccessibility,
                        )
                      }
                    />
                    Elevators to unit
                  </label>
                  <br />
                  <label>
                    <input
                      type="radio"
                      name="accessibilityN/A"
                      value="N/A"
                      checked={props.accessibility.includes("N/A")}
                      onChange={() =>
                        props.handleCheckBoxNA("N/A", props.accessibility, props.setAccessibility)
                      }
                    />
                    N/A
                  </label>
                </div>
              </div>
          </div>
    )
}

export default AccessibilityAccess