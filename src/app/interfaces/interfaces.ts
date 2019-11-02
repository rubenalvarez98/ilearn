export interface Question {
  question: string;
  options: Option;
  correct: number;
}
export interface Option {
  id: number;
  option: string;
}
