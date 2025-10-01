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
    this.billAmount = this.billInput;
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
  }
}
