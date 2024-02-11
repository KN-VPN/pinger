var ping = require('ping');

async function init()
{
    let host = '46.100.13.10';
    console.log('Pinging ' + host);
    let res = await ping.promise.probe(host,{timeout: 10});
    var {alive} = res;

    if(alive)
    {
        console.log('Host ' + host + ' is alive');
        return;
    }

    else
    {
        console.log('Host ' + host + ' is dead - rebooting...');
        require('child_process').exec('sudo /sbin/shutdown -r now', function (msg) { console.log(msg) });
    }


}

init();


setInterval(function()
{
    init(); 
},1000*60*5);


// bash + reboot + systemctl + testing