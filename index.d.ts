declare module "data-crypto" {
  export type Bytes = Buffer | number[] | Uint8Array;

  export function binaryToHex(text: string): string; // Binary string like '00011101' to hex representation string '1d'
  export function hexToBinary(text: string): string; // Hex representation string like '1d' to binary representation '00011101'

  export function pinBlock(PAN: string, PIN: string): string;
  export function pinBlockFormat0(PAN: string, PIN: string): string;
  export function pinBlockFormat1(PIN: string | string[]): string;
  export function pinBlockFormat2(PIN: string): string;
  export function pinBlockFormat3(PAN: string, PIN: string | string[]): string;

  export namespace Aes {
    class AES {
      constructor(key: Bytes);
      encrypt(plainText: Bytes): Uint8Array;
      decrypt(cipherText: Bytes): Uint8Array;
    }

    class Counter {
      constructor(initialValue?: number | Buffer);
      increment(): void;
      setBytes(bytes: Bytes): void;
      setValue(value: string | number): void;
    }

    const padding: {
      pkcs7: {
        pad: (data: Bytes) => Uint8Array;
        strip: (data: Bytes) => Uint8Array;
      };
    };

    namespace ModeOfOperation {
      class cbc {
        constructor(key: Bytes, iv?: number[] | Uint8Array);
        encrypt(plainText: Bytes): Uint8Array;
        decrypt(cipherText: Bytes): Uint8Array;
      }

      class cfb {
        constructor(key: Bytes, iv?: number[] | Uint8Array, segmentSize?: number);
        encrypt(plainText: Bytes): Uint8Array;
        decrypt(cipherText: Bytes): Uint8Array;
      }

      class ctr {
        constructor(key: Bytes, counter: Counter);
        encrypt(plainText: Bytes): Uint8Array;
        decrypt(cipherText: Bytes): Uint8Array;
      }

      class ecb {
        constructor(key: Bytes);
        encrypt(plainText: Bytes): Uint8Array;
        decrypt(cipherText: Bytes): Uint8Array;
      }

      class ofb {
        constructor(key: Bytes, iv?: number[] | Uint8Array);
        encrypt(plainText: Bytes): Uint8Array;
        decrypt(cipherText: Bytes): Uint8Array;
      }
    }
  }

  export namespace Des {
    function encrypt(plainTextHex: string, keyHex: string): string;
    function decrypt(cipher: string, keyHex: string): string;
  }

  export namespace TripleDes {
    function encrypt(plainTextHex: string, keyHex: string): string;
    function decrypt(cipher: string, keyHex: string): string;
  }

  export namespace des {
    function encrypt(plainTextHex: string, keyHex: string): string;
    function decrypt(cipher: string, keyHex: string): string;
  }
}
