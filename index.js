'use strict';

const isRepeatingNumber = str => /^(\d)(\1){10}$/.test(str);

/**
 * Valida um número de CPF baseado no algorítmo "módulo 11"
 * @param {String} input - Número de CPF a ser testado
 * @return {Boolean}
 * @example
 * const validarCpf = require('validar-cpf');
 * console.log(validarCpf('12345678900'));
 */
const validarCpf = input => {
	const cpf = input.replace(/\D/g, '');

	if (
		cpf === '' ||
		cpf.length !== 11 ||
		!/^\d{11}$/.test(cpf) ||
		isRepeatingNumber(cpf)
	) {
		return false;
	}

	const digits = cpf.split('').map(x => parseInt(x));

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

module.exports = validarCpf;
