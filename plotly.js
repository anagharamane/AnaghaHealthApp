const request =require('request');
const fs =  require("fs");
 
fs.readFile('/Desktop/techAggPrep/trafficApp/ecg_reading.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
//console.log('after calling readFile');

var payload={
    
    'un': 'anagha_ramane',
    'key': 'ZUKNUSXKoy75LQP47cCW',
    'origin': 'plot',
    'platform': 'python',
    'args': json.dumps([[0, 1, 2], [3, 4, 5], [1, 2, 3], [6, 6, 5]]),
    'kwargs': json.dumps({"filename": "plot from api",
            "fileopt": "new",
            "style": {
            "type": "bar"
            },
    "traces": [1],
    "layout": {
        "title": "experimental data"
    },
    "world_readable": True
    }) 
}


var connOpt={
    url:"https://plot.ly/~Anagha_Ramane",
    method:'POST',
    headers:{
        'content-Type':'application/json'
    },
    json:payload

}

request(connOpt,(err,res,body)=>{

    if(body.success){
        //console.log("Device is registered successfully");
        console.log(body.data);
    }else {
        console.log(body.msg);	
    }	
});





//////////////////////////////////////////////////////////////////////////////////


var plotly = require('plotly')('ankitaamore','CVK5patvf6xxeUIXEQEC');
 
var initData = [{x:[], y:[], stream:{token:'vrd65lhg21', maxpoints:200}}];
var initGraphOptions = {fileopt : "extend", filename : "nodenodenode"};
 
plotly.plot(initData, initGraphOptions, function (err, msg) {
  if (err) return console.log(err)
  console.log(msg);
 
  var stream1 = plotly.stream('token', function (err, res) {
    console.log(err, res);
    clearInterval(loop); // once stream is closed, stop writing 
  });
 
  var i = 0;
  var loop = setInterval(function () {
      var streamObject = JSON.stringify({ x : i, y : i });
      stream1.write(streamObject+'\n');
      i++;
  }, 1000);
});


////////////////////////////////////////////////////////////////////////////////////////










