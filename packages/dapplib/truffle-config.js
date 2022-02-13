require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender shadow north rescue stereo snake coral light army gesture'; 
let testAccounts = [
"0x0dc46779a54b6af09e2096407aa89199e4af4f0019d72d3fd3b32c5b5c2b9e1c",
"0x10f0dc39faf31811449ce1f8df7fa57a5d3b2f99bae7a1b272d06a679393b32e",
"0x6b8389169799b4bb292ed3341fc00217426f0937e3148f78584640cf91ecbe68",
"0x7fb2658630de55a6a9193af9e80002a831ec4db0ae94e7c9c52f121cd30e173d",
"0x46689a47fd911be881ba6d0712517f68fd087f2a704cfcbf01d88ff6a817833d",
"0xca8fc5caba92f56dee85afbc4ad675925b6bed60b2350366dacaf8004ed9c014",
"0xfbf5a881f78f264abeaf7679503c2daf1b79d97cab6814e89051589e44d6899a",
"0x95eb63f80ba3c4861904a9901c69081cb7aabf69e665b13b57d725e6269bc582",
"0xffd64992ac524956cd4ce52fd9974715497e34375533b6b2799462f6c61239d2",
"0x5f58076ef623b15d1557f7132b52b4bcf6cde929f0c28a0187c2a2da57e10fad"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


