export interface Schedule {
  day: string;
  date: Date;
  today?: boolean;
  cancelled: boolean;
}