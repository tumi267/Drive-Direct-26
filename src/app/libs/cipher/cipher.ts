// src/app/libs/cipher/uuid.cipher.ts

const ENCODE_MAP: Record<string, string> = {
    "0": "A",
    "1": "B",
    "2": "C",
    "3": "D",
    "4": "E",
    "5": "F",
    "6": "G",
    "7": "H",
    "8": "I",
    "9": "J",
  
    a: "K",
    b: "L",
    c: "M",
    d: "N",
    e: "O",
    f: "P",
  
    "-": "Q",
  }
  
  const DECODE_MAP: Record<string, string> = Object.entries(
    ENCODE_MAP
  ).reduce((acc, [key, value]) => {
    acc[value] = key
    return acc
  }, {} as Record<string, string>)
  
  /**
   * Converts a UUID into letters only.
   *
   * Example:
   * 06e1ff75-e10a
   * ↓
   * AGOBPPHFOBAK
   */
  export function encodeUUID(uuid: string): string {
    return uuid
      .toLowerCase()
      .split("")
      .map((char) => {
        const encoded = ENCODE_MAP[char]
  
        if (!encoded) {
          throw new Error(
            `Unsupported UUID character: ${char}`
          )
        }
  
        return encoded
      })
      .join("")
  }
  
  /**
   * Restores the original UUID.
   */
  export function decodeUUID(value: string): string {
    return value
      .split("")
      .map((char) => {
        const decoded = DECODE_MAP[char]
  
        if (!decoded) {
          throw new Error(
            `Unsupported encoded character: ${char}`
          )
        }
  
        return decoded
      })
      .join("")
  }