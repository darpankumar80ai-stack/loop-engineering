/**
 * Multiplies two numbers.
 *
 * @param {number} firstNumber - The first number in the multiplication.
 * @param {number} secondNumber - The second number in the multiplication.
 * @returns {number} The product of the two numbers.
 */
export function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

/**
 * Subtracts one number from another.
 *
 * @param {number} firstNumber - The number to subtract from.
 * @param {number} secondNumber - The number to subtract.
 * @returns {number} The difference between the two numbers.
 */
export function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

/**
 * Divides one number by another.
 *
 * @param {number} firstNumber - The dividend.
 * @param {number} secondNumber - The divisor.
 * @returns {number} The quotient of the division.
 * @throws {Error} Throws if the divisor is zero.
 */
export function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return firstNumber / secondNumber;
}

/**
 * Adds two numbers together.
 *
 * @param {number} firstNumber - The first number to add.
 * @param {number} secondNumber - The second number to add.
 * @returns {number} The sum of the two numbers.
 */
export function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

/**
 * Raises a base to the power of an exponent.
 *
 * @param {number} base - The base value.
 * @param {number} exponent - The exponent value.
 * @returns {number} The result of base raised to the power of exponent.
 */

export function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Fetches a user by their ID from the JSONPlaceholder API.
 *
 * @param {number|string} userId - The unique identifier of the user to fetch.
 * @returns {Promise<Object>} A promise that resolves to the user object.
 * @throws {Error} Throws when the fetch request fails or the response is not ok.
 */
export function callGetUserById(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    });
}

callGetUserById(10);

