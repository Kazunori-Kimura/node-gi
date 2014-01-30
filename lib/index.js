//index.js
var request = require("request"),
    here = require("here").here;

var GITIGNORE_IO_URL = "http://www.gitignore.io/api/",
    HTTP_PROXY_ENV = "HTTP_PROXY";


// call www.gitignore.io api
function callApi(w){
    var url = GITIGNORE_IO_URL + w,
        opts = {
            url: url
        };

    //get http_proxy setting
    var p = getProxySetting();
    if(p){
        opts.proxy = p;
    }

    request.get(opts, function(error, response, body){
        if(!error && response.statusCode == 200){
            console.log(body);
        }else{
            var message = here(/*
Status Code: %d
Error:
%s
*/).unindent();
            console.log(message, response.statusCode, error);
        }
    });
}

//get proxy setting from environment variable
function getProxySetting(){
    var proxy = process.env[HTTP_PROXY_ENV];
    if(typeof proxy == "undefined"){
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
