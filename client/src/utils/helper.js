const isNumber = (number) => {
  const pattern = /^\d+\.?\d*$/;
  return pattern.test(number);
};

export const validationDepositAmount = (amount) => {
  if (amount <= 0) {
    alert("Please enter a valid amount");
    return false;
  } else if (!isNumber(amount)) {
    alert("Please enter a number");
    return false;
  }
  return true;
};

export const validationWithdraw = (amount, balance) => {
  if (amount <= 0) {
    alert("Please enter a valid amount");
    return false;
  } else if (!isNumber(amount)) {
    alert("Please enter a number");
    return false;
  } else if (amount > balance) {
    alert("Insufficient funds");
    return false;
  }
  return true;
};
