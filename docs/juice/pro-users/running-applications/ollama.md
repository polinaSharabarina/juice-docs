---
title:  'Ollama'
sidebar_position: 3
---
# Ollama

When Ollama installs it starts the server locally by default. To run your workload, stop the local server and restart it once the juice session is created. 

## Installation 

Follow the instructions on the [Ollama GitHub page](https://github.com/ollama/ollama) to install Ollama. The default installation paths for Ollama are: 
 

**Windows**: 

- C:\Users\[user]\AppData\Local\Programs\Ollama 

- C:\Users\[user]\.ollama (Models) 


--------------------
### Running Ollama with Juice from the CLI App (Linux, Windows, WSL) 

#### With a single GPU:

    ```powershell
    boost run ollama run <your_parameters>
    ```
    **Example:**
    ```powershell
    boost run ollama run --model mistral-7b-instruct --prompt "What is quantum physics?"
    ```

#### With multiple GPUs:
    ```powershell
    boost run --num-gpus <number_of_gpus> ollama run <your_parameters>
    ```
    **Example**:
    ```powershell
    boost run --num-gpus 2 ollama run --model mistral-7b-instruct --prompt "What is quantum physics?" 
    ```

:::note
- Replace &lt;number_of_gpus&gt; and &lt;gpu_uuid&gt; with the desired values. 

- You can find available GPU IDs using the boost gpu list command. 

- Ensure that Ollama’s server is not running prior to launching with Juice. If it fails to leverage a remote GPU, try exiting the server and relaunching Ollama with the instructions above. 

- Ensure the specified GPUs are available and part of your pool. 

- Refer to the [Juice CLI documentation](/docs/boost/pro%20users/cli-app/cli-app.md) for more advanced run options. 

- On Windows, be sure to add both the Ollama program path, as well as the models folder to your “Applications Selected” path list, if using the desktop application.
:::


--------------------
### Running Ollama with Juice from the Desktop App (Windows Only) 

#### To add Ollama to Juice: 

1. From the Juice home page, navigate to ***Remote GPUs*** and click on **Select Applications**. 

2. Add the path to your Ollama installation directory or the specific Ollama executable, then click **Save**.

    **Example**:

    C:\Users\[user]\AppData\Local\Programs\Ollama

3. Follow steps 6-8 in [Connecting to a remote GPU](/docs/boost/pro%20users/cli-app/remote-gpu.md) to establish a connection with a remote GPU. 

4. Open a new command prompt or terminal window and run Ollama commands as you normally would.

    :::note
    juice automatically uses the configured active path, which is the remote GPU by default.
    :::

:::note 
- Ensure that your Juice session is active and connected to a suitable GPU. 

- The desktop app will use the default GPU settings selected in the app. For more fine-grained control over GPU allocation, use the CLI method.
:::

#### Additional Considerations 

- **Model Download**: Ollama models are downloaded separately. Ensure you have downloaded the desired models before running them. 

- **Resource Requirements**: Large language models can be resource-intensive. Make sure the selected GPUs have sufficient VRAM and processing power for your chosen model. 

This documentation should help get you started. For advanced usage and troubleshooting, please refer to the official [Ollama](https://github.com/ollama/ollama?tab=readme-ov-file) and [Juice documentation](https://zdocs.datascience.hp.com/docs/boost/intro). 

--------------------

## LLAMA.cpp 

We support llama.cpp when built with CUDA.  

Ensure you have the correct version built (I.e. CUDA is activated), then run it like you would any other application with Juice. 

--------------------

## GPT4all 

We support GPT4all similar to any other application. It should be run by either pathing to the install location in the desktop app, or running the application with the CLI. 

```powershell
boost run gpt4all.exe
```

--------------------

## ComfyUI

ComfyUI is supported, but must be run with the following command line argument for optimal performance:

```powershell
--disable-cuda-malloc 
```
Edit ***run_nvidia-gpu.bat*** and add the command above to the command line, or launch with that command line directly:

```powershell
.\python_embeded\python.exe -s ComfyUI\main.py
--windows-standalone-build --disable-cuda-malloc
```

--------------------
## Visual Studio Code (VSCode) 

#### To use Visual Studio Code with a remote GPU in Juice: 

1. Locate your VSCode executable: 

    - **On Windows**: Typically found at %localappdata%\Programs\Microsoft VS Code\Code.exe 

    - **On Linux**: Usually /usr/bin/code or /usr/local/bin/code
 

2. Add the VSCode executable path to Juice: 

    - Open the Juice desktop application.

    - Navigate to ***Remote GPUs***.

    - Click on **Select Applications**.

    - Add the path to your VSCode executable.


3. Connect to a remote GPU session in Juice.

4. Launch VSCode through Juice or directly if it's already configured.

5. Use VSCode normally - the integrated terminal and extensions will now utilize the remote GPU.

 
:::note

- Ensure you add the VSCode executable to Juice before launching the editor.

- All applications run from the VSCode terminal will use the remote GPU. 

- VSCode extensions that leverage GPU acceleration will also use the remote GPU.
:::

This setup allows you to develop and run GPU-accelerated code directly within VSCode, benefiting from the power of the remote GPU for tasks such as machine learning model training, data processing, or GPU-accelerated visualizations.

### Troubleshooting 

- While VSCode is running, your GPU session might timeout if the GPU is not in use, so make sure to either set a longer session timeout in Settings in the Desktop App [link to desktop timeout setting] or start running your workload immediately.  

- Once your session times out, VSCode will not be able to access your local GPU until you restart it. 

- Make sure to close all instances of VSCode before you connect to a Remote GPU in the desktop app or CLI. 