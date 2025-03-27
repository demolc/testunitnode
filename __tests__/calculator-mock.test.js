const Calculator = require('../calculator');

describe('Mocking de méthodes internes', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('calculateDiscount doit utiliser add et multiply avec des mocks', () => {
    // Mock des méthodes internes
    const addMock = jest.spyOn(calculator, 'add').mockReturnValue(80);
    const multiplyMock = jest.spyOn(calculator, 'multiply').mockReturnValue(20);

    const result = calculator.calculateDiscount(100, 20);

    // Vérifications des appels et des valeurs
    expect(multiplyMock).toHaveBeenCalledWith(100, 0.2);
    expect(addMock).toHaveBeenCalledWith(100, -20);
    expect(result).toBe(80);

    // Restaurer les méthodes originales
    addMock.mockRestore();
    multiplyMock.mockRestore();
  });
});
