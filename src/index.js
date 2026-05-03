// index.js
import "./styles.css";

import * as DOMRenderer from "./renderHTML.js";

let divBody = document.getElementById("bodyContent");

const inputFieldMinLength = 3;
const inputFieldMaxLength = 20;

const HTMLInputName = {
  id: "myName",
  defaultValue: "Name",
  type: "text",
  isReadOnly: false,
  isRequired: true,
  invalidInputMsg: "invalid input",
  RegexpPattern: undefined,
  minLength: 3,
  maxLength: undefined,
  minNumerical: undefined,
  maxNumerical: undefined,
};

const HTMLInputEmail = {
  id: "myEmail",
  defaultValue: "email",
  type: "email",
  isReadOnly: false,
  isRequired: true,
  invalidInputMsg: "invalid email",
  RegexpPattern: undefined,
  minLength: undefined,
  maxLength: undefined,
  minNumerical: undefined,
  maxNumerical: undefined,
};

const HTMLInputCountry = {
  id: "myCountry",
  defaultValue: "Country",
  type: "text",
  isReadOnly: false,
  isRequired: true,
  invalidInputMsg: "invalid country",
  RegexpPattern: undefined,
  minLength: 3,
  maxLength: undefined,
  minNumerical: undefined,
  maxNumerical: undefined,
};

const HTMLInputPostalCode = {
  id: "myPostalCode",
  defaultValue: "Postal Code",
  type: "text",
  isReadOnly: false,
  isRequired: true,
  invalidInputMsg: "invalid postal code",
  RegexpPattern:
    "[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]",
  minLength: 3,
  maxLength: undefined,
  minNumerical: undefined,
  maxNumerical: undefined,
};

const HTMLInputPassword1 = {
  id: "myPassword1",
  defaultValue: undefined,
  type: "password",
  isReadOnly: false,
  isRequired: true,
  invalidInputMsg: undefined,
  RegexpPattern: undefined,
  minLength: 3,
  maxLength: undefined,
  minNumerical: undefined,
  maxNumerical: undefined,
};

const HTMLInputPassword2 = {
  id: "myPassword2",
  defaultValue: undefined,
  type: "password",
  isReadOnly: false,
  isRequired: true,
  invalidInputMsg: undefined,
  RegexpPattern: undefined,
  minLength: 3,
  maxLength: undefined,
  minNumerical: undefined,
  maxNumerical: undefined,
};

let myInputName = DOMRenderer.createHTMLelement_InputText(
  HTMLInputName.id,
  HTMLInputName.defaultValue,
  HTMLInputName.type,
  HTMLInputName.isReadOnly,
  HTMLInputName.isRequired,
  HTMLInputName.invalidInputMsg,
  HTMLInputName.RegexpPattern,
  HTMLInputName.minLength,
  HTMLInputName.maxLength,
  HTMLInputName.minNumerical,
  HTMLInputName.maxNumerical
);

let myInputEmail = DOMRenderer.createHTMLelement_InputText(
  HTMLInputEmail.id,
  HTMLInputEmail.defaultValue,
  HTMLInputEmail.type,
  HTMLInputEmail.isReadOnly,
  HTMLInputEmail.isRequired,
  HTMLInputEmail.invalidInputMsg,
  HTMLInputEmail.RegexpPattern,
  HTMLInputEmail.minLength,
  HTMLInputEmail.maxLength,
  HTMLInputEmail.minNumerical,
  HTMLInputEmail.maxNumerical
);

let myInputCountry = DOMRenderer.createHTMLelement_InputText(
  HTMLInputCountry.id,
  HTMLInputCountry.defaultValue,
  HTMLInputCountry.type,
  HTMLInputCountry.isReadOnly,
  HTMLInputCountry.isRequired,
  HTMLInputCountry.invalidInputMsg,
  HTMLInputCountry.RegexpPattern,
  HTMLInputCountry.minLength,
  HTMLInputCountry.maxLength,
  HTMLInputCountry.minNumerical,
  HTMLInputCountry.maxNumerical
);

let myInputPostalCode = DOMRenderer.createHTMLelement_InputText(
  HTMLInputPostalCode.id,
  HTMLInputPostalCode.defaultValue,
  HTMLInputPostalCode.type,
  HTMLInputPostalCode.isReadOnly,
  HTMLInputPostalCode.isRequired,
  HTMLInputPostalCode.invalidInputMsg,
  HTMLInputPostalCode.RegexpPattern,
  HTMLInputPostalCode.minLength,
  HTMLInputPostalCode.maxLength,
  HTMLInputPostalCode.minNumerical,
  HTMLInputPostalCode.maxNumerical
);

