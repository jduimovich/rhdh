SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )" 
 
pushd ../rhtap-installer  

git pull 

# ROX_API_TOKEN changes for reinstalls
grep -v ACS__API_TOKEN private.env > private.new-env 
mv private.new-env private.env

# DEVELOPER_HUB__CATALOG__URL changes for reinstalls
grep -v DEVELOPER_HUB__CATALOG__URL private.env > private.new-env 
mv private.new-env private.env

echo "Using catalog $DEVELOPER_HUB__CATALOG__URL "

CHART=rhtap/redhat-trusted-application-pipeline 
./bin/make.sh values 
./bin/make.sh apply -- --values private-values.yaml
popd

bash $SCRIPTDIR/post-helm-install 
 