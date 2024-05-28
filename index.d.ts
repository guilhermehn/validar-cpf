export = validarCpf;
/**
 * Validates Brazilian CPF document number using the "módulo 11" algorithm
 * @param {String} input - CPF number to be tested
 * @return {Boolean}
 * @example
 * const validarCpf = require('validar-cpf');
 * console.log(validarCpf('12345678900'));
 */
declare function validarCpf(input: string): boolean;