let myInputPassword1 = DOMRenderer.createHTMLelement_InputText(
  HTMLInputPassword1.id,
  HTMLInputPassword1.defaultValue,
  HTMLInputPassword1.type,
  HTMLInputPassword1.isReadOnly,
  HTMLInputPassword1.isRequired,
  HTMLInputPassword1.invalidInputMsg,
  HTMLInputPassword1.RegexpPattern,
  HTMLInputPassword1.minLength,
  HTMLInputPassword1.maxLength,
  HTMLInputPassword1.minNumerical,
  HTMLInputPassword1.maxNumerical
);

let myInputPassword2 = DOMRenderer.createHTMLelement_InputText(
  HTMLInputPassword2.id,
  HTMLInputPassword2.defaultValue,
  HTMLInputPassword2.type,
  HTMLInputPassword2.isReadOnly,
  HTMLInputPassword2.isRequired,
  HTMLInputPassword2.invalidInputMsg,
  HTMLInputPassword2.RegexpPattern,
  HTMLInputPassword2.minLength,
  HTMLInputPassword2.maxLength,
  HTMLInputPassword2.minNumerical,
  HTMLInputPassword2.maxNumerical
);

let myLabelName = DOMRenderer.createHTMLelement_label("Name :");
let mylabelEmail = DOMRenderer.createHTMLelement_label("Email :");
let mylabelCountry = DOMRenderer.createHTMLelement_label("Country :");
let mylabelPostalCode = DOMRenderer.createHTMLelement_label("Postal Code :");
let mylabelPassword1 = DOMRenderer.createHTMLelement_label("Password :");
let mylabelPassword2 = DOMRenderer.createHTMLelement_label("Confirm PW :");

let myfn = (e) => {
  e.preventDefault();
  console.log("submitted, override default behaviour");
  let myFilledForm = document.getElementById("myForm");
  let pw1 = document.getElementById(HTMLInputPassword1.id);
  let pw2 = document.getElementById(HTMLInputPassword2.id);

  if (pw1.value === pw2.value) {
    pw2.setCustomValidity("");
  } else {
    pw2.setCustomValidity("Passwords do not match");
  }

  if (myFilledForm.checkValidity()) {
    console.log("all input is good");
  } else {
    console.log("error on form");
  }
  myFilledForm.reportValidity();
};

let myFormSubmitBtn = DOMRenderer.createHTMLelement_Button("submit", myfn);
myFormSubmitBtn.type = "submit";

let myForm = DOMRenderer.createHTMLelement_Form("myForm");
myForm.noValidate = true;

let myTable = DOMRenderer.createHTMLelement_TABLE();
let myTableBody = DOMRenderer.createHTMLelement_TableBody();
let myTableCaptions =
  DOMRenderer.createHTMLelement_TableCaption("submission form");
let myTableHeaders = DOMRenderer.createHTMLelement_TableHeaders([
  "description",
  "input field",
]);

let myTableRow1 = DOMRenderer.createHTMLelement_TableRowWithElements([
  myLabelName,
  myInputName,
]);
let myTableRow2 = DOMRenderer.createHTMLelement_TableRowWithElements([
  mylabelEmail,
  myInputEmail,
]);
let myTableRow3 = DOMRenderer.createHTMLelement_TableRowWithElements([
  mylabelCountry,
  myInputCountry,
]);
let myTableRow4 = DOMRenderer.createHTMLelement_TableRowWithElements([
  mylabelPostalCode,
  myInputPostalCode,
]);
let myTableRow5 = DOMRenderer.createHTMLelement_TableRowWithElements([
  mylabelPassword1,
  myInputPassword1,
]);
let myTableRow6 = DOMRenderer.createHTMLelement_TableRowWithElements([
  mylabelPassword2,
  myInputPassword2,
]);
let myTableRow7 = DOMRenderer.createHTMLelement_TableRowWithElements([
  myFormSubmitBtn,
]);

myTableBody.appendChild(myTableRow1);
myTableBody.appendChild(myTableRow2);
myTableBody.appendChild(myTableRow3);
myTableBody.appendChild(myTableRow4);
myTableBody.appendChild(myTableRow5);
myTableBody.appendChild(myTableRow6);
myTableBody.appendChild(myTableRow7);

myTable.appendChild(myTableCaptions);
myTable.appendChild(myTableHeaders);
myTable.appendChild(myTableBody);

myForm.appendChild(myTable);
//myForm.appendChild(myInputEmail);
//myForm.appendChild(myInputCountry);
//myForm.appendChild(myInputPostalCode);
//myForm.appendChild(myInputPassword1);
//myForm.appendChild(myInputPassword2);
//myForm.appendChild(myFormSubmitBtn);

divBody.appendChild(myForm);
