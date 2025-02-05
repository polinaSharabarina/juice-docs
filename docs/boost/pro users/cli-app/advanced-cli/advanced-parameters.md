---
title:   'Advanced Parameters'
sidebar_position: 2
---
# Advanced Parameters 

HP’s Boost offers several advanced parameters to fine-tune your GPU sessions and application runs: 

 

## Run Command Options 

- --disable-cache

    Prevents the system from using previously cached data for the current run. Use when you need to ensure fresh data for each run, e.g., when testing data-dependent applications or when data integrity is crucial.  

    **Example**:

    ```powershell
    boost run --disable-cache my_data_processing_app.py 
    ```
 

- --disable-compression

    Turns off data compression between the client and the GPU agent. Useful for applications sensitive to data integrity or when network bandwidth isn't a bottleneck. Can also help in diagnosing data transfer issues. 

    **Example**:

    ```powershell
    boost run --disable-compression my_high_fidelity_image_processing.py 
    ```
 

- --ephemeral

    Creates a new session for the run and immediately releases it after completion. Ideal for one-off tasks or when you need a clean state for each run, preventing any potential interference from previous sessions. 

    **Example**:

    ```powershell
    boost run --ephemeral my_benchmarking_script.py 
    ```
 

- --match-labels &lt;string&gt;

    Filters available GPUs based on specified labels, ensuring the task runs on a GPU with matching attributes. Use when you need to select GPUs with specific characteristics (e.g., GPU type, installed software). 

    **Example**:

    ```powershell
    boost run --match-labels "gpu-type=v100,env=pytorch" my_ml_model.py 
    ```
 

- --no-version-check

    Bypasses the version compatibility check between the client and the GPU agent. Use cautiously when you need to run on potentially incompatible versions, typically in testing environments. 

    **Example**:

    ```powershell
    boost run --no-version-check my_experimental_app.py 
    ```

- --on-connection-error &lt;string&gt;

    Specifies the behavior when a connection error occurs. Options: [fail, continue] Use in scripts or automated workflows where you want to control how the system responds to connection issues. 

    **Example**:

    ```powershell
    boost run --on-connection-error continue my_resilient_app.py 
    ```
 

- --on-queue-timeout &lt;string&gt;

    Defines the action to take when the queue time exceeds the specified limit. Options: [fail, continue] Use in time-sensitive scenarios or when you need to control the behavior of long-waiting jobs. 

    **Example**:

    ```powershell
    boost run --on-queue-timeout continue --queue-timeout 300 my_long_running_job.py 
    ```
 

- --pool-ids &lt;string&gt;

    Restricts GPU selection to specific pools identified by their IDs. Use for resource management in multi-team setups or when you need to use GPUs from particular pools.  

    **Example**:

    ```powershell
    boost run --pool-ids pool1,pool2 my_app.py 
    ```
 

- --queue-timeout &lt;uint&gt;

    Sets the maximum time (in seconds) to wait for GPU availability. Use to prevent indefinite waits in resource-constrained environments or for time-sensitive applications.  

    **Example**:

    ```powershell
    boost run --queue-timeout 600 my_time_sensitive_app.py 
    ```
 

- --tolerates &lt;string&gt;

    Specifies which taints the session can tolerate, allowing use of GPUs with specific constraints. Use when you need to use GPUs that have been marked with certain restrictions or characteristics.

    **Example**:

    ```powershell
    boost run --tolerates "high-priority=true" my_critical_task.py
    ```

## Global Command Options

- --log-file

    Directs CLI output to a specified file instead of standard output. Useful for debugging, creating audit trails, or when you need to review operation logs later.

    **Example**: boost --log-file=/path/to/boost.log run my_app.py


- --log-level

    Sets the verbosity level of logging. Options: debug, info, warn, error, fatal. Adjust for more detailed logs when troubleshooting or less verbose output in production.

    **Example**:

    ```powershell
    boost --log-level debug run my_problematic_app.py 
    ```
 

- --quiet

    Suppresses most output from the CLI. Use in scripts or automated environments where you want to minimize output.

    **Example**:

    ```powershell
    boost --quiet run my_background_task.py 
    ```
 

- --no-banner

    Removes the startup banner from the CLI output. Use in scripts or when you need cleaner output without the banner information.

    **Example**:

    ```powershell
    boost --no-banner run my_app.py 
    ```
 

- --controller

    Specifies a non-default controller URL for the HP Boost system. Use in complex setups with multiple HP Boost environments or when using a custom controller.

    **Example**:

    ```powershell
    boost --controller=https://custom-controller.example.com run my_app.py 
    ```

These advanced parameters provide fine-grained control over HP Boost's behavior, allowing users to optimize their workflows for specific use cases and environments.
