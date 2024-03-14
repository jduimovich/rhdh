
RHDH Post Install Scripts

Scripts to modify the app-config in the config map for RHDH

This repo augments the offical RHTAP installer with missing features and is used to prototype and evolve the official installer. 
 
It uses some helper scripts to  fetch the app-config from your cluster and put the contents into a workdir for updates. After updating the working file, it gets pushed back to the cluster config map.  


### Using the helm chart

Install from helm, the default scripts just use the helm installer. 

```
bash install-from-helm
```
 
### Post install 

```
bash post-helm-install
```
The scripts assume the presence of env vars with passwords and tokens.
They will print the required env vars if missing. 

The current extensions are. 
 
1. "Create a demo namespace and configure it"    


Testing in the demo cluster, allocate a cluster here
https://demo.redhat.com/catalog?item=babylon-catalog-prod/sandboxes-gpte.poc-project-dance.prod&utm_source=webapp&utm_medium=share-link

