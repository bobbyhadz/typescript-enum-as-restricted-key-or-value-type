export {};

// Example 1 - Use an Enum as Restricted Key or Value type in TypeScript

enum Sizes {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
  ExtraLarge = 'XL',
}

/**
 * 👇️ let values: {S: any; M: any; L: any; XL: any}
 */
let values: { [key in Sizes]: any };

/**
 * 👇️ let keys: {Small: any; Medium: any; Large: any; ExtraLarge: any}
 */
let keys: { [key in keyof typeof Sizes]: any };

// ---------------------------------------------------

// // EXAMPLE 2

// enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
//   ExtraLarge = 'XL',
// }

// /**
//  * 👇️ let values: {S?: any; M?: any; L?: any; XL?: any}
//  */
// let values: { [key in Sizes]?: any };

// values = { M: 'medium' };

// /**
//  * 👇️ let keys: {Small?: any; Medium?: any; Large?: any; ExtraLarge?: any}
//  */
// let keys: { [key in keyof typeof Sizes]?: any };

// keys = { Large: 'large' };
