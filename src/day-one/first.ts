
export class First {

  constructor() {
    let numbers = this.loadFileOfNumbers("src/day-one/fileOfNumbers.txt");
    let count = First.countIncreases(numbers);
    console.log(count);
    let rollingWindow = First.sumOfRollingWindow(numbers, 3);
    console.log(First.countIncreases(rollingWindow));
  }

  public loadFileOfNumbers(fileName: string): number[] {
    const fs = require('fs');
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const numbers = fileContent.split('\n').map(Number);
    return numbers;
  }

  public static sumOfRollingWindow(numbers: number[], windowSize: number): number[] {
    let sum:number[] = []
    for (let i = 0; i < numbers.length-(windowSize-1); i++) {
      let window = numbers.slice(i, i + windowSize);
      sum.push(First.sumOfArray(window));
    }
    return sum;
  }

  public static sumOfArray(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
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