import "../App.css"

function Pets(props) {
    return (<div className="margin32">
    <label>
      <h3>
        Pets/animals{" "}
        <span style={{ color: props.requiredFieldColor }}>*</span>
      </h3>
      <div className="radio-checkbox-container">
        <div className="radio-checkbox-col">
          <label>
            <input
              type="checkbox"
              name="Pets allowed"
              value="Pets allowed"
              checked={props.pets.includes("Pets allowed")}
              onChange={() =>
                props.handleCheckBoxNA("Pets allowed", props.pets, props.setPets)
              }
            />
            Pets allowed
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Pets not allowed"
              value="Pets not allowed"
              checked={props.pets.includes("Pets not allowed")}
              onChange={() =>
                props.handleCheckBoxNA("Pets not allowed", props.pets, props.setPets)
              }
            />
            Pets not allowed
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="ESA letter requirequiredFieldColor"
              value="ESA letter requirequiredFieldColor"
              checked={props.pets.includes(
                "ESA letter requirequiredFieldColor",
              )}
              onChange={() =>
                props.handleCheckBoxNA(
                  "ESA letter requirequiredFieldColor",
                  props.pets,
                  props.setPets,
                )
              }
            />
            ESA letter requirequiredFieldColor
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Small dogs/cats allowed only"
              value="Small dogs/cats allowed only"
              checked={props.pets.includes("Small dogs/cats allowed only")}
              onChange={() =>
                props.handleCheckBoxNA(
                  "Small dogs/cats allowed only",
                  props.pets,
                  props.setPets,
                )
              }
            />
            Small dogs/cats allowed only
          </label>
        </div>
        <div>
          {" "}
          <label>
            <input
              type="checkbox"
              name="Big dogs allowed"
              value="Big dogs allowed"
              checked={props.pets.includes("Big dogs allowed")}
              onChange={() =>
                props.handleCheckBoxNA("Big dogs allowed", props.pets, props.setPets)
              }
            />
            Big dogs allowed
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Pet deposit fee (included in security deposit)"
              value="Pet deposit fee (included in security deposit)"
              checked={props.pets.includes(
                "Pet deposit fee (included in security deposit)",
              )}
              onChange={() =>
                props.handleCheckBoxNA(
                  "Pet deposit fee (included in security deposit)",
                  props.pets,
                  props.setPets,
                )
              }
            />
            Pet deposit fee (included in security deposit)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="N/A"
              value="N/A"
              checked={props.pets.includes("N/A")}
              onChange={() => props.handleCheckBoxNA("N/A", props.pets, props.setPets)}
            />
            N/A
          </label>
        </div>
      </div>
    </label>
  </div>)
}

export default Pets