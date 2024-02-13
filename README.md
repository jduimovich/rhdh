
RHDH Post Install Scripts

Scripts to modify the app-config in the config map for RHDH

This repo augments the offical RHTAP installer with missing features and is used to prototype and evolve the official installer. 
 
It uses some helper scripts to  fetch the app-config from your cluster and put the contents into a workdir for updates. After updating the working file, it gets pushed back to the cluster config map.  


### Using the helm chart

Install from helm, the default scripts just use the helm installer. 

```
bash install-from-helm
 
### Post install 

`rhdh-ignore-tls`  configure RHDH to ignore tls errors, used to allow the argocd plugin to connect to non-secure endpoints such as ArgoCD running on CRC, or private instance with self-signed keys. 



