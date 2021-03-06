export interface MonthResultInterface {
	status: string;
	m: number;
	y: number;
	list: MonthDayResultInterface[];
}

export interface MonthDayResultInterface {
	d: number;
	list: DayResultInterface[];
}

export interface DayResultInterface {
	id: number;
	id_person: number;
	people: number[];
}

export interface PeopleListResult {
	[key: string]: PeopleResultInterface;
}

export interface PeopleResultInterface {
	id: number;
	name: string;
	num_coffee: number;
	num_pay: number;
	num_special: number;
	num_special_pay: number;
	color: string;
	did_go: boolean;
}

export interface CalendarDayInterface {
	day: number;
	month: number;
	year: number;
}

export interface DialogOptions {
	title: string;
	content: string;
	ok: string;
	cancel?: string;
}

export interface CoffeeData {
	id: number;
	d: number;
	m: number;
	y: number;
	special: boolean;
	id_pay: number;
	list: number[];
}

export interface StatusResult {
	status: string;
}

export interface DayData {
	status: string;
	d: number;
	m: number;
	y: number;
	id_coffee: number;
	special: boolean;
	id_pay: number;
	list: PeopleResultInterface[];
}

export interface Person {
	id: number;
	name: string;
	color: string;
}

export interface PersonResult {
	status: string;
	id: number;
}

export interface PersonDetailResult {
	status: string;
	id: number;
	name: string;
	color: string;
	list: PersonCoffee[];
}

export interface PersonCoffee {
	id: number;
	d: number;
	m: number;
	y: number;
	special: boolean;
	id_person: number;
}
