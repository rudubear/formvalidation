const page_HTMLRenderer = "loading HTML Renderer!";

function renderHTMLMenuObject(menuItem, menuItemImageSource) {
  let listItem = document.createElement("li");

  let menuItemH2 = document.createElement("h2");
  let menuItemDescription = document.createElement("p");
  let menuItemPrice = document.createElement("p");
  let menuItemImage = new Image();
  menuItemImage.src = menuItemImageSource;
  menuItemImage.classList = "menu_item_image";

  menuItemH2.textContent = menuItem.name;
  menuItemDescription.textContent = menuItem.description;
  menuItemPrice.textContent = menuItem.price;

  let myMenuItem = [];
  myMenuItem.push(menuItemH2);
  myMenuItem.push(menuItemDescription);
  myMenuItem.push(menuItemPrice);
  myMenuItem.push(menuItemImage);

  listItem.appendChild(menuItemH2);
  listItem.appendChild(menuItemDescription);
  listItem.appendChild(menuItemPrice);
  listItem.appendChild(menuItemImage);

  return listItem;
}

function createHTMLelement_P(text) {
  let myP = document.createElement("p");
  myP.innerText = text;

  return myP;
}

function createHTMLelement_label(text) {
  let myLabel = document.createElement("label");
  myLabel.textContent = text;

  return myLabel;
}

function createHTMLelement_H(text) {
  let myH1 = document.createElement("h1");
  myH1.innerText = text;

  return myH1;
}

function createHTMLelement_DIV(styleclass) {
  let myDIV = document.createElement("div");
  if (styleclass) {
    myDIV.classList = styleclass;
  }
  return myDIV;
}

function createHTMLelement_TABLE(styleclass) {
  let myTable = document.createElement("table");
  if (styleclass) {
    myTable.classList = styleclass;
  }

  return myTable;
}

function createHTMLelement_TableCaption(captionText) {
  let myCaption = document.createElement("caption");
  myCaption.innerText = captionText;
  return myCaption;
}

function createHTMLelement_TableHeaders(array_of_headers = []) {
  let myTableHead = document.createElement("thead");
  let myTableHeadRow = document.createElement("tr");
  array_of_headers.forEach((header) => {
    let myTableHeadRowHeader = document.createElement("th");
    myTableHeadRowHeader.innerText = header;
    myTableHeadRow.appendChild(myTableHeadRowHeader);
  });
  myTableHead.appendChild(myTableHeadRow);

  return myTableHead;
}

function createHTMLelement_TableBody() {
  let myTableBody = document.createElement("tbody");
  return myTableBody;
}

function createHTMLelement_TableRow(array_of_data) {
  let myTableBodyRow = document.createElement("tr");
  array_of_data.forEach((data) => {
    let myTableBodyRowData = document.createElement("td");
    myTableBodyRowData.innerText = data;
    myTableBodyRow.appendChild(myTableBodyRowData);
  });

  return myTableBodyRow;
}

function createHTMLelement_TableRowWithElements(array_of_elements) {
  let myTableBodyRow = document.createElement("tr");
  array_of_elements.forEach((element) => {
    let myTableBodyRowData = document.createElement("td");
    myTableBodyRowData.appendChild(element);
    myTableBodyRow.appendChild(myTableBodyRowData);
  });

  return myTableBodyRow;
}

function createHTMLelement_Form(id) {
  let myForm = document.createElement("form");
  myForm.setAttribute("id", id);

  return myForm;
}

function createHTMLelement_InputText(
  elementID,
  elementDefaultValue = undefined,
  elementType = undefined,
  elementReadOnly = false,
  elementRequired = false,
  invalidInputMsg = "",
  elementRegexpPattern = undefined,
  elementMinLength = undefined,
  elementMaxLength = undefined,
  elementMinNumerical = undefined,
  elementMaxNumerical = undefined
) {
  let myInputField = document.createElement("input");

  myInputField.setAttribute("id", elementID);

  if (elementDefaultValue) {
    myInputField.value = elementDefaultValue;
  }

  if (elementType) {
    myInputField.type = elementType;
  }

  if (elementReadOnly) {
    myInputField.readOnly = elementReadOnly;
  }

  if (elementRequired) {
    myInputField.required = elementRequired;
  }

  if (elementRegexpPattern) {
    myInputField.pattern = elementRegexpPattern;
  }

  if (elementMinLength) {
    myInputField.minLength = elementMinLength;
  }

  if (elementMaxLength) {
    myInputField.maxLength = elementMaxLength;
  }

  if (elementMinNumerical) {
    myInputField.min = elementMinNumerical;
  }

  if (elementMaxNumerical) {
    myInputField.max = elementMaxNumerical;
  }

  myInputField.addEventListener("input", () => {
    if (myInputField.checkValidity()) {
      console.log("valid input entered for " + elementID) + invalidInputMsg;
    } else {
      console.log("invalid input entered for " + elementID + invalidInputMsg);
      console.log(myInputField.validity);
    }
  });
  return myInputField;
}

function createHTMLelement_Button(
  text,
  fn,
  styleclass = undefined,
  img = undefined
) {
  const myButton = document.createElement("button");
  myButton.textContent = text;

  myButton.addEventListener("click", fn);
  if (styleclass) {
    myButton.classList += styleclass;
  }

  if (img) {
    myButton.style.backgroundImage = `url(${img})`;
  }
  return myButton;
}

export {
  createHTMLelement_DIV,
  createHTMLelement_H,
  createHTMLelement_P,
  createHTMLelement_label,
  renderHTMLMenuObject,
  createHTMLelement_TABLE,
  createHTMLelement_TableCaption,
  createHTMLelement_TableHeaders,
  createHTMLelement_TableBody,
  createHTMLelement_TableRow,
  createHTMLelement_TableRowWithElements,
  createHTMLelement_Form,
  createHTMLelement_InputText,
  createHTMLelement_Button,
  page_HTMLRenderer,
};
