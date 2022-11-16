import { AfterViewInit, Component } from '@angular/core';

const uaup = (window as any).require('uaup-js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  ngAfterViewInit(){
    const defaultStages = {
      Checking: "Initialisation", // When Checking For Updates.
      Found: "Recherche des mises a jour",  // If an Update is Found.
      NotFound: "Logiciel est a jour", // If an Update is Not Found.
      Downloading: "En cours de telechargement", // When Downloading Update.
      Unzipping: "En cours d'installation", // When Unzipping the Archive into the Application Directory.
      Cleaning: "Optimisation", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
      Launch: "Demarrage" // When Launching the Application. 
    };
    const updateOptions = {
      gitUsername: "huihuicloud",  // [Required] Your GitHub Username.
      gitRepo: "hcr_release", // [Required] Your Repo Name
    
      appName: "hcr", //[Required] The Name of the app archive and the app folder.
      appExecutableName: "hcr.exe", //[Required] The Executable of the Application to be Run after updating.
    
      progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
      label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
      stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
    };
    uaup.Update(updateOptions);
  }
}
