---
title:  'Considerations'
sidebar_position: 1
---
# Considerations

There are certain performance limitations to consider when leveraging a GPU with Juice, even when it's local to your device. Data transmission between CPU and GPU will severely impact performance even with the highest speed interconnects. This limitation is particularly applicable with Juice because it lets users leverage GPUs from almost anywhere in the world. 

It is best practice to minimize roundtrips between the CPU and GPU. When roundtrips can't be avoided, we recommend transferring data in batches and interleaving those transfers with latent GPU-side work to mask the latency.  