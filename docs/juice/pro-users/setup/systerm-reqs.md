---
title:   'System Requirements'
sidebar_position: 1
---
# System Requirements


### Windows

Both the Client and GPU Agent are supported on Windows 10 and Windows 11. 


### Linux

The client and GPU agent are supported on Debian based distributions on version 11 and greater (like Ubuntu 20.04). Other distributions with a similar or newer release date or newer are also supported. 

:::note
Currently, only the client is supported when running in WSL on Windows.
:::


:::note
Graphical apps are currently only supported on Windows clients. Both Linux and Windows agents support graphics.
:::


## Client Prerequisites for Running Applications

### Windows 

- Windows 10 or Windows 11 

If you're running on a virtual machine with graphics drivers that don't support Vulkan, you must install the [Vulkan Runtime](https://sdk.lunarg.com/sdk/download/latest/windows/vulkan-runtime.exe) separately.


### Linux 

- Ubuntu 20.04 or greater, Debian 11 or greater 

 

- The following packages must be installed: 

    - libatomic1 

    - libnuma1 

    :::tip
    These packages can be installed by running the command: 
        
        ```powershell
        apt update && apt install libatomic1 libnuma1
        ```
    :::


## Agent Device Prerequisites for GPU Hosting

On all platforms an NVIDIA GPU with an installed driver version 535 or greater, and a CUDA driver version 12.2 through to 12.7. 

### Windows 

- Windows 10 or 11 

### Linux s

- Ubuntu 20.04 or greater, Debian 11 or greater 

- The following packages must be installed: 

    - libatomic1 

    - libnuma1 

    - libvulkan1 

    - libgl1 

    - libglib2.0-0 


    :::tip
    These packages can be installed by running the command: 
        
        ```powershell
        apt update && apt install libvulkan1 libgl1 libglib2.0-0 libatomic1 libnuma1
        ```
    :::

 