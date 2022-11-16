const uaup = require('uaup-js');

//This is Optional
const defaultStages = {
    Checking: "Initialisation", // When Checking For Updates.
    Found: "Mise a jour disponible",  // If an Update is Found.
    NotFound: "Logiciel est a jour", // If an Update is Not Found.
    Downloading: "En cours de telechargement", // When Downloading Update.
    Unzipping: "En cours d'installation", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Optimisation", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Demarrage" // When Launching the Application.
};

const updateOptions = {
    gitUsername: "huihuicloud",  // [Required] Your GitHub Username.
    gitRepo: "hcr_release", // [Required] Your Repo Name
    isGitRepoPrivate: true,  // {Default is false} [Optional] If the Repo is Private or Public  (Currently not Supported).
    gitRepoToken: "abc123",  // {Default is null} [Optional] The Token from GitHub to Access a Private Repo.  Only for Private Repos.

    appName: "hcr", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "hcr.exe", //[Required] The Executable of the Application to be Run after updating.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};

uaup.Update(updateOptions);