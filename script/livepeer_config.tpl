#!/bin/bash
sleep 30  # Sleep to allow the instance to initialize

# Installing necessary packages
apt-get update
apt-get install -y software-properties-common wget

sudo wget https://github.com/livepeer/go-livepeer/releases/download/v0.7.8/livepeer-linux-amd64.tar.gz

sudo tar -zxvf livepeer-linux-amd64.tar.gz
sudo rm livepeer-linux-amd64.tar.gz
sudo mv livepeer-linux-amd64/* /usr/local/bin/

#Create config directory
sudo mkdir -p /usr/locl/bin/lptConfig 

pass=$(
    sudo /usr/local/bin/livepeer -network arbitrum-one-mainnet -ethUrl ${rpc_url} -gateway <<EOF
${passphrase}
${passphrase}
${passphrase}
EOF
)

echo $pass | sudo tee /usr/local/bin/lptConfig/node.txt > /dev/null

# Replacing the placeholder with the actual RPC URL and IP addresses
cat <<EOL | sudo tee /etc/systemd/system/livepeer.service > /dev/null
[Unit]
Description=Livepeer

[Service]
Type=simple
User=root
Restart=always
RestartSec=4
ExecStart=/usr/local/bin/livepeer -network arbitrum-one-mainnet \
-ethUrl=${rpc_url} \
-cliAddr=127.0.0.1:5935 \
-ethPassword=/usr/local/bin/lptConfig/node.txt \
-maxPricePerUnit=300 \
-broadcaster=true \
-serviceAddr=${public_ip}:8935 \
-transcodingOptions=/usr/local/bin/lptConfig/transcodingOptions.json \
-rtmpAddr=0.0.0.0:1935 \
-httpAddr=0.0.0.0:8935 \
-monitor=true \
-v 6

[Install]
WantedBy=default.target
EOL

# Start the service
sudo systemctl daemon-reload
sudo systemctl enable --now livepeer
sudo systemctl enable --now livepeer
