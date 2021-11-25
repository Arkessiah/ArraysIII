// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Arrays III', () => {
  it('La variable mentores debe valer 3 después del bucle', () => {
    expect(mentores).to.equal(3);
  });

  it('La variable estudiantes debe valer 5 después del bucle', () => {
    expect(estudiantes).to.equal(5);
  });
});
