
Sample scripts to modify the app-config in the config map for RHDH

Run
```
bash configure-rhdh
```

It requires some environment variables defined in your env and will modify and set the app config in your cluster. The app config is currently assumed to be in namespace rhdh but can be configured by changing the script.

```
export MY_GITHUB_TOKEN=
export MY_GITLAB_TOKEN=
export MY_GITHUB_OATH_CLIENT=
export MY_GITHUB_OATH_SECRET=
export MY_GITLAB_OATH_CLIENT=
export MY_GITLAB_OATH_SECRET=
```