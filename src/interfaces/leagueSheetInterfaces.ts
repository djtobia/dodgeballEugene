export interface Headers {
  [index: string]: string;
  court: string;
  round: string;
  team1: string;
  team2: string;
  ref: string;
}

export interface SheetValues {
  majorDimension: string;
  range: string;
  values: string[][];
}

export interface Sheet {
  spreadsheetId: string;
  valueRanges: SheetValues[];
}
