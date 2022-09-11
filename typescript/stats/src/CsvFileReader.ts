import fs = require("fs");

export default abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match: string): string[] => {
        return match.split(",");
      })
      .map(this.mapRow);
  }
}
