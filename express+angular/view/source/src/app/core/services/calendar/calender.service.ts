import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class CalenderService {

  constructor() {

  }

  public getTodayDateTime(code: string): string{
    if(!code) code = 'en';
    moment.locale(code);
    return moment().format('YYYY-MM-DD h:mm');
  }
}
