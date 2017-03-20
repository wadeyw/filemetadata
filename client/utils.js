var fs = require('fs');
var util = require('util');
//var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

//writelog('Test','Testing','INFO');
function writelog(func,message,statu){
fs.open('debug.log', 'a+', (err, fd) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.error('file already exists');
      return;
    } else {
      throw err;
    }
  }
  appendlog(func,message,statu);
});
}

function appendlog(func,message,statu){
  var date=new Date;
  var time=date.toJSON();
  var msg=time+'|'+func+'|'+statu+'|'+util.format(message)+'\n';
//  fs.open('/debug.log');
  fs.appendFile('debug.log',msg,'utf8',function(err){
   if(err) throw err;
 });
  //log_file.append(time+'|'+func+'|'+statu+'|'+util.format(message) + '\n');
  log_stdout.write(time+'|'+func+'|'+statu+'|'+util.format(message) + '\n');
}
