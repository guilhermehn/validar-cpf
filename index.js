/**
 * @param {String} str
 */
const isRepeatingNumber = (str) => /^(\d)(\1){10}$/.test(str);

/**
 * Validates Brazilian CPF document number using the "módulo 11" algorithm.
 * Anything in the input string that is not a number will be removed during the validation,
 * so there is no need to sanitize the input beforehand.
 * @param {String} input - CPF number to be tested.
 * @return {Boolean} Boolean indicating whether the input string contains a valid CPF number.
 * @example
 * const validarCpf = require('validar-cpf');
 *
 * if (validateCpf('123.456.789-87')) {
 * 	console.log('Valid CPF');
 * }
 */
module.exports = function validarCpf(input) {
	const cpf = input.replace(/\D/g, '');

	if (
		cpf === '' ||
		cpf.length !== 11 ||
		!/^\d{11}$/.test(cpf) ||
		isRepeatingNumber(cpf)
	) {
		return false;
	}

	const digits = cpf.split('').map((x) => Number.parseInt(x));

	for (let j = 0; j < 2; j++) {
		let sum = 0;

		for (let i = 0; i < 9 + j; i++) {
			sum += digits[i] * (10 + j - i);
		}

		let checkDigit = 11 - (sum % 11);

		if (checkDigit === 10 || checkDigit === 11) {
			checkDigit = 0;
		}

		if (checkDigit !== digits[9 + j]) {
			return false;
		}
	}

	return true;
};
