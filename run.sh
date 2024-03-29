if ! command -v node &> /dev/null; then
    curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install nodejs -y
fi

git clone https://github.com/KN-VPN/pinger.git
cd ~/pinger
npm i
node config.js


sudo systemctl daemon-reload
sudo systemctl start pinger
sudo systemctl enable pinger


#systemctl status pinger.service
#journalctl -u pinger.service
#curl -fsSL https://raw.githubusercontent.com/KN-VPN/pinger/main/run.sh -o run.sh && chmod +x run.sh && ./run.sh