import {
  _unstable_crypto_kdf_hkdf_sha256_BYTES_MAX,
  _unstable_crypto_kdf_hkdf_sha256_BYTES_MIN,
  _unstable_crypto_kdf_hkdf_sha256_KEYBYTES,
  crypto_aead_xchacha20poly1305_ietf_KEYBYTES,
  crypto_auth_BYTES,
  crypto_auth_KEYBYTES,
  crypto_box_PUBLICKEYBYTES,
  crypto_box_SECRETKEYBYTES,
  crypto_box_SEEDBYTES,
  crypto_kdf_CONTEXTBYTES,
  crypto_kdf_KEYBYTES,
  crypto_secretbox_KEYBYTES,
  crypto_secretbox_NONCEBYTES,
  crypto_sign_SEEDBYTES,
  crypto_pwhash_ALG_ARGON2ID13,
} from '@more-tech/react-native-libsodium';
import { expect, test } from '../utils/testRunner';

test('constants', () => {
  expect(crypto_auth_BYTES).toEqual(32);
  expect(crypto_auth_KEYBYTES).toEqual(32);
  expect(crypto_secretbox_KEYBYTES).toEqual(32);
  expect(crypto_secretbox_NONCEBYTES).toEqual(24);
  expect(crypto_box_PUBLICKEYBYTES).toEqual(32);
  expect(crypto_box_SECRETKEYBYTES).toEqual(32);
  expect(crypto_box_SEEDBYTES).toEqual(32);
  expect(crypto_aead_xchacha20poly1305_ietf_KEYBYTES).toEqual(32);
  expect(crypto_kdf_KEYBYTES).toEqual(32);
  expect(crypto_kdf_CONTEXTBYTES).toEqual(8);
  expect(crypto_sign_SEEDBYTES).toEqual(32);
  expect(_unstable_crypto_kdf_hkdf_sha256_KEYBYTES).toEqual(32);
  expect(_unstable_crypto_kdf_hkdf_sha256_BYTES_MIN).toEqual(0);
  expect(_unstable_crypto_kdf_hkdf_sha256_BYTES_MAX).toEqual(8160);
  expect(crypto_pwhash_ALG_ARGON2ID13).toEqual(2);
});
