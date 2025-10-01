class TipCalculator {
  constructor() {
    this.billAmount = 0;
    this.tipPercent = 0;
    this.numberOfPeople = 1;

    this.billInput = document.querySelector(".bill");
    this.tipButtons = document.querySelectorAll(".btns");
    this.customTipInput = document.querySelector(".fieldInput");
    this.peopleInput = document.querySelector(".people");
    this.errorMessage = document.querySelector(".error-msg");
    this.tipAmountDisplay = document.querySelector(".tip-amt");
    this.totalAmountDisplay = document.querySelector(".total-amt");
    this.resetButton = document.querySelector(".reset-btn");

    this.btnFormsCon = document.querySelector(".inputBtns-forms");
    this.customField = document.querySelectorAll("input");

    this.tipPercentage = [5, 10, 15, 25, 50];
  }

  // bill input method
  billinput() {
    this.billAmount = this.billInput.value;
    this.calculateTip();
  }

  buttonLinkToTipPercentageArr(e) {
    if (e.target.classList.contains("btns")) {
      this.tipButtons.forEach((button, index) => {
        if (e.target === button) {
          this.tipPercent = this.tipPercentage[index];
          button.classList.add("activeButton");
        }
        button.classList.add("disabled");
      });
    }
    this.calculateTip();
  }

  customtipInput() {
    this.tipButtons.forEach((button) => {
      button.classList.add("disabled");
    });
    this.tipPercent = this.customTipInput.value;
    this.calculateTip();
  }

  customfieldFocusAndBlur() {
    this.customField.forEach((field) => {
      field.addEventListener("focus", () => {
        field.classList.add("focusedInput");
      });
      field.addEventListener("blur", () => {
        field.classList.remove("focusedInput");
      });
    });
  }
  numberOfPeopleInput() {
    if (this.peopleInput.value < 1) {
      this.errorMessage.classList.add("errorText");
      this.peopleInput.classList.add("inputError");
    } else {
      this.errorMessage.classList.remove("errorText");
      this.peopleInput.classList.remove("inputError");
      this.numberOfPeople = this.peopleInput.value;
      this.calculateTip();
    }
  }

  resetbutton() {
    this.tipButtons.forEach((button) => {
      button.classList.remove("disabled");
      button.classList.remove("activeButton");
    });
    this.billInput.value = "";
    this.peopleInput.value = "";
    this.customTipInput.value = "";
    this.tipPercent = 0;
    this.billAmount = 0;
    this.numberOfPeople = 1;
    this.tipAmountDisplay.textContent = "$0.00";
    this.totalAmountDisplay.textContent = "$0.00";
  }

  calculateTip() {
    if (this.billAmount > 0 && this.tipPercent > 0 && this.numberOfPeople > 0) {
      let tipAmount =
        (this.billAmount * this.tipPercent) / 100 / this.numberOfPeople;
      let totalAmount = this.billAmount / this.numberOfPeople + tipAmount;

      this.tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
      this.totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    } else {
      this.tipAmountDisplay.textContent = "$0.00";
      this.totalAmountDisplay.textContent = "$0.00";
    }
  }

  addEventListeners() {
    this.billInput.addEventListener("input", () => this.billinput());
    this.btnFormsCon.addEventListener("click", (e) =>
      this.buttonLinkToTipPercentageArr(e)
    );
    this.customTipInput.addEventListener("input", () => this.customtipInput());

    this.peopleInput.addEventListener("input", () =>
      this.numberOfPeopleInput()
    );
    this.resetButton.addEventListener("click", () => this.resetbutton());
  }
}

const tipCalculator = new TipCalculator();
tipCalculator.customfieldFocusAndBlur();
tipCalculator.addEventListeners();
