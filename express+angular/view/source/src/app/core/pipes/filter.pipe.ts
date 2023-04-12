import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], query: string): any[] {
    return _.filter(array, row => row.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.screen_name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }
}
