function rovpilot(name, deps) {
    console.log("This is where rovpilot code would execute in the node process.");
    
    deps.io.sockets.on('connection', function (socket) {
        socket.on('escs_poweron', function(){
            deps.controller.send('escp(1)');
            console.log('escp(1) sent');
        });
        socket.on('escs_poweroff', function(){
            deps.controller.send('escp(0)');
            console.log('escp(0) sent');
        });        
    });       
};

module.exports = rovpilot;
//escp