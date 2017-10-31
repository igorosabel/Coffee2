export interface MonthResult {
  status: string;
  m: number;
  y: number;
  list: MonthDayResult[];
}

export interface MonthDayResult {
	d: number;
	id_person: number;
	people: number[];
}


export interface PeopleListResult {
  [key: string]: PeopleResult
}

export interface PeopleResult {
  id: number;
  name: string;
  num_coffee: number;
  num_pay: number;
  num_special: number;
  num_special_pay: number;
  color: string;
  did_go: boolean;
}

export interface CalendarDay {
	day: number;
	month: number;
	year: number;
}