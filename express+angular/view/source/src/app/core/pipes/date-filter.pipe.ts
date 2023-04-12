import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { ConfigService } from 'src/app/core/services/config/config.service';

@Pipe({
    name: 'dateFilter'
})

export class DateFilterPipe implements PipeTransform {
    constructor(
        private configService: ConfigService
    ) {
    }
    transform(data: any, type: string): any {
        let code = this.configService.appSettingsValues?.selectedLanguage?.code;
        if(code) moment.locale(code);
        else moment.locale('en');
        if(type==='monthText')  return moment(data, 'YYYY-MM-DD').format('MMM');
        if(type==='dayNumber')  return moment(data, 'YYYY-MM-DD').format('DD');
        if(type==='DayName')  return moment(data, 'YYYY-MM-DD').format('dddd');
        if(type==='Week')  return moment(data, 'YYYY-MM-DD').format('ddd');
        if(type==='time12') return moment(data, 'HH:mm').format('h:mm A');
        if(type==='time12NoAM') return moment(data, 'HH:mm').format('h:mm');
        if(type==='AMPM') return moment(data, 'HH:mm').format('A');
        if(type==='fullDateText') return moment(data).format('YYYY-MM-DD h:mm A');
        if(type==='DayAsNumber') return moment(data, 'YYYY-MM-DD').format('MMM DD, YY');
        if(type==='FullTime') return moment(data).format('hh:mm A');
        if(type==='CrateAt') return moment().to(data);
        if(type==='DateTo') return moment().to(data);
    }
}