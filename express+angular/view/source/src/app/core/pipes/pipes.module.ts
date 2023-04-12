import { NgModule } from '@angular/core';

import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
import { InitialsPipe } from 'src/app/core/pipes/initials.pipe';
import { SafePipe } from 'src/app/core/pipes/safe.pipe';
import { StripHtmlPipe } from 'src/app/core/pipes/stripHtml.pipe';
import { DateFilterPipe } from 'src/app/core/pipes/date-filter.pipe';



@NgModule({
  declarations: [InitialsPipe, FilterPipe, StripHtmlPipe, SafePipe, DateFilterPipe],
  imports: [],
  exports: [InitialsPipe, FilterPipe, StripHtmlPipe, SafePipe, DateFilterPipe]
})
export class CorePipesModule {}
