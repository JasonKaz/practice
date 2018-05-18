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
      sentenceWithNewlines = sentenceParts.map((x: string) => justifyText(x, width)).join("\n");
    }

    return sentenceWithNewlines;
  }

  const spaceCount: number = (trimmedLine.match(/ /g) || []).length;

  if (spaceCount === 0) {
    return trimmedLine;
  }

  const diff: number = width - trimmedLine.length;
  const multiple: number = Math.floor(diff / spaceCount) + 1; // How may spaces to put between each word
  const extra: number = diff % spaceCount; // How many spaces to append bewteen words in the whole sentence
  const words: string[] = trimmedLine.split(" ");

  // Loop through every word and append a new space, should not loop to
  let idx: number = 0;
  for (let i: number = 0; i < extra; i++) {
    words[idx++] += " ";
  }

  // Combine the parts by joining with an equal number of space between each word
  return words.join(new Array(multiple + 1).join(" "));
}

export { justifyText };
