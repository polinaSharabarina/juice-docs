---
title:   'Running Concurrent Workloads'
sidebar_position: 4
---
# Running Concurrent Workloads 

#### From the desktop application: 

1. Connect to a session.

2. Add multiple application paths.

3. Run multiple applications. 


#### From the CLI in the same pools: 

Use boost run [gpu or pool id] application and repeat for each application.

#### From the CLI in different pools: 

You may wish to use this method if you have multiple applications to run on the same client and no available system has enough GPUs to satisfy the application requirements. 

:::tip
Use
```powershell
boost run [gpu/pool id 1] application
```
followed by 
```powershell
boost run [gpu/pool id 2] application
```
and repeat as many times as necessary. 
:::

 