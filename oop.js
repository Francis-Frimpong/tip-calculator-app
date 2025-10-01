class TipCalculator {
  constructor() {
    this.billAount = 0;
    this.tipPercent = 0;
    this.numberOfPeople = 1;

    this.billInput = document.querySelector(".bill");
    this.tipButtons = document.querySelectorAll(".btns");
    this.customTipInput = document.querySelector(".fieldInput");
    this.peopleInput = document.querySelector(".people");
    this.errorMessage = document.querySelector(".error-msg");
    this.tipAmountDisplay = document.querySelector(".tip-amt");
    this.tipAmountDisplay = document.querySelector(".total-amt");
    this.resetButton = document.querySelector(".reset-btn");

    this.btnFormsCon = document.querySelector(".inputBtns-forms");
    this.customField = document.querySelectorAll("input");
  }

  addEventListeners() {}
}
