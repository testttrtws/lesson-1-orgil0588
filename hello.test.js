const hello = require('./hello');

test('outputs the correct string', () => {
  const input = [1, 2]
  expect(hello(input[0], input[1])).toBe(input[0]+ input[1]);
});
