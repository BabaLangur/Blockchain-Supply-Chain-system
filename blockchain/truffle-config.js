module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "0xFEA81Ab136C8cbFba86F00d626550cF350eD2B86",
      gas: 30000000,
      from: '0x02582591F6401bCCA43a677A970148E040926524'
    },
    loc_test_test: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    }
  },
  contracts_directory: './testing/',
  contracts_build_directory: './src/build/',
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100
        }
      }
    }
  }
};
