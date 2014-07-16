function validarCPF (cpf) {
  var j = -1
    , add
    , i

  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf === '' || cpf.length != 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false
  }

  while (++j < 2) {
    add = 0

    for (i = 0; i < (9 + j);) {
      add += (cpf[i] >>> 0) * ((10 + j) - i++)
    }

    rev = 11 - (add % 11)

    if (rev === 10 || rev === 11) {
      rev = 0
    }

    if (rev !== cpf[9 + j] >>> 0) {
      return false
    }
  }

  return true;
}

module.exports = validarCPF
