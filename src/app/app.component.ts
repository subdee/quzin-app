import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen, Push, Device} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {TranslateService} from "ng2-translate";
import {ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {ApiService} from "./services/api.service";


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [ApiService]
})
export class QuzinApp {
  rootPage = TabsPage;
  @ViewChild(Nav) nav;

  constructor(platform: Platform, private translate: TranslateService, api: ApiService) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      let push = Push.init({
        android: {
          senderID: "260654349608"
        }
      });

      push.on('registration', (data) => {
        console.log("device token ->", data.registrationId);
        api.saveDeviceId(Device.device.uuid, data.registrationId).subscribe(data => {
          console.log('registered on server');
        });
      });
      push.on('notification', (data) => {
        console.log('message', data.message);
        this.nav.push(ShoppingListPage);
      });
      push.on('error', (e) => {
        console.log(e.message);
        alert(e.message);
      });
    });
    this.translate = translate;
    this.translateConfig();
  }

  translateConfig() {
    var userLang = navigator.language.split('-')[0];
    userLang = /(el)/gi.test(userLang) ? userLang : 'el';
    this.translate.setDefaultLang('el');
    this.translate.use(userLang);
  }
}
