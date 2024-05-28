const validarCpf = require('..');
const gerarCpf = require('gerar-cpf');
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

describe('validarCpf', () => {
	it('should validate cpf', () => {
		for (let i = 0; i < 100; i++) {
			assert(validarCpf(gerarCpf()));
		}
	});

	it('should return false if cpf is invalid', () => {
		assert.strictEqual(validarCpf('12345678900'), false);
	});

	it('should return false if input is empty', () => {
		assert.strictEqual(validarCpf(''), false);
	});

	it('should return false if input have less than 11 characters', () => {
		assert.strictEqual(validarCpf('1234567890'), false);
	});

	it('should return false if input have more than 11 characters', () => {
		assert.strictEqual(validarCpf('123456789000'), false);
	});

	it('should return false if input doesn`t have 11 numbers', () => {
		assert.strictEqual(validarCpf('1234567890a'), false);
	});

	it('should ignore any type of mask', () => {
		assert(validarCpf(gerarCpf('x-x-x-x-x-x-x-x-x-x-x', 'x')));
		assert(validarCpf(gerarCpf('<><><><><><><><><><><>', '<>')));
		assert(validarCpf(gerarCpf('___.___.___-__', '_')));
	});

	it('should consider repeating numbers as invalid', () => {
		assert.strictEqual(validarCpf('11111111111'), false);
		assert.strictEqual(validarCpf('22222222222'), false);
		assert.strictEqual(validarCpf('33333333333'), false);
		assert.strictEqual(validarCpf('44444444444'), false);
		assert.strictEqual(validarCpf('55555555555'), false);
	});
});
