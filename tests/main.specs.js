var validarCpf = require('../');
var assert = require('assert');
var gerarCpf = require('gerar-cpf');

describe('validarCpf', function () {
  var i = -1;

  it('should validate cpf', function () {
    var cpfs = [];

    while (++i < 100) {
      cpfs[i] = gerarCpf();
    }

    assert(cpfs.every(function (cpf) {
      return validarCpf(cpf);
    }));
  });

  it('should ignore non-numeric characters', function () {
    var cpf = gerarCpf(true);
    assert(validarCpf(cpf));
  });

  it('should ignore any type of mask', function () {
    var cpf = gerarCpf('x-x-x-x-x-x-x-x-x-x-x');
    assert(validarCpf(cpf));

    cpf = gerarCpf('<><><><><><><><><><><>', '<>');
    assert(validarCpf(cpf));

    cpf = gerarCpf('___.___.___-__', '_');
    assert(validarCpf(cpf));
  });
});
