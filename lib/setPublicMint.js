import Caver from "caver-js";
import dotenv from 'dotenv'
import abi from '../contract/abi.js';
import transferOwnership from './transferOwnership.js';

//import mkIPFS from './ipfs.js'
dotenv.config({ path: '../.env' });

const setPublicMint = async (URI,contractAddr,blockNum, price,ownerAddress) => {

    const key = process.env.WALLET_SECRET_KEY;

    try {
        const caver = new Caver(new Caver.providers.HttpProvider('https://public-node-api.klaytnapi.com/v1/baobab'))

        const account = caver.klay.accounts.wallet.add(key)
        
        const contract = new caver.klay.Contract(abi, contractAddr);

        await contract.methods.setBaseURI(URI).send({
            from: account.address,
            gas: '10000000',
            value: '0',
        }) //baseURI 설정 

        await contract.methods.setupSale(5,1,3,blockNum,0,100,price).send({
            from: account.address,
            gas: '10000000',
            value: '0',
        }).then(console.log)

        await contract.methods.setPublicMintEnabled(true).send({
            from: account.address,
            gas: '10000000',
            value: '0',
        })

        await transferOwnership(ownerAddress, contractAddr);

        console.log('Done.')
    } catch (err) {
        console.log(err)
    }

};
const ownerAddress = '0x8Fb11Ca16007023D271f432A61258C7Ae91fdc07' //test2 account 
const contractAddr = '0x7a796261A212ee6bEFa7A1431531b290a12915Fd' //test contract
const URI = "https://beb-04-final-mintool.vercel.app/api/fs/test111/meta/" //test URI
const blockNum = 98122706 //test 
const price = '1'   // 1 KLAY = 1000000000000000000
setPublicMint(URI, contractAddr,blockNum,price+'000000000000000000',ownerAddress); //function example

export default setPublicMint;