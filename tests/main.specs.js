var validarCpf = require('../')
  , assert = require('assert')
  , gerarCpf = require('gerar-cpf')

describe('validarCpf', function () {
  var i = -1

  while (++i < 100) {
    it('should validate cpf', function () {
      assert(validarCpf(gerarCpf()))
    })
  }
})