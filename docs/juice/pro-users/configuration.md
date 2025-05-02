Client configuration is contained in the `juice.cfg` JSON file in the same directory as the `juicify` executable used to launch an application using Juice.  For example:

~~~json
{
  "host": "127.0.0.1",
  "port": 43210,
  "logGroup": "info",
  "logFile": "juice.log",
  "forceSoftwareDecode": false,
  "disableCache": false,
  "disableCompression": false,
  "headless": false,
  "allowTearing": false,
  "frameRateLimit": 0,
  "framesQueueAhead": 3,
  "swapChainBuffers": 2,
  "waitForDebugger": false
}
~~~

# Connection

**`host`** is the IP address or hostname of the server to connect to, string ("").

**`port`** the port to connect to on the server, integer (0).

**`pcibus`** is the PCI bus ID of the GPU to connect to on the server e.g. `00000000:01:00.0`.  This is optional and is only needed when connecting to a server that houses multiple GPUs, string ("").

# Logging

**`logGroup`** controls the verbosity of logging between "Trace", "Debug", "Info", "Warning", "Error", or "Fatal", string ("Info").

**`logFile`** is the path to the log file, relative to the current working directory, string ("").

# Limiting Frame Rate

**`allowTearing`** allows tearing when presenting to the local swapchain, boolean (false).

**`framesQueueAhead`** is the maximum number of frames queued ahead when the GPU is able to render much faster than the `frameRateLimit`, integer (3).

**`frameRateLimit`** is the maximum number of frames to render per second or 0 to disable limiting, integer (0, disabled).

**`swapChainBuffers`** sets the number of buffers in the swapchain, integer (2).

# Limiting Memory

**`memoryDivider`** is the amount of GPU RAM the client is limited to as a divisor of the total available GPU RAM e.g. specifying a divisor of two provides half of the total available GPU RAM, a divisor of three provides a third of available GPU RAM, etc.  A divisor of 0 disables client GPU RAM limits, integer (0, disabled).

# Optional Features

**`forceSoftwareDecode`** to force the video to be decoded in software rather than hardware, boolean (false).

**`disableCache`** disables the use of the cache on the server, boolean (false).

**`disableCompression`** disables compression e.g. on fast, high-bandwidth networks where compression might not be needed, boolean (false).

**`disableReadbacks`** to disable reading back data from the GPU, boolean (false).

**`headless`** avoids creating video encoders on the server when they won't be used, boolean (false).

**`waitForDebugger`** to wait until a dialog is dismissed immediately after loading the configuration file for attaching a debugger, boolean (false).
