import { Component, OnInit } from '@angular/core';
import { AdmobfreeService } from '../service/admobfree.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private admobFreeService: AdmobfreeService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.admobFreeService.showBannerAd();
    }, 5000);
  }

  showInterstitialAd(){
    this.admobFreeService.showInterstitialAd();
  }

}
