import {ethers , Contract} from 'ethers';

import stakingAbi from '../ABI/stakingAbi.json';
import stakingTokenAbi from '../ABI/stakeTokenAbi.json';

export const connectWallet = async() => {
  try {
    let [signer , provider , stakingContract , stakeTokenContract , chainId] = [null];
     
    if(window.ethereum === null) {
       throw new Error ("No Ethereum Provider found");
    }

    const account = await window.ethereum.request({
        method : "eth_requestAccounts"
    })
    let chainIdHex = await window.ethereum.request({
        method : "eth_chainId"
    })

    chainId = parseInt(chainIdHex, 16);

    let selectedAmount = account[0];
    if (selectedAmount === undefined) {
      throw new Error("Please connect to MetaMask");
    }
    
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();    

    const stakingContractAdddress = "0x6579d9929B57b67c2b7b092c51ec81ED9A9f9C58";
    const stakeTokenContractAddress = "0x40108D0A43543ed064cb9599E12C7DE8da7A3e3a";

    stakingContract = new ethers.Contract(stakingContractAdddress , stakingAbi , signer);
    stakeTokenContract = new ethers.Contract(stakeTokenContractAddress , stakingTokenAbi , signer);

    return { provider , selectedAmount , stakeTokenContract , stakingContract , chainId };
  } catch (error) {
    console.error("Error while connecting wallet : ", error);
  }
}