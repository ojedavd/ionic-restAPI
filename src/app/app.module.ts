import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { InsertPage } from '../pages/insert/insert';
import { EditPage } from '../pages/edit/edit';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InsertPage,
    EditPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditPage,
    InsertPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestapiServiceProvider
  ]
})
export class AppModule {}
