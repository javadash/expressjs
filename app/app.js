var express = require('express');
var dataFile = require('./data/data.json');

var app = express();


app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
})