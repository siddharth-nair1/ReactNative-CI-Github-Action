test('addition of positive numbers', () => {
    const sum = 7 + 9;
    expect(sum).toBe(16);
  });
  
  test('addition of negative numbers', () => {
    const sum = -5 + (-3);
    expect(sum).toBe(-8);
  });
  
  test('subtraction of positive numbers', () => {
    const difference = 15 - 7;
    expect(difference).toBe(8);
  });
  
  test('subtraction of negative numbers', () => {
    const difference = -10 - (-3);
    expect(difference).toBe(-7);
  });
  
  test('multiplication of positive numbers', () => {
    const product = 4 * 6;
    expect(product).toBe(24);
  });
  
  test('multiplication of negative numbers', () => {
    const product = -5 * 3;
    expect(product).toBe(-15);
  });
  
  test('division of positive numbers', () => {
    const quotient = 20 / 5;
    expect(quotient).toBe(4);
  });
  
  test('division of negative numbers', () => {
    const quotient = -15 / 3;
    expect(quotient).toBe(-5);
  });
  
  test('division by zero results in Infinity', () => {
    const quotient = 10 / 0;
    expect(quotient).toBe(Infinity);
  });
  
  test('modulus operation (remainder)', () => {
    const remainder = 10 % 3;
    expect(remainder).toBe(1);
  });
  
  test('exponential calculation', () => {
    const result = Math.pow(2, 3);
    expect(result).toBe(8);
  });
  
  test('square root calculation', () => {
    const result = Math.sqrt(25);
    expect(result).toBe(5);
  });
  
  test('absolute value calculation', () => {
    const result = Math.abs(-10);
    expect(result).toBe(10);
  });
  
  test('comparison of floating-point numbers', () => {
    const num1 = 0.1 + 0.2;
    expect(num1).toBeCloseTo(0.3);
  });
  