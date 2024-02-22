import "../App.css"

function AvailableNow(props) {
    return (
        <label className="text-col" id="data-available-now">
              <h3>Available Now?</h3>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="available_now"
                    value="Yes"
                    checked={props.availableNow === true}
                    onChange={props.handleAvailableNow}
                  />
                </label>
              </div>
            </label>
    )
}

export default AvailableNow