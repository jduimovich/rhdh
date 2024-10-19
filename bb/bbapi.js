const request = require('request');  
const base64 = require('base-64'); 

var args = process.argv.slice(2);


function api_GET(command) { 
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

function api_POST(command, data) { 
    const URL_PREFIX = 'https://api.bitbucket.org/2.0'; 
    const headers = { 
        Authorization: 'Basic ' 
            + base64.encode(process.env.BITBUCKET_USER
            + ':' + process.env.BITBUCKET_APP_PASSWORD)
    }; 
    request.post( 
        {
        headers: headers,
        url:     `${URL_PREFIX}/${command}`,
        body:    JSON.stringify (data)
        },
        (err, res, body) => { 
            console.log(body);
        }
    );
} 

function users() { 
    api_GET ("user")
}
function repos(workspaceID) {  
    var cmd=`repositories/${workspaceID}` 
    api_GET (cmd)  
}
function webhook(workspaceID, repo) {    
    var data = {
        "description": "Webhook Description",
        "url": 
        "https://pipelines-as-code-controller-openshift-pipelines.apps.johnd.clusters.stonesoupengineering.com",
        "active": true, 
        "history_enabled": true,
        "events": [
          "repo:push",
          "issue:created",
          "issue:updated"
        ]
      };

    var cmd=`repositories/${workspaceID}/${repo}/hooks` 
    api_POST (cmd,data)  
}
 


switch (args[0]) {
    case 'user':
    case 'users':
        users()
        break;
    case 'repos': 
    case 'repositories': 
        repos("jduimovich") 
      break;
    case 'webhook':  
        webhook("jduimovich", args[1]) 
    break;
    default:
      console.log(`Invalid command ${args[0]}`);
  }

 