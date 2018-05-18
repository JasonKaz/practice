// Input: justify("The quick brown fox jumps over the lazy dog.", 52)

function justifyText(line: string, width: number): string {
  const trimmedLine: string = line.trim();

  // Direct match, just return
  if (trimmedLine.length === width) {
    return trimmedLine;
  }

  if (trimmedLine.length > width) {
    // Wrap sentence to newline? No directions given for scenario, making assumptions.
    // Ugly implementation, will split words to wrap them, can improve

    // Split sentence in given width chunks
    const expr: RegExp = new RegExp(`.{1,${width}}`, "g");
    const sentenceParts: RegExpMatchArray | null = trimmedLine.match(expr);
    let sentenceWithNewlines: string = "";

    if (sentenceParts !== null) {
      sentenceWithNewlines = sentenceParts.map((x: string) => justifyText(x, width).trim()).join("\n");
    }

    return sentenceWithNewlines;
  }

  const startStrLen: number = trimmedLine.length;
  const diff: number = width - startStrLen;
  const spaceCount: number = (trimmedLine.match(/ /g) || []).length;

  /*
   * If the amount of spaces in the line is a multiple of the width
   * then just multiply the amount of existing spaces.
   * Optimal scenario with simple solution, return fast.
   */
  if (diff % spaceCount === 0) {
    // How many spaces should be between each word
    const multiple: number = diff / spaceCount + 1;

    // Replace single space with the multiple spaces
    return trimmedLine.split(" ").join(new Array(multiple + 1).join(" "));

    // Originally had this, but during speed testing I found it was about
    // 20% slower than the above method, when n = 1000000
    //return trimmedLine.replace(/ /g, new Array(multiple + 1).join(" "));
  }

  /**
   * The rest of the function will loop through each word in the
   * sentence and append a space to each until it has reached the
   * desired length in order to keep the words as evenly spaced
   * as possible.
   */

  // Split the sentence by space, maintaining the existing spaces
  const words: string[] = trimmedLine.split(" ");

  // Loop through every word and append a new space
  let idx: number = 0;
  for (let i: number = 0; i < diff + spaceCount; i++) {
    words[idx++] += " ";

    // If reached end of sentence then loop back around
    // Ignore last word
    if (idx >= words.length - 1) {
      idx = 0;
    }
  }

  // Combine the parts into the full justified sentence
  return words.join("");
}

export { justifyText };
