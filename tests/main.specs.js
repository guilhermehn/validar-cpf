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
});
