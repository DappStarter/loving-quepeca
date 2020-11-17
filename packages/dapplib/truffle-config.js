require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index reward stereo puppy grace brand equal giant'; 
let testAccounts = [
"0x4331ac5667eff2ce7f945b014ea5d9dc23f5cea5224b3f5d34332aba80c83251",
"0x1aa7f40e679efbd90b920bff943989f9046663feca68b91c8a3306559ae06d0c",
"0x6b9b5d46a0cfa796ffe423b83ad8d8ed931a9d76aff276f63726865496ce5114",
"0x5edbe19ec7b8e800227f48b670eca81566544a440865fcecfb5195260f8e29ef",
"0xde9cbb5bed0a9e1a1359dca07d2c3aa5a97216fc43d83e78a54b38c92cc4867f",
"0x85245f5f36f6a7d85fc94c0fae690508f0fa314e5c8c23d8c42d606bab7c4acc",
"0x57490bebe92761b5875288271693730837ca69d5f2031aad1b782b27f0f80f1e",
"0xb0b626014076002d7a06c7de68e86d15ab14472f3d6465421dfd63755e645aa8",
"0xb97b12c7c7f3035a869d2f54189f1d845751e535ca40e9b63cb30a826a07d6d4",
"0x3d00b24e06b8ce56549a3649d1da107d4c704ec8497713050079779d8428ea24"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
