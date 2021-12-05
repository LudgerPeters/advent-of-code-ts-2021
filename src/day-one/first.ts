
export class First {

  constructor() {
    let numbers = this.loadFileOfNumbers("src/day-one/fileOfNumbers.txt");
    let count = First.countIncreases(numbers);
    console.log(count);
  }

  public loadFileOfNumbers(fileName: string): number[] {
    const fs = require('fs');
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const numbers = fileContent.split('\n').map(Number);
    return numbers;
  }

  public static countIncreases(input: number[]): number {
    let count = 0;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] < input[i + 1]) {
        count++;
      }
    }
    return count;
  }
}