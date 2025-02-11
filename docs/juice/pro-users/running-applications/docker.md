---
title:  'Docker'
sidebar_position: 1
---
# Docker

You can run the Juice client within a Docker container to leverage remote GPUs managed by juice without installing the entire agent on your host machine. 

 
## Prerequisites 

- **Docker**: Ensure you have Docker installed and running on your system. 


- **Active Account**: You'll need an active Juice account and access to a pool with available GPUs. 

 
- **M2M Token**: Generate an M2M token from your juice account to enable automated login within the container. See the [Machine-to-Machine (M2M) Tokens](/docs/juice/pro-users/cli-app/m2m-tokens.md) section of the Juice (Pro) User Guide for instructions. 

 

- **Juice Tarball**: Download the latest juice Linux tarball from juicelabs.co.

### To use juice in Docker: 

1. Create a file [Dockerfile] in your working directory.

    #### Example
    
    ```powershell
    # Use Ubuntu 24.04 as the base image 

    FROM ubuntu:24.04 

    

    # Install necessary packages 

    RUN apt-get update && \ 

        apt-get upgrade -y && \ 

        DEBIAN_FRONTEND=noninteractive apt-get install -y \ 

        ca-certificates \ 

        libnuma1 \ 

        libatomic1 && \ 

        rm -rf /var/lib/apt/lists/* 

    

    # Set working directory inside the container 

    WORKDIR /root 

    

    # Copy the juice tarball and the run script 

    COPY boost-linux.tar.gz . 

    COPY --chown=ubuntu:ubuntu --chmod=777 run.sh . 

    

    # Convert run.sh to Unix line endings 

    RUN sed -i 's/\r//' run.sh 

    

    # Verify the integrity of the BOOST tarball 

    RUN echo "a08df200b8b78f54c37f9e330ee9a5537865f57efa168af7980bb8ade3d26e97 boost-linux.tar.gz" | sha256sum -c - && \ 

        tar -xvf boost-linux.tar.gz  

    

    # Define the entry point for the container 

    ENTRYPOINT ["/bin/bash", "-c", "/root/run.sh ${@}", "--"] 
    ```

2. Create a file named run.sh in the same directory as your [Dockerfile] with the following contents:

    ```powershell
    #!/bin/bash 

 

   # Check if at least one argument is provided (M2M token) 

   if [ $# -eq 0 ]; then 

       echo "Usage: $0 <m2m_token> [run_args...]" 

       exit 1 

   fi 

 

   # The first argument is the M2M token 

   m2m_token="$1" 

 

   # Shift the arguments to remove the M2M token 

   shift 

 

   # Log in to juice using the M2M token 

   ./boost login --token "$m2m_token" 

 

   # Execute the juice run command with the remaining arguments 

   ./boost run "$@" 
    ```

3. Open a terminal, navigate to the directory containing your [Dockerfile], run.sh, and execute the following command: 

    ```powershell
    docker build -t boost-client . 
    ```
    :::note

    This command builds a Docker image named boostclient using the instructions in your [Dockerfile].

    :::

4. Once the image is built, you can run a container using your M2M token and desired juice run arguments:

    ```powershell
    docker run -it boost-client <your_m2m_token> <boost_run_args>
    ```
    :::tip
    
    Replace &lt;your_m2m_token&gt; with your actual M2M token. Replace &lt;boost_run_args&gt; with the desired arguments for the juice run command (i.e. --pool-ids, --gpu-ids, etc.).

    :::

    #### Example
    ```powershell
    docker run -it boost-client m2m_e6q_87LwpLY1dwh4FpX --pool-ids <your_pool_id> bash  


    # This command launches an interactive container, logs in using your M2M token, and executes the bash command inside the container. You can replace bash with any other juice command or application you want to run remotely. 
    ```

Applications and commands executed within the container utilize the remote GPU resources provided by juice. Refer to the [juice User Guide] for detailed information about available commands, options, and troubleshooting.
