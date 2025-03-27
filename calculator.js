class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error('Division par zéro interdite');
    return a / b;
  }
  // Méthode plus complexe qui combine plusieurs opérations
  calculateDiscount(price, discountPercentage) {
    const discount = this.multiply(price, discountPercentage / 100);
    return this.add(price, -discount);
  }
}

module.exports = Calculator;
