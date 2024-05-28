export = validarCpf;
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
declare function validarCpf(input: string): boolean;
