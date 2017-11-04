import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import {
  MonthResult,
  MonthDayResult,
  PeopleListResult,
  PeopleResult,
  CoffeeData,
  StatusResult,
  CalendarDay,
  DayData
} from '../interfaces/interfaces';

@Injectable()
export class ApiService {

  constructor(private http : HttpClient){}

  getMonth(month: number, year: number): Observable<MonthResult> {
    return this.http.post<MonthResult>('https://coffee.osumi.es/api/coffee/get-month', {month, year});
  }
  
  getPeople(): Observable<PeopleListResult> {
    return this.http.post<PeopleListResult>('https://coffee.osumi.es/api/person/get-people', {});
  }
  
  saveCoffee(coffeData: CoffeeData): Observable<StatusResult> {
    return this.http.post<StatusResult>('https://coffee.osumi.es/api/coffee/save', coffeData);
  }
  
  getDay(day: CalendarDay): Observable<DayData> {
    return this.http.post<DayData>('https://coffee.osumi.es/api/get-day', day);
  }
  
  deleteCoffee(id: number): Observable<StatusResult> {
    return this.http.post<StatusResult>('https://coffee.osumi.es/api/coffee/delete', {id});
  }
}