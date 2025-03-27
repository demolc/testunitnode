const Calculator = require('../calculator');

describe('Tests de la calculette', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('addition de 2 + 3 doit donner 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('soustraction de 7 - 4 doit donner 3', () => {
    expect(calculator.subtract(7, 4)).toBe(3);
  });

  test('multiplication de 3 * 4 doit donner 12', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test('division de 10 / 2 doit donner 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('division par 0 doit lancer une erreur', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Division par zéro interdite');
  });
});
