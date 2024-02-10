
Sample scripts to modify the app-config in the config map for RHDH

This repo augements the offical installer with missing features. 
 
### What envs do I need to set ?

```
bash verify-dependencies values.yaml 

```


### Using the helm chart

```
bash install-from-helm

```
###  configuring the app-config.yaml

If you install RHDH manually, you can run the  `configure-rhdh` script.

```
bash configure-rhdh
```



```
export MY_GITHUB_TOKEN=
export MY_GITLAB_TOKEN=
export MY_GITHUB_OATH_CLIENT=
export MY_GITHUB_OATH_SECRET=
export MY_GITLAB_OATH_CLIENT=
export MY_GITLAB_OATH_SECRET=
```

