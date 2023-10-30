declare module "data-crypto" {
  export function binaryToHex(text: any): any;

  export function hexToBinary(text: any): any;

  export function pinBlock(PAN: any, PIN: any): any;

  export function pinBlockFormat0(PAN: any, PIN: any): any;

  export function pinBlockFormat1(PIN: any): any;

  export function pinBlockFormat2(PIN: any): any;

  export function pinBlockFormat3(PAN: any, PIN: any): any;

  export namespace Aes {
    class AES {
      constructor(...args: any[]);

      decrypt(...args: any[]): void;

      encrypt(...args: any[]): void;
    }

    class Counter {
      constructor(...args: any[]);

      increment(...args: any[]): void;

      setBytes(...args: any[]): void;

      setValue(...args: any[]): void;
    }

    const padding: {
      pkcs7: {
        pad: any;
        strip: any;
      };
    };

    namespace ModeOfOperation {
      class cbc {
        constructor(...args: any[]);

        decrypt(...args: any[]): void;

        encrypt(...args: any[]): void;
      }

      class cfb {
        constructor(...args: any[]);

        decrypt(...args: any[]): void;

        encrypt(...args: any[]): void;
      }

      class ctr {
        constructor(...args: any[]);

        decrypt(...args: any[]): void;

        encrypt(...args: any[]): void;
      }

      class ecb {
        constructor(...args: any[]);

        decrypt(...args: any[]): void;

        encrypt(...args: any[]): void;
      }

      class ofb {
        constructor(...args: any[]);

        decrypt(...args: any[]): void;

        encrypt(...args: any[]): void;
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
