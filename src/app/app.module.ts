import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsComponent } from './forms/forms.component';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PhonesComponent } from './phones/phones.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TabletsComponent } from './tablets/tablets.component';
import { WatchesComponent } from './watches/watches.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AirpodsComponent } from './airpods/airpods.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesDetails } from './phones/PhonesDetails/PhonesDetails';
import { LaptopsDetails } from './laptops/LaptopsDetails/LaptopsDetails';
import { WatchesDetails } from './watches/WatchesDetails/WatchesDetails';
import { AccessoriesDetails } from './accessories/AccessoriesDetails/AccessoriesDetails';
import { TabletsDetails } from './tablets/TabletsDetails/TabletsDetails';
import { AirpodsDetails } from './airpods/AirpodsDetails/AirpodsDetails';
import { ActivatedRoute } from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    FormsComponent,
    AboutComponent,
    PhonesComponent,
    LaptopsComponent,
    TabletsComponent,
    WatchesComponent,
    AccessoriesComponent,
    AirpodsComponent,
    PhonesDetails,
    LaptopsDetails,
    TabletsDetails,
    WatchesDetails,
    AccessoriesDetails,
    AirpodsDetails,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgClass,
    NgxImageZoomModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [SearchService]
,
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
