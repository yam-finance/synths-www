import { ref, computed } from 'vue';
import Synths from "synths-sdk";                                          
import { ethers } from "ethers";                                          
                                                                                      
const url = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const provider = new ethers.providers.JsonRpcProvider(url);
                                                                                          
const synthsSDK = ref(
    await Synths.create({                                   
        ethersProvider: provider,                                               
    })
); 

export default function useSynthsSDK() {
    return {
        sdk: computed(() => synthsSDK.value)
    }
}

