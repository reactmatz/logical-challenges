const assert = require("assert"); // Importa a biblioteca de assert do Node.js
const factors = require("./script.js"); // Importa a função factors a ser testada

describe("Basic Tests", () => {
  it("Deve retornar [1, 5] para factors(5, 1)", () => {
    assert.deepStrictEqual(factors(5, 1), [1, 5]);
  });

  it("Deve retornar [2, 3, 5, 6, 10, 15, 30] para factors(30, 2)", () => {
    assert.deepStrictEqual(factors(30, 2), [2, 3, 5, 6, 10, 15, 30]);
  });

  it("Deve retornar [100] para factors(100, 75)", () => {
    assert.deepStrictEqual(factors(100, 75), [100]);
  });

  it("Deve retornar [5, 8, 10, 20, 40] para factors(40, 5)", () => {
    assert.deepStrictEqual(factors(40, 5), [5, 8, 10, 20, 40]);
  });

  it("Deve retornar [] para factors(1, 5)", () => {
    assert.deepStrictEqual(factors(1, 5), []);
  });
});
