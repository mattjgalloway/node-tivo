var tivo = require('.');
var readline = require('readline');

if (process.argv.length < 3) {
  console.log('Usage: <script> <ip>');
  process.exit(1);
}

var config = {
  ip: process.argv[2],
  port: 31339
}
var remote = new tivo.remote(config);

var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.setPrompt('');
rl.on('SIGINT', function() {
  process.exit(0);
});

remote.on('channel', function(channel) { console.log('Channel is now: ' + channel); });
remote.on('on', function(on) { console.log('On state is now: ' + on); });
remote.on('connecting', function() { console.log('Connecting'); });
remote.on('connect', function() { console.log('Connected'); rl.prompt(); });
remote.on('disconnect', function() { console.log('Disconnected'); });
remote.on('error', function(err) { console.log('Error: ' + err); });

rl.on('line', function(cmd) {
  remote.sendCommand(cmd);
});
