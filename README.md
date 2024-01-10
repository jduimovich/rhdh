
Sample scripts to modify the app-config in the config map for RHDH

This install requires  environment variables defined in your env and these are used to modify and set the app config in your cluster. The app config is currently assumed to be in namespace rhdh but can be configured by changing the script.

It has all the configuration possible so if you want to ignore any specific feature, you can define the required ENV var as "unused"

### What envs do I need to set ?

```
bash verify-dependencies 

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

