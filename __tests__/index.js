'use strict';

const validarCpf = require('..');
const gerarCpf = require('gerar-cpf');

describe('validarCpf', () => {
	it('should validate cpf', () => {
		for (let i = 0; i < 100; i++) {
			expect(validarCpf(gerarCpf())).toBe(true);
		}
	});

	it('should return false if cpf is invalid', () => {
		expect(validarCpf('12345678900')).toBe(false);
	});

	it('should return false if input is empty', () => {
		expect(validarCpf('')).toBe(false);
	});

	it('should return false if input have less than 11 characters', () => {
		expect(validarCpf('1234567890')).toBe(false);
	});

	it('should return false if input have more than 11 characters', () => {
		expect(validarCpf('123456789000')).toBe(false);
	});

	it('should return false if input doesn`t have 11 numbers', () => {
		expect(validarCpf('1234567890a')).toBe(false);
	});

	it('should ignore any type of mask', () => {
		expect(validarCpf(gerarCpf('x-x-x-x-x-x-x-x-x-x-x', 'x'))).toBe(true);
		expect(validarCpf(gerarCpf('<><><><><><><><><><><>', '<>'))).toBe(true);
		expect(validarCpf(gerarCpf('___.___.___-__', '_'))).toBe(true);
	});

	it('should consider repeating numbers as invalid', () => {
		expect(validarCpf('11111111111')).toBe(false);
		expect(validarCpf('22222222222')).toBe(false);
		expect(validarCpf('33333333333')).toBe(false);
		expect(validarCpf('44444444444')).toBe(false);
		expect(validarCpf('55555555555')).toBe(false);
	});
});
