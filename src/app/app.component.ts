import { AfterViewInit, Component } from '@angular/core';
const checkInternetConnected = (window as any).require('check-internet-connected');
const uaup = (window as any).require('uaup-js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  connected:number = 0;

  ngAfterViewInit(){
    let download:any = document.getElementById("download");
    let downloadlabel:any = document.getElementById("download-label");
    checkInternetConnected().then(() => {
      this.connected = 0;
      const defaultStages = {
        Checking: "Initialisation",
        Found: "Mise à jour",
        NotFound: "Sychonisation",
        Downloading: "Téléchargement",
        Unzipping: "Installation",
        Cleaning: "Optimisation",
        Launch: "Démarrage"
      };
      const updateOptions = {
        gitUsername: "huihuicloud",
        gitRepo: "hcr_release",
      
        appName: "hcr",
        appExecutableName: "hcr.exe",
      
        progressBar: download,
        label: downloadlabel,
        stageTitles: defaultStages,
      };
      uaup.Update(updateOptions);
    }).catch(() => {
      this.connected = 1;
      this.ngAfterViewInit();
    });
  }
}