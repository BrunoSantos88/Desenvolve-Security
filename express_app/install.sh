mkdir actions-runner 
sudo chmod -R 777 actions-runner 
cd actions-runner
curl -o actions-runner-linux-x64-2.316.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.316.1/actions-runner-linux-x64-2.316.1.tar.gz
echo "d62de2400eeeacd195db91e2ff011bfb646cd5d85545e81d8f78c436183e09a8  actions-runner-linux-x64-2.316.1.tar.gz" | shasum -a 256 -c
tar xzf ./actions-runner-linux-x64-2.316.1.tar.gz
# Create the runner and start the configuration experience
./config.sh --url https://github.com/BrunoSantos88/Desenvolve-Trilha-SI --token AV3UW2KVEW4ZKSNREXANH6DGIVB5I
./run.sh