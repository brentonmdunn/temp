import "../App.css";

function HeaderText(props) {
    return (<div className="header"><h1>Union Station Homeless Services<br />Land Lord Listing Form</h1>
    <p>
      Thank you for considering adding your listing to our database! Our
      organization aims to combat the homelessness crisis by matching families
      and individuals with the right housing options for them and sustaining
      support for an easy integration back into the community. For your
      listing to be properly added, please complete each field thoroughly and
      include as much information as possible. Thank you for your time!
    </p>
    <br />
    <em>
      The <span style={{ color: props.requiredFieldColor }}>*</span> next to the
      question indicates that it is required.
    </em></div>)
}

export default HeaderText