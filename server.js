var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 5000,
    SUCCESS = 200;

var server = http.createServer(function (request, response) {
	var currentUrl = url.parse(request.url, true).href;
	console.log(currentUrl);

	if(currentUrl === "/") { currentUrl = "/index.html"; }

	var myUrl = "./public" + currentUrl;
	fs.readFile(myUrl, function(error, data) {
		if(error) {
			console.log(error);
			throw error;
		}
		response.writeHead(SUCCESS);
		response.write(data);
	    response.end();
	});
})

server.listen(process.env.PORT || port);
