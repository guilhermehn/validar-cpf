# validar-cpf

Validates Brazilian CPF document number using the "módulo 11" algorithm.

Anything in the input string that is not a number will be removed during the validation, so there is no need to sanitize the input beforehand.

[![Actions Status](https://github.com/guilhermehn/validar-cpf/workflows/Node%20CI/badge.svg)](https://github.com/guilhermehn/validar-cpf/actions)
[![npm version](https://badge.fury.io/js/validar-cpf.svg)](http://badge.fury.io/js/validar-cpf)
[![Known Vulnerabilities](https://snyk.io/test/github/guilhermehn/validar-cpf/badge.svg)](https://snyk.io/test/github/guilhermehn/validar-cpf)

## Install

`npm install --save validar-cpf`

## Usage

```js
const validateCpf = require('validar-cpf');

if (validateCpf('123.456.789-87')) {
	console.log('Valid CPF');
}
```

## Package size

[![Install size](https://badgen.net/packagephobia/install/validar-cpf)](https://badgen.net/packagephobia/install/validar-cpf)
[![Minified size](https://badgen.net/bundlephobia/min/validar-cpf)](https://badgen.net/bundlephobia/min/validar-cpf)
[![Minified + gzip size](https://badgen.net/bundlephobia/minzip/validar-cpf)](https://badgen.net/bundlephobia/minzip/validar-cpf)

## License

MIT
