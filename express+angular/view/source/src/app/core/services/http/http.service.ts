import {Injectable, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert/alert-service';
import { ConfigService } from 'src/app/core/services/config/config.service';



@Injectable({
  providedIn: 'root'
})

export class HttpService implements OnInit{
    isAlertOpen: boolean = false;
    api: string = 'http://localhost:3000/api/';
  constructor(
      private http: HttpClient,
      private alertService: AlertService,
      private configService: ConfigService
  ) {


  }

    ngOnInit() {

    }


  async auth(url: string, body: object) {
    return new Promise((resolve, reject) => this.http.post('http://localhost:3000/'+url, body).pipe(catchError(this.handleError), map(this.handleResponse)).subscribe((response: any) => {
      console.log('response', response);
      if(!response.success && response.message) {
        if(this.isAlertOpen) return;
        else {
          this.isAlertOpen = true;
          return this.alertService.openModal({ message: response.message, title: 'Message'});
        }
      } else resolve(response);

    }));
  }

    async get(url: string) {
        return new Promise((resolve, reject) => this.http.get(this.api+url).pipe(catchError(this.handleError), map(this.handleResponse)).subscribe((response: any) => {
          console.log(response);
            if(!response.success && response.message === 'Unauthorized' || response === 'Unauthorized') return this.configService.clearAppConfig();
            if(response) resolve(response);
        }));
    }

    async post(url: string, body: object) {
        return new Promise((resolve, reject) => this.http.post(this.api+url, body).pipe(catchError(this.handleError), map(this.handleResponse)).subscribe((response: any) => {
            if(!response.success && response.message === 'Unauthorized') return this.configService.clearAppConfig();
            if(typeof response == 'string' && response === 'Unauthorized') {
                if(this.isAlertOpen) return;
                else {
                    this.isAlertOpen = true;
                    this.alertService.openModal({ message: 'Please Login Again', title: 'Unauthorized', closeBtn: 'Login', type: 'route'});
                }
            } else resolve(response);

        }));
    }


    async put(url: string, body: object) {
        return new Promise((resolve, reject) => this.http.put(this.api+url, body).pipe(catchError(this.handleError), map(this.handleResponse)).subscribe((response: any) => {
            if(!response.success && response.message === 'Unauthorized') return this.configService.clearAppConfig();
            if(typeof response == 'string' && response === 'Unauthorized') return this.configService.clearAppConfig();
            if(response) resolve(response);
        }));
    }
    async delete(url: string) {
        return new Promise((resolve, reject) => this.http.delete(this.api+url).pipe(catchError(this.handleError), map(this.handleResponse)).subscribe((response: any) => {
            if(response) resolve(response);
        }));
    }

    async getPaginate(url: string) {
        return new Promise((resolve, reject) => this.http.get(this.api+url).pipe(catchError(this.handleError), map(this.handleResponse)).subscribe((response: any) => {
            if(!response.success && response.message === 'Unauthorized') return this.configService.clearAppConfig();
            if(response) resolve(response);
        }));
    }

    protected handleError(error: HttpErrorResponse) {
        console.log('-------------------------------------------------------');
        console.log('[SERVER]->[status]->[', error.status, ']');
        console.log('[SERVER]->[ERROR]->[', error, ']');
        console.log('-------------------------------------------------------');
        if (error.status === 401) return of({message: 'Unauthorized', success: false});
        if (error.status === 0 && !error.ok) return of( 'Unauthorized');
        // return of('error');
        return of(error.error);
    }
    protected handleResponse(response: any) : any{
        // console.log('-------------------------------------------------------');
        // console.log('[SERVER]->[RESPONSE]->[', response, ']');
        // console.log('-------------------------------------------------------');
        return response;
    }


}
