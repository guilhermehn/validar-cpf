'use strict'

const validarCpf = input => {
	const cpf = input.replace(/\D/g, '')

	if (cpf === '' || cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
		return false
	}

	const digits = cpf.split('').map(x => parseInt(x))

	for (let j = 0; j < 2; j++) {
		let sum = 0

		for (let i = 0; i < 9 + j; i++) {
			sum += digits[i] * (10 + j - i)
		}

		let checkDigit = 11 - sum % 11

		if (checkDigit === 10 || checkDigit === 11) {
			checkDigit = 0
		}

		if (checkDigit !== digits[9 + j]) {
			return false
		}
	}

	return true
}

module.exports = validarCpf
