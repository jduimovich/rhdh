SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )" 
NS=$(kubectl get ns -o name  | grep "\-development")

for ns in "$NS"; do 
    echo $ns 
    oc project $(basename $ns)
    bash $SCRIPTDIR/namespace-configure 
done 