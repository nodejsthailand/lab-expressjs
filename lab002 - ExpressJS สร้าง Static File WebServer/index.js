var express = require('express')
 , app = express()
 , port = 3000;

app.use(express.static(__dirname + '/public'));

app.listen( port, function(){
  console.log( 'Magic On Port :' + port );
});