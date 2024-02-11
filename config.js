const fs = require('fs').promises;
const path = "/etc/systemd/system/pinger.service";

async function createService()
{

    let file_str =
`[Unit]
Description=pinger service
After=network.target

[Service]
ExecStart=/usr/bin/node /root/pinger/index.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
`

    await fs.writeFile(path,file_str);
    console.log('Service file created');
}

createService();