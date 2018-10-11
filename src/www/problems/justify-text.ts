// Input: justify("The quick brown fox jumps over the lazy dog.", 52)

/**
 * Justifies a line of text into a given line length
 * @param text The line of text to justify
 * @param lineLength The line length to justify to
 */
function justifyText(text: string, lineLength: number): string {
  const trimmedLine: string = text.trim();

  // Direct match, just return
  if (trimmedLine.length === lineLength) {
    return trimmedLine;
  }

  if (trimmedLine.length > lineLength) {
    // Wraps sentence to newline. Ugly implementation, will split words to wrap them, can improve.

    // Split sentence in given lineLength chunks
    const sentenceParts: RegExpMatchArray | null = trimmedLine.match(new RegExp(`.{1,${lineLength}}`, "g"));

    // Map over each chunk and apply the justifyText function
    return sentenceParts !== null ? sentenceParts.map((x: string) => justifyText(x, lineLength)).join("\n") : "";
  }

  const spaceCount: number = (trimmedLine.match(/ /g) || []).length;

  if (spaceCount === 0) {
    return trimmedLine;
  }

  const diff: number = lineLength - trimmedLine.length;
  const multiple: number = Math.floor(diff / spaceCount) + 1; // How may spaces to put between each word
  const extra: number = diff % spaceCount; // How many extra spaces needed to reach the necessary length
  const words: string[] = trimmedLine.split(" ");

  // Add the number of extra spaces necessary to the end of words
  const wordsWithExtraSpaces: string[] = words.map((word: string, idx: number) => (idx < extra ? `${word} ` : word));

  // Combine the parts by joining with an equal number of space between each word
  return wordsWithExtraSpaces.join(new Array(multiple + 1).join(" "));
}

export { justifyText };
