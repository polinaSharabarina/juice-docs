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
    juice run ollama run <your_parameters>
    ```
    **Example:**
    ```powershell
    juice run ollama run --model mistral-7b-instruct --prompt "What is quantum physics?"
    ```

#### With multiple GPUs:
    ```powershell
    juice run --num-gpus <number_of_gpus> ollama run <your_parameters>
    ```
    **Example**:
    ```powershell
    juice run --num-gpus 2 ollama run --model mistral-7b-instruct --prompt "What is quantum physics?" 
    ```

:::note
- Replace \<number_of_gpus\> and \<gpu_uuid\> with the desired values. 

- You can find available GPU IDs using the juice gpu list command. 

- Ensure that Ollama’s server is not running prior to launching with Juice. If it fails to leverage a remote GPU, try exiting the server and relaunching Ollama with the instructions above. 

- Ensure the specified GPUs are available and part of your pool. 

- Refer to the [Juice CLI documentation](/docs/juice/pro-users/cli-app/cli-app.md) for more advanced run options. 

- On Windows, be sure to add both the Ollama program path, as well as the models folder to your path.
:::


--------------------


#### Additional Considerations 

- **Model Download**: Ollama models are downloaded separately. Ensure you have downloaded the desired models before running them. 

- **Resource Requirements**: Large language models can be resource-intensive. Make sure the selected GPUs have sufficient VRAM and processing power for your chosen model. 

This documentation should help get you started. For advanced usage and troubleshooting, please refer to the official [Ollama](https://github.com/ollama/ollama?tab=readme-ov-file) and [Juice documentation](https://juicelabs.co/docs). 

--------------------

## LLAMA.cpp 

We support llama.cpp when built with CUDA.  

Ensure you have the correct version built (I.e. CUDA is activated), then run it like you would any other application with Juice. 

--------------------

## GPT4all 

We support GPT4all similar to any other application. Run the application with the CLI:

```powershell
juice run gpt4all.exe
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

    - Add the path to your VSCode executable to your environment.


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

- While VSCode is running, your GPU session might timeout if the GPU is not in use, so make sure to start running your workload immediately.  

- Once your session times out, VSCode will not be able to access your local GPU until you restart it. 

- Make sure to close all instances of VSCode before you connect to a Remote GPU with the CLI.                                            