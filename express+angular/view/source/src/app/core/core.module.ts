import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NumberDirective } from './directive/input/number.directive';
import { ImageValidateDirective } from './directive/imageValidate/image-validate.directive';
import { NgbRatingModule, NgbPaginationModule, NgbDropdownModule, NgbAccordionModule, NgbNavModule, NgbTypeaheadModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { WidgetModule } from 'src/app/core/components/widget/widget.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { AlertContainerComponent } from './components/alert/alert-container.component';
import { FooterAccountComponent } from './components/footer/footer-account/footer-account.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { CorePipesModule } from 'src/app/core/pipes/pipes.module';
import { TagCloudComponent } from 'angular-tag-cloud-module';
import { ScrollspyDirective } from 'src/app/core/directive/scroll/scrollspy.directive';
import { NgxMaskModule } from 'ngx-mask';
import { BreadcrumbsComponent } from 'src/app/core/components/breadcrumbs/breadcrumbs.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { LightboxModule } from 'ngx-lightbox';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    FooterAccountComponent,
    NumberDirective,
    ImageValidateDirective,
    ScrollspyDirective,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
    AlertContainerComponent,
    TranslateModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbNavModule,
    NgbTypeaheadModule,
    FlatpickrModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgbRatingModule,
    NgApexchartsModule,
    CorePipesModule,
    TagCloudComponent,
    NgbAccordionModule,
    SwiperModule,
    CountToModule,
    NgbTooltipModule,
    LightboxModule,
    LeafletModule,
    NgSelectModule,
    Ng2SearchPipeModule
  ],
  exports: [
    NgbDropdownModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
    NgbTooltipModule,
    NgbToastModule,
    NgbPaginationModule,
    AlertContainerComponent,
    TranslateModule,
    NgbTypeaheadModule,
    FooterAccountComponent,
    NumberDirective,
    ImageValidateDirective,
    WidgetModule,
    CountToModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    CorePipesModule,
    TagCloudComponent,
    ScrollspyDirective,
    NgxMaskModule,
    BreadcrumbsComponent,
    SwiperModule,
    LightboxModule,
    LeafletModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgbAccordionModule,
    FlatpickrModule,
    NgbRatingModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
