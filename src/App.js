import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import TestComp from "./components/TestComp";
import HeaderText from "./components/HeaderText";
import Textbox from "./components/Textbox";
import RadioButtons from "./components/RadioButtons";
import Logo from "./components/Logo";
import ThirdPartyPayment from "./components/ThirdPartyPayment";
import HousingAuthority from "./components/HousingAuthority";
import SharingHousing from "./components/SharingHousing";
import Pets from "./components/Pets";
import AccessibilityAccess from "./components/AccessibilityAccess";
import Parking from "./components/Parking";
import CommunityInfo from "./components/CommunityInfo";
import Applicances from "./components/Appliances";
import NumberBaths from "./components/NumberBaths";
import NumberBedrooms from "./components/NumberBedrooms";
import AvailableNow from "./components/AvailableNow";
import DateAvailable from "./components/DateAvailable";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [aptNum, setAptNum] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [sqFootage, setSqFootage] = useState(-1);
  const [rentPerMonth, setRentPerMonth] = useState(-1);
  const [securityDeposit, setSecurityDeposit] = useState(-1);

  const [thirdPartyPayment, setThirdPartyPayment] = useState();
  const [housingAuthority, setHousingAuthority] = useState("");
  const [applicationFeeCost, setApplicationFeeCost] = useState(-1);
  const [dateAvailable, setDateAvailable] = useState();
  const [availableNow, setAvailableNow] = useState(false);
  const [numberOfBedrooms, setNumberOfBedrooms] = useState(-1);
  const [numberOfBedroomsOther, setNumberOfBedroomsOther] = useState(-1);
  const [numberOfBaths, setNumberOfBaths] = useState(-1.0);
  const [numberOfBathsOther, setNumberOfBathsOther] = useState(-1);
  const [appliances, setAppliances] = useState([]);
  const [communityAndNeighborInfo, setCommunityAndNeighborInfo] = useState([]);
  const [communityAndNeighborInfoOther, setCommunityAndNeighborInfoOther] =
    useState("");
  const [parking, setParking] = useState([]);
  const [accessibility, setAccessibility] = useState([]);
  const [pets, setPets] = useState([]);
  const [sharingHousing, setSharingHousing] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const requiredFieldColor = "#B64201";

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailAddress = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhone(event.target.value);
  };

  const handleStreetAddress = (event) => {
    setStreetAddress(event.target.value);
  };

  const handleApartmentNumber = (event) => {
    setAptNum(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleState = (event) => {
    setState(event.target.value);
  };

  const handleAreaCode = (event) => {
    setAreaCode(event.target.value);
  };

  const handleSqFootage = (event) => {
    setSqFootage(event.target.value);
  };

  const handleRentPerMonth = (event) => {
    setRentPerMonth(event.target.value);
  };

  const handleSecurityDeposit = (event) => {
    setSecurityDeposit(event.target.value);
  };

  const handleThirdPartyPayment = (event) => {
    setThirdPartyPayment(event.target.value === "Yes");
  };

  const handleHousingAuthority = (event) => {
    setHousingAuthority(event.target.value);
  };

  const handleApplicationFeeCost = (event) => {
    // TODO: Check if float
    setApplicationFeeCost(parseFloat(event.target.value));
  };

  const handleDateAvailable = (event) => {
    setDateAvailable(event.target.value);
  };

  const handleAvailableNow = (event) => {
    setAvailableNow(!availableNow);
  };

  const handleNumberOfBedrooms = (event) => {
    setNumberOfBedroomsOther(-1);
    setNumberOfBedrooms(parseInt(event.target.value));
  };

  const handleNumberOfBedroomsOther = (event) => {
    // TODO: Check if int
    setNumberOfBedroomsOther(parseInt(event.target.value));
  };

  const handleNumberOfBaths = (event) => {
    setNumberOfBathsOther(-1);

    setNumberOfBaths(parseFloat(event.target.value));
  };

  const handleNumberOfBathsOther = (event) => {
    // TODO: Check if float
    setNumberOfBathsOther(parseFloat(event.target.value));
  };

  const handleCommunityAndNeighborInfo = (event) => {
    const target = event.target;
    const value = target.value;

    if (value === "Other") {
      setCommunityAndNeighborInfoOther("");
    }

    // If checkbox is checked, add the value to the array
    if (target.checked) {
      setCommunityAndNeighborInfo([...communityAndNeighborInfo, value]);
    } else {
      // If checkbox is unchecked, remove the value from the array
      setCommunityAndNeighborInfo(
        communityAndNeighborInfo.filter((item) => item !== value),
      );
    }
  };

  const handleCommunityAndNeighborInfoOther = (event) => {
    setCommunityAndNeighborInfoOther(event.target.value);
  };

  const handleCheckBoxNA = (option, getter, setter) => {
    if (option === "N/A") {
      setter(["N/A"]);
    } else if (getter.includes(option)) {
      let valueToRemove = "N/A";
      let index = getter.indexOf(valueToRemove);
      if (index !== -1) {
        getter.splice(index, 1);
      }

      setter(getter.filter((item) => item !== option));
    } else {
      let valueToRemove = "N/A";
      let index = getter.indexOf(valueToRemove);
      if (index !== -1) {
        getter.splice(index, 1);
      }
      setter([...getter, option]);
    }
  };

  const handleSharingHousing = (event) => {
    setSharingHousing(event.target.value);
  };

  const handleAdditionalComments = (event) => {
    setAdditionalComments(event.target.value);
  };

  return (
    <div className="main-container">
      <Logo />
      <HeaderText requiredFieldColor={requiredFieldColor} />
      <form>
        <div className="content-container">
          <div className="text-container">
            <Textbox
              elementName="Name"
              requiredFieldColor={requiredFieldColor}
              name="firstName"
              value={firstName}
              handler={handleFirstName}
              placeholder="First"
            />
            <Textbox
              name="lastName"
              value={lastName}
              handler={handleLastName}
              placeholder="Last"
            />
          </div>
          <div className="text-container">
            <Textbox
              elementName="Email Address"
              requiredFieldColor={requiredFieldColor}
              name="email"
              value={email}
              handler={handleEmailAddress}
            />

            <Textbox
              elementName="Phone Number"
              requiredFieldColor={requiredFieldColor}
              name="phone"
              value={phone}
              handler={handlePhoneNumber}
            />
          </div>
          <div className="text-container">
            <Textbox
              elementName="City"
              requiredFieldColor={requiredFieldColor}
              name="city"
              value={city}
              handler={handleCity}
            />
            <Textbox
              elementName="State"
              requiredFieldColor={requiredFieldColor}
              name="email"
              value={state}
              handler={handleState}
            />
          </div>
          <div className="text-container">
            <Textbox
              elementName="Street Address"
              requiredFieldColor={requiredFieldColor}
              name="streetAddress"
              value={streetAddress}
              handler={handleStreetAddress}
            />
            <Textbox
              elementName="Apartment/Suite etc"
              requiredFieldColor={requiredFieldColor}
              name="aptNum"
              value={aptNum}
              handler={handleApartmentNumber}
            />
          </div>
          <div className="text-container">
            <Textbox
              elementName="Area Code"
              requiredFieldColor={requiredFieldColor}
              name="areaCode"
              value={areaCode}
              handler={handleAreaCode}
            />
            <Textbox
              elementName="Square Footage"
              requiredFieldColor={requiredFieldColor}
              name="sqFootage"
              value={sqFootage === -1 ? "" : sqFootage}
              handler={handleSqFootage}
            />
          </div>
          <h2>Renting/Fees Information</h2>
          <div className="text-container">
            <Textbox
              elementName="Rent Per Month"
              requiredFieldColor={requiredFieldColor}
              name="rentPerMonth"
              value={rentPerMonth === -1 ? "" : rentPerMonth}
              handler={handleRentPerMonth}
            />
            <Textbox
              elementName="Security Deposit"
              requiredFieldColor={requiredFieldColor}
              name="rentPerMonth"
              value={securityDeposit === -1 ? "" : securityDeposit}
              handler={handleSecurityDeposit}
            />
          </div>
          <ThirdPartyPayment
            requiredFieldColor={requiredFieldColor}
            thirdPartyPayment={thirdPartyPayment}
            handleThirdPartyPayment={handleThirdPartyPayment}
          />
          <HousingAuthority
            requiredFieldColor={requiredFieldColor}
            housingAuthority={housingAuthority}
            handleHousingAuthority={handleHousingAuthority}
          />
          <div className="margin32">
            <label>
              <h3>
                Application Fee Cost
                <span style={{ color: requiredFieldColor }}>*</span>
              </h3>
              <div>
                <label>
                  <div id="app-fee-cost-box">
                    <input
                      type="text"
                      placeholder="Enter FULL amount"
                      name="Application Fee Cost"
                      value={
                        applicationFeeCost !== -2 && applicationFeeCost !== -1
                          ? applicationFeeCost
                          : ""
                      }
                      onChange={handleApplicationFeeCost}
                    />
                  </div>
                </label>
                <br />

                <label>
                  <input
                    type="radio"
                    name="appFeeCostN/A"
                    value="-2"
                    checked={applicationFeeCost === -2}
                    onChange={handleApplicationFeeCost}
                  />
                  N/A
                </label>
              </div>
            </label>
          </div>
          <h2>House Specifics</h2>
          <div className="text-container">
            <DateAvailable
              requiredFieldColor={requiredFieldColor}
              dateAvailable={dateAvailable}
              handleDateAvailable={handleDateAvailable}
            />
            <AvailableNow
              availableNow={availableNow}
              handleAvailableNow={handleAvailableNow}
            />
          </div>
          <div className="radio-checkbox-container margin32">
            <NumberBedrooms
              requiredFieldColor={requiredFieldColor}
              numberOfBedrooms={numberOfBedrooms}
              handleNumberOfBedrooms={handleNumberOfBedrooms}
              numberOfBedroomsOther={numberOfBedroomsOther}
              handleNumberOfBedroomsOther={handleNumberOfBedroomsOther}
            />
            <NumberBaths
              requiredFieldColor={requiredFieldColor}
              numberOfBaths={numberOfBaths}
              handleNumberOfBaths={handleNumberOfBaths}
              numberOfBathsOther={numberOfBathsOther}
              handleNumberOfBathsOther={handleNumberOfBathsOther}
            />
          </div>
          <Applicances
            requiredFieldColor={requiredFieldColor}
            appliances={appliances}
            setAppliances={setAppliances}
            handleCheckBoxNA={handleCheckBoxNA}
          />
          <CommunityInfo
            requiredFieldColor={requiredFieldColor}
            communityAndNeighborInfo={communityAndNeighborInfo}
            handleCommunityAndNeighborInfo={handleCommunityAndNeighborInfo}
          />
          <Parking
            requiredFieldColor={requiredFieldColor}
            parking={parking}
            setParking={setParking}
            handleCheckBoxNA={handleCheckBoxNA}
          />
          <AccessibilityAccess
            requiredFieldColor={requiredFieldColor}
            accessibility={accessibility}
            setAccessibility={setAccessibility}
            handleCheckBoxNA={handleCheckBoxNA}
          />
          <Pets
            requiredFieldColor={requiredFieldColor}
            pets={pets}
            setPets={setPets}
            handleCheckBoxNA={handleCheckBoxNA}
          />
          <SharingHousing
            requiredFieldColor={requiredFieldColor}
            sharingHousing={sharingHousing}
            handleSharingHousing={handleSharingHousing}
          />
          <Textbox
            elementName="Additional Comments"
            requiredFieldColor={requiredFieldColor}
            name="additionalComments"
            value={additionalComments}
            handler={handleAdditionalComments}
          />
        </div>
        <div className="button-container">
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
