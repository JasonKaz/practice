/// <reference types="@types/jasmine" />

import { justifyText } from "../../../problems/justify-text";

const givenInput: string = "The quick brown fox jumps over the lazy dog.";
const givenLength: number = 52;

describe("justifyText", () => {
  it("Handles string length matching given width", () => {
    expect(justifyText(givenInput, 44)).toEqual("The quick brown fox jumps over the lazy dog.");
    expect(justifyText(`  ${givenInput}   `, 44)).toEqual("The quick brown fox jumps over the lazy dog.");
  });

  it("Handles the space count being a multiple of the difference", () => {
    expect(justifyText(givenInput, givenLength)).toEqual("The  quick  brown  fox  jumps  over  the  lazy  dog.");
    expect(justifyText(givenInput, 60)).toEqual("The   quick   brown   fox   jumps   over   the   lazy   dog.");
  });

  it("Handles rest of cases", () => {
    expect(justifyText(givenInput, 53)).toEqual("The   quick  brown  fox  jumps  over  the  lazy  dog.");
    expect(justifyText(givenInput, 54)).toEqual("The   quick   brown  fox  jumps  over  the  lazy  dog.");
    expect(justifyText(givenInput, 55)).toEqual("The   quick   brown   fox  jumps  over  the  lazy  dog.");
    expect(justifyText(givenInput, 56)).toEqual("The   quick   brown   fox   jumps  over  the  lazy  dog.");
    expect(justifyText(givenInput, 57)).toEqual("The   quick   brown   fox   jumps   over  the  lazy  dog.");
    expect(justifyText(givenInput, 58)).toEqual("The   quick   brown   fox   jumps   over   the  lazy  dog.");
    expect(justifyText(givenInput, 59)).toEqual("The   quick   brown   fox   jumps   over   the   lazy  dog.");
  });

  it("Handles whitespace before or after the sentence", () => {
    expect(justifyText(`  ${givenInput}     `, 52)).toEqual("The  quick  brown  fox  jumps  over  the  lazy  dog."); // Spaces
    expect(justifyText(`    ${givenInput} `, 52)).toEqual("The  quick  brown  fox  jumps  over  the  lazy  dog."); // Tabs
    expect(
      justifyText(
        `
    
    ${givenInput}
    `,
        52
      )
    ).toEqual("The  quick  brown  fox  jumps  over  the  lazy  dog."); // Mixed
  });

  it("Handles text wrapping when the given length is smaller than the sentence", () => {
    expect(justifyText(givenInput, 10)).toEqual(`The  quick
brown  fox
jumps over
the   lazy
dog.      `);
  });
});
