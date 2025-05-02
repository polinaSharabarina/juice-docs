---
title:  'Running Applications with Juice'
sidebar_position: 4
---

Run an application with Juice by launching it through the `juice run` command line tool, passing the path to the application and any arguments on the command line.

For example, assuming the directory you extracted the client archive to is included in `PATH` the following will run `<application>` with Juice selecting the first available GPU:

~~~
juice run <application>
~~~

See [Juice for Compute](#juice-for-compute) for examples of running [ResNet](#resnet), [YOLO](#yolo), and [Stable Diffusion](#stable-diffusion) with Juice.

See [Juice for Graphics](#juice-for-graphics) for examples of running graphical applications with Juice, e.g. [3DMark](#3dmark), [Superposition](#superposition), [Maya](#maya), and more.  Graphics workloads are currently only supported from the Windows client.  NOTE: This is a client-side restriction only -- the Juice client on Windows can connect to a Juice server running on Linux or Windows to serve graphics workloads.
