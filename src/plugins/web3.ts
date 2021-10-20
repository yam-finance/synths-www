import { ethers } from "ethers"

const web3 = new ethers.providers.Web3Provider(window.ethereum)

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = web3.getSigner()

export { web3, signer }
