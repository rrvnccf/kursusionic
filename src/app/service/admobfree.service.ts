import { Injectable } from '@angular/core';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true, // Remove in production
    autoShow: false,
    id: "ca-app-pub-6622621923937721/1936863628"
};

  constructor(
    private admobFree: AdMobFree,
    public platform: Platform
  ) {
    platform.ready().then(() => {
      this.admobFree.interstitial.config(this.interstitialConfig);
      this.admobFree.interstitial.prepare()
        .then(() => { }).catch(e => alert(e));
    });
    
    this.admobFree.on('admob.interstisial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => {}).catch(e => alert(e));
    });
   }
   showBannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true,
        bannerAtTop: false,
        id: "ca-app-pub-6622621923937721/7308609802"
    };
    this.admobFree.banner.config(bannerConfig);
  
    this.admobFree.banner.prepare().then(() => {
        // success
    }).catch(e => alert(e));
  }

  showInterstitialAd() {
    this.admobFree.interstitial.isReady().then(() => {
      this.admobFree.interstitial.show().then(() => {
      })
        .catch(e =>alert("show "+e));
    })
      .catch(e =>alert("isReady "+e));
  }
}
