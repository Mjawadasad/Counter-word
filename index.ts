import inquirer from 'inquirer';

// Function to count characters and words
function countCharactersAndWords(paragraph: string): void {
  // Remove whitespaces from the paragraph
  const trimmedParagraph = paragraph.trim();

  // Count characters (excluding whitespaces)
  const charCount = trimmedParagraph.replace(/\s+/g, '').length;

  // Count words
  const wordCount = trimmedParagraph.split(/\s+/).filter(Boolean).length;

  console.log(`Character count (excluding whitespaces): ${charCount}`);
  console.log(`Word count: ${wordCount}`);
}

// Prompt user for input
inquirer.prompt([
  {
    type: 'input',
    name: 'paragraph',
    message: 'Enter an English paragraph:'
  }
]).then(answers => {
  countCharactersAndWords(answers.paragraph);
});
