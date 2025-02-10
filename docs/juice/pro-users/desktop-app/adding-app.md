---
title:  'Adding an Application'
sidebar_position: 3
---
# Adding an Application

To run an application from the juice desktop app on the client side, you must first add it to the Remote GPU section. The juice desktop application will bridge the remote GPU into any application path you specify.  

**Example:**

If the path **C:\AI** is added to the Remote GPU section, any application that launches from that folder or its subfolders will leverage the connected remote GPU.  

![Select App](/img/juice/select_app.png)

#### To add an application: 

1. Click **Select Applications** on the *Remote GPU Preferences* page. 

2. Add specific applications or entire folders by entering the file path in the space provided. Or, you can click on the blue folder icon to search for assets with the file browse. Click **add** to save the path.

    ![Save Selection](/img/juice/save_select_app.png)

    :::note
    Any application that is listed here - or that has a parent folder listed here - will be launched via the connected remote GPU instead of your local GPU.
    :::


3. Click **Edit** to view, add, or remove listed applications.

    ![Edit Applications](/img/juice/edit_app.png)
