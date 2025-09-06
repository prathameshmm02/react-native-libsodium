import { crypto_auth } from '@more-tech/react-native-libsodium';
import { expect, test } from '../utils/testRunner';

test('crypto_auth', () => {
  const key = new Uint8Array([
    75, 222, 64, 255, 217, 41, 81, 229, 21, 194, 0, 72, 125, 254, 2, 182, 113,
    28, 24, 1, 227, 2, 226, 196, 127, 221, 56, 72, 15, 126, 128, 30,
  ]);

  const message = 'Hello, world!';
  const message2 = new Uint8Array([
    8, 231, 240, 41, 106, 138, 234, 14, 38, 102, 70, 86, 168, 115, 93, 238, 3,
    95, 224, 157, 125, 40, 151, 150, 147, 223, 7, 153, 132, 32, 92, 36,
  ]);

  expect(crypto_auth(message, key)).toEqual(
    new Uint8Array([
      200, 69, 107, 2, 99, 83, 247, 52, 243, 48, 170, 36, 23, 207, 208, 113,
      103, 237, 199, 116, 46, 100, 59, 93, 41, 102, 128, 62, 140, 255, 185, 54,
    ])
  );
  expect(crypto_auth(message2, key)).toEqual(
    new Uint8Array([
      61, 137, 213, 0, 15, 129, 241, 101, 224, 68, 92, 254, 50, 193, 83, 133,
      28, 84, 206, 144, 144, 137, 89, 171, 174, 144, 39, 252, 221, 159, 38, 26,
    ])
  );

  expect(() =>
    crypto_auth(message, new Uint8Array([232, 167, 21, 228]))
  ).toThrow();
});
