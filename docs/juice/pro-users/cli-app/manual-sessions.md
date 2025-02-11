---
title:   'Manually Managing Sessions'
sidebar_position: 5
---
# Manually Managing Sessions

You can also manage sessions yourself, without the run command. This could prove useful if you want to: 

    - Stay connected to the same GPU across multiple application runs

    - Connect to a specific GPU 

Appending session request to a command will connect you to a GPU in one of your pools, and you will remain connected until you run session release. You can use the session request command to create multiple processes on a single machine.

A client system cannot maintain multiple sessions simultaneously. At any given time it will have one, and only one, *active* session. Trying to request a session while one is already active will result in an error message. 

Use session list to see your current session if any, adding --all to see all sessions in pools you have access to.

### Choosing a Specific GPU

There may be times where you want to make sure you are able to connect to a specific GPU within a pool via the CLI. 

#### To connect to a specific GPU: 

1. Use gpu list to see all GPUs available to you in any of your pools. 

2. Look for a GPU where Used VRAM is 0 B, indicating that it is available.

3. Copy the ID value of the GPU that you want to connect to. 

    :::tip
    Specify the GPU’s ID for the run command using run -–gpu-ids &lt;id&gt; or by requesting a session using session request --gpu-ids &lt;id&gt;.
    :::


### Requesting a Multi-GPU Session 

To specify the number of GPUs you want for a session, you must input the following in the CLI after requesting a session or running an application:

```powershell
--num-gpus <count>
```

The syntax for this is:
```powershell
juice run -–num-gpus 2 <application> 
```

For this to work, you must have multiple shared and available GPUs from the same machine, otherwise you will get an error message.  