---
title:   'Installation'
sidebar_position: 2
---
# Installation

Welcome to juice! This guide will walk you through the installation process.

Before you begin, make sure you have:
- Created an account on juice.com
- Completed the Sign Up process and created an Org
- Administrator privileges on your system
- At least 500MB of free disk space:


![Download links](/img/juice/download_links.png)

### Windows
1. Click on the download link for the Windows release on the juice website.

2. Run the installer and follow the steps outlined in the installation wizard.


### Linux

#### Downloading the juice for Linux requires a few more steps:

1. Click the download link for the Linux release on the juice website. 

    :::note
    Depending on your Linux configuration, you may need to download the file on a different system and transfer it to your intended Linux client system. 
    :::
 
2. Unzip the downloaded file: 

    ```powershell
    tar -xf [juice_linux_release].tar 
    ```

3. Replace ***juice_linux_release.tar*** with the filename of the downloaded archive. 

The juice executable will be selectable in the unzipped directory. 



## (Optional) Adding juice to PATH 

#### To run juice from any directory using the juice command: 

1. Open your shell's configuration file in a text editor:

    ```powershell
    nano ~/.bashrc
    ```

2. Add the following at the end of the file:

    ```powershell
    export PATH=$PATH:/path/to/juice_directory
    ```

3. Replace ***/path/to/juice_directory*** with the actual path to the directory containing the juice executable. 

4. Save and exit the editor. 
    :::tip
    In nano, you can save and exit by pressing Ctrl+X, then Y, then Enter. 
    :::

5. Apply the changes to your current session: 

    ```powershell
    source ~/.bashrc 
    ```

6. After completing these steps, you should be able to run juice by typing ***juice*** in any terminal. 