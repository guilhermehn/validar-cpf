const validarCpf = require('../')
const assert = require('assert')
const gerarCpf = require('gerar-cpf')

describe('validarCpf', () => {
	it('should validate cpf', () => {
		for (let i = 0; i < 100; i++) {
			assert(validarCpf(gerarCpf()))
		}
	})

	it('should return false if cpf is invalid', () => {
		assert(!validarCpf('12345678900'))
	})

	it('should return false if input is empty', () => {
		assert(!validarCpf(''))
	})

	it('should return false if input have less than 11 characters', () => {
		assert(!validarCpf('1234567890'))
	})

	it('should return false if input have more than 11 characters', () => {
		assert(!validarCpf('123456789000'))
	})

	it('should return false if input doesn`t have 11 numbers', () => {
		assert(!validarCpf('1234567890a'))
	})

	it('should ignore non-numeric characters', () => {
		const cpf = gerarCpf()
		assert(validarCpf(cpf))
	})

	it('should ignore any type of mask', () => {
		assert(validarCpf(gerarCpf('x-x-x-x-x-x-x-x-x-x-x', 'x')))
		assert(validarCpf(gerarCpf('<><><><><><><><><><><>', '<>')))
		assert(validarCpf(gerarCpf('___.___.___-__', '_')))
	})
})
