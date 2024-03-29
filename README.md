
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
 
# utilities

Quay (uses MY_QUAY_USER)
`quay-create-repo <reponame>`
`quay-make-public <existing-reponame>`

RHTAP 
`rhtap-argo-login` used to login to the argo instance used by rhtap.
Uses `argocd` CLI  (ie `argocd app list`, `argocd app sync` )

`rhtap-pws` --- show local cluster passwords and accounts 

`rhtap-promote --repo repo-url --env {dev/stage}` promote from dev to stage or stage to prod with a pull-request 

`rhtap-test-rox` --- is my ROX_API_TOKEN working ?



Testing in the demo cluster, allocate a cluster here
https://demo.redhat.com/catalog?item=babylon-catalog-prod/sandboxes-gpte.poc-project-dance.prod&utm_source=webapp&utm_medium=share-link

