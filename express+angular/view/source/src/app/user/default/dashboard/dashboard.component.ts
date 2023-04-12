import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert/alert-service';
import { HttpService } from 'src/app/core/services/http/http.service';
import * as _ from 'lodash';
import { AppConfig } from 'src/app/core/app.config';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { CalenderService } from 'src/app/core/services/calendar/calender.service';
import { User } from 'src/app/core/classes/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  users: User[] = [];
  widgets = [
    {
      id: 1,
      label: "Users",
      icon: "ri-team-line",
      link: '',
      counter: 0,
      decimals: 0,
    },
    {
      id: 2,
      label: "Admins",
      icon: "ri-group-line",
      link: '',
      counter: 0,
      decimals: 1
    },
    {
      id: 3,
      label: "SuperAdmin",
      icon: "ri-user-2-line",
      link: '',
      counter: 0,
      decimals: 2,
    }
  ];
  pageApi: string = 'dashboard-sessions/?page=1';
  core: AppConfig = {};
  todayDateTime!: string;
  constructor(
      public alertService: AlertService,
      private httpService: HttpService,
      private configService: ConfigService,
      private calenderService: CalenderService
  ) {

  }

  ngOnInit() {
    this.core = this.configService.appSettingsValues;
    this.onGetDashboard();
    // this.onGendersChart();
    // this.onDevicesChart();
    // this.onGetSessions();
  }



  onGetDashboard(){
    this.todayDateTime = this.calenderService.getTodayDateTime(this.core.selectedLanguage!.code!);
    this.httpService.get('users').then((response: any)=>{
      if(!response.docs) return;
      this.users = response.docs;
      this.widgets[0].counter = this.users.filter(element => element.role === 'USER')!.length??0;
      this.widgets[1].counter = this.users.filter(element => element.role === 'ADMIN')!.length??0;
      this.widgets[2].counter = this.users.filter(element => element.role === 'SUPER_ADMIN')!.length??0;
      document.getElementById('elmLoader')?.classList.add('d-none');
    });
  }




  onDeleteUser(user: User){
    if(this.core.user?.role !== 'SUPER_ADMIN') return;
    if(this.core.user?.id === user.id) return;
    this.httpService.delete(`users/${user.id}`).then((response: any)=>{
      console.log('response', response);
      this.onGetDashboard();
    });
  }

  onEditUser(user: User){
    if(this.core.user?.role !== 'SUPER_ADMIN') return;
    if(this.core.user?.id === user.id) return;
    this.httpService.delete(`users/${user.id}`).then((response: any)=>{
      console.log('response', response);
      this.onGetDashboard();
    });
  }




}
