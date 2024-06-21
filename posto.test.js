const posto = require('./posto');

test('uma viagem de 100km gasta ', () => {
  expect(posto.calcularGastoCombustivel(100000, 'gasolina')).toBe(6250);
});

test('uma viagem de -10km gasta ', () => {
    expect(posto.calcularGastoCombustivel(-10000, 'etanol')).toBe(910);
  });

test('uma viagem de 1000km gasta ', () => {
    expect(posto.calcularGastoCombustivel(1000000, 'etanol')).toBe(90910);
});

test('uma viagem de 1km gasta ', () => {
    expect(posto.calcularGastoCombustivel(1000, 'aditivada')).toBe(6250);
});