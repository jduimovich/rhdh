const request = require('request');  
const base64 = require('base-64'); 

var args = process.argv.slice(2);


function apiCall(command) { 
    const URL_PREFIX = 'https://api.bitbucket.org/2.0'; 
    const headers = { 
        Authorization: 'Basic ' 
            + base64.encode(process.env.BITBUCKET_USER
            + ':' + process.env.BITBUCKET_APP_PASSWORD)
    }; 
    request.get( 
        `${URL_PREFIX}/${command}`, {headers: headers},
        (err, res, body) => { 
            console.log(body);
        }
    );
} 

function users() { 
    apiCall ("user")
}
function repos() {  
    var workspaceID="jduimovich"
    var cmd=`repositories/${workspaceID}` 
    apiCall (cmd) 

}

switch (args[0]) {
    case 'user':
    case 'users':
        users()
        break;
    case 'repos': 
    case 'repositories': 
        repos() 
      break;
    default:
      console.log(`Invalid command ${command}`);
  }

 