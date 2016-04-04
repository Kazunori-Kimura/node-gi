"use strict";
/*
    node-gi
    Create .gitignore files for your project.
 */
const request = require("request");
const GITIGNORE_IO_URL = "http://www.gitignore.io/api";
const HTTP_PROXY_ENV = "HTTP_PROXY";

// call www.gitignore.io api
function callApi(w){
    const url = `${GITIGNORE_IO_URL}/${w}`;
    const opts = { url };

    //get http_proxy setting
    const p = getProxySetting();
    if(p){
        opts.proxy = p;
    }

    request.get(opts, (err, res, body) => {
        if(!err && res.statusCode == 200) {
            console.log(body);
        } else {
            const message = `
Status Code: ${response.statusCode}
Error:
${err}
`;

            console.log(message);
        }
    });
}

//get proxy setting from environment variable
function getProxySetting() {
    let proxy = process.env[HTTP_PROXY_ENV];
    if(typeof proxy === "undefined"){
        proxy = process.env[HTTP_PROXY_ENV.toLowerCase()];
    }
    return proxy;
}


module.exports = {
    list: function(){
        callApi("list");
    },
    get: function(w){
        callApi(w);
    }
};
