SECRET=quay-auth
NS=rhtap-app-development
function showValue() {
    echo $1
    DATA=$(oc get secret -n $NS -o yaml $SECRET) 
    echo "$DATA" | yq '.data'  
    echo 
    echo "$DATA"  | yq '.data.".dockerconfigjson"' | base64 -d | jq
    echo   
}
showValue "Before:" 

echo "Setting to $QUAY__DOCKERCONFIGJSON"
B64=$(echo "$QUAY__DOCKERCONFIGJSON"  | base64 -w 0)  
PATCH=$(printf '[{"op" : "replace" ,"path" : "/data/.dockerconfigjson" ,"value" : "%s"}]' "$B64")
kubectl patch secret $SECRET -n $NS --type='json' -p="$PATCH"
 
showValue "After:"
 