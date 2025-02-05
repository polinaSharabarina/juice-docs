export const WINDOWS_URL = 'https://repos.datascience.hp.com/stackman/windows/Z.by.HP.Data.Science.Stack.Manager-1.6.0.exe';
export const WINDOWS_DOCUMENTID = 'Z.by.HP.Data.Science.Stack.Manager-1.6.0';
export const LINUX_URL = 'https://repos.datascience.hp.com/stackman/ubuntu/focal/amd64/stackman_1.6.0_amd64.deb';
export const LINUX_DOCUMENTID = 'stackman_1.6.0_amd64';


export const AIStudioDownloadInfo = async () => {
  const cloudfrontURL = 'https://d23vv7d0b47qx0.cloudfront.net'
  const response = await fetch(`${cloudfrontURL}/releases.json`,
    {
      headers: {
        "Cache-Control": "no-cache",
      }
    }
  );
  try {
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const windowsInstallerFilename = data.latest.windows.file_name;
      const ubuntuInstallerFilename = data.latest.ubuntu.file_name;
      const windowsInstallerPath = data.latest.windows.path;
      const ubuntuInstallerPath = data.latest.ubuntu.path;
      const AIWindowsURL = `${cloudfrontURL}/${windowsInstallerPath}/${windowsInstallerFilename}`;
      const AIUbuntuURL = `${cloudfrontURL}/${ubuntuInstallerPath}/${ubuntuInstallerFilename}`;
      const AIWindowsID = data.latest.windows.file_name.replace(/\.[^/.]+$/, "");
      const AIUbuntuID = data.latest.ubuntu.file_name.replace(/\.[^/.]+$/, "");
      var fileNameRegex = /(?:\.([^.]+))?$/;
      const AIWindowsDocumentType = fileNameRegex.exec(windowsInstallerFilename)[1];
      const AIUbuntuDocumentType = fileNameRegex.exec(ubuntuInstallerFilename)[1];
      const AIDownloadList = [{
        os: "Windows",
        title: 'Windows',
        logoTitle: "Windows",
        logo: windowsLogo,
        url: './docs/aistudio/setup/installation',
        documentID: AIWindowsID,
        documentType: AIWindowsDocumentType,
        description: ".msi installer for Windows 10/11",
        href: AIWindowsURL,
      },
      // TODO: Update Linux info when released
      {
        os: "Linux",
        title: 'Ubuntu',
        logoTitle: "Ubuntu",
        logo: ubuntuLogo,
        url: './docs/aistudio/setup/installation',
        documentID: AIUbuntuID,
        documentType: AIUbuntuDocumentType,
        description: ".deb for Ubuntu 22.04 LTS",
        href: AIUbuntuURL,
      },];

      return AIDownloadList;
    }
    if (!response.ok) {
      console.log(response);
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

import windowsLogo from "./img/window-logo.png";
import ubuntuLogo from "./img/ubuntu.png";

export const SMDownloadList = [
  {
    os: "Windows",
    title: "Windows",
    logoTitle: "Windows",
    logo: windowsLogo,
    url: "./docs/stackmanager/setup/install-stackman#windows-1011",
    documentID: WINDOWS_DOCUMENTID,
    documentType: "exe",
    description: ".exe installer for Windows 10/11",
    href: WINDOWS_URL,
  },
  {
    os: "Linux",
    title: "Ubuntu",
    logoTitle: "Ubuntu",
    logo: ubuntuLogo,
    url: "./docs/stackmanager/setup/install-stackman#ubuntu-200422042404-lts",
    documentID: LINUX_DOCUMENTID,
    documentType: "deb",
    description: ".deb for Ubuntu 20.04/22.04/24.04 LTS",
    href: LINUX_URL,
  },
];

export const AIStudioLoadingDownloadList = [{
  os: "Windows",
  disabled: true,
  info: 'Loading...',
  title: 'Loading...',
  logoTitle: "Windows",
  logo: windowsLogo,
  url: './docs/aistudio/setup/installation',
  documentID: '',
  documentType: '',
  description: ".msi installer for Windows 10/11",
  href: '',
},
{
  os: "Linux",
  disabled: true,
  info: 'Loading...',
  title: 'Loading...',
  logoTitle: "Ubuntu",
  logo: ubuntuLogo,
  url: './docs/aistudio/setup/installation',
  documentID: '',
  documentType: '',
  description: ".deb for Ubuntu 22.04 LTS",
  href: '',
},];
