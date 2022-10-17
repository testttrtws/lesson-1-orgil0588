const sum = require('./sum');

test('outputs the correct string', () => {

  expect(sum("hi")).toBe("hi hi");
});
