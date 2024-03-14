
# reset a cluster to clean state
# remove all

# if having issues with finalizers you can patch them 
# kubectl get application -n rhtap -o name | xargs -n1 \
#     kubectl patch -n rhtap -p '{"metadata":{"finalizers":null}}' --type=merge

kubectl delete application -n rhtap --all
kubectl get ns -o name | grep "\-development" | xargs -n1 kubectl delete  
kubectl get ns -o name | grep "\-prod" | xargs -n1 kubectl delete  
kubectl get ns -o name | grep "\-stage" | xargs -n1 kubectl delete  
kubectl delete ns rhtap 

 
