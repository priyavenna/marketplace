function web_func(){
    const Web3 = require('web3')
    const json = require('jsonfile')
    const json_path = './build/contracts/OnlineMarket.json'
    const web3 = new Web3('http://localhost:7545');
    const abi_contract = json.readFileSync(json_path).abi
    console.log(abi_contract)
    return new web3.eth.Contract(abi_contract, '0x3EaD670B02F4Cb9EE7f85b349235629AAD3165cF');
    }
    module.exports.web_func = web_func
    
    
    