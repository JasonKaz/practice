/// <reference types="@types/jasmine" />

/* tslint:disable:max-line-length */

import { reverseStringIter, reverseStringIter2, reverseStringRecursive } from "../../../src/problems/reverse-string";

const simpleTest: string = "abc";
const simpleTestExpected: string = "cba";

const complexTest: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.";
const complexTestExpected: string =
  ".cnun ainical missingid deS .orebil ni alugil selados rutibaruC .soeanemih sotpecni rep ,artson aibunoc rep tneuqrot arotil da uqsoicos iticat tnetpa ssalC .allun tege ucra ainical mulubitseV .assam siruaM .atrop repmes eugua des sullet cen ecsuF .siruam tnesearP .muspi sittigas siuD .teidrepmi mutnemele hbin ta mes siuq alluN .isin deS .maid subipad etna susruc deS .orebil tnesearP .oido cen regetnI .tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL";

describe("revserStringIter", () => {
  it("Works", () => {
    expect(reverseStringIter(simpleTest)).toEqual(simpleTestExpected);
    expect(reverseStringIter(complexTest)).toEqual(complexTestExpected);
  });
});

describe("revserStringIter2", () => {
  it("Works", () => {
    expect(reverseStringIter2(simpleTest)).toEqual(simpleTestExpected);
    expect(reverseStringIter2(complexTest)).toEqual(complexTestExpected);
  });
});

describe("revserStringRecursive", () => {
  it("Works", () => {
    expect(reverseStringRecursive(simpleTest)).toEqual(simpleTestExpected);
    expect(reverseStringRecursive(complexTest)).toEqual(complexTestExpected);
  });
});
