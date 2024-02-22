import "../App.css"

function NumberBaths(props) {
    return (
        <label>
              <h3>
                Number of Baths
                <span style={{ color: props.requiredFieldColor }}>*</span>
              </h3>{" "}
              <div>
                <label>
                  <input
                    type="radio"
                    name="Baths_1"
                    value="1"
                    checked={props.numberOfBaths === 1 && props.numberOfBathsOther === -1}
                    onChange={props.handleNumberOfBaths}
                  />
                  1
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="Baths_1.5"
                    value="1.5"
                    checked={props.numberOfBaths === 1.5 && props.numberOfBathsOther === -1}
                    onChange={props.handleNumberOfBaths}
                  />
                  1.5
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="Baths_2"
                    value="2"
                    checked={props.numberOfBaths === 2 && props.numberOfBathsOther === -1}
                    onChange={props.handleNumberOfBaths}
                  />
                  2
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="Baths_2.5"
                    value="2.5"
                    checked={props.numberOfBaths === 2.5 && props.numberOfBathsOther === -1}
                    onChange={props.handleNumberOfBaths}
                  />
                  2.5
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="Baths_3"
                    value="3"
                    checked={props.numberOfBaths === 3 && props.numberOfBathsOther === -1}
                    onChange={props.handleNumberOfBaths}
                  />
                  3
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="Baths_Other"
                    value="-2"
                    checked={props.numberOfBathsOther !== -1}
                    onChange={props.handleNumberOfBathsOther}
                  />
                  Other:{" "}
                  <input
                    type="text"
                    name="Bath_other_text"
                    value={
                      props.numberOfBathsOther === -1 || props.numberOfBathsOther === -2
                        ? ""
                        : props.numberOfBathsOther
                    }
                    onChange={props.handleNumberOfBathsOther}
                  />
                </label>
              </div>
            </label>
    )
}

export default NumberBaths