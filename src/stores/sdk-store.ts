import { ref, computed } from 'vue';
import Synths from "synths-sdk";                                          
import { ethers } from "ethers";                                          
                                                                                      
const url = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const provider = new ethers.providers.JsonRpcProvider(url);

export async function useSynthsSDK() {
    const synthsSDK = await Synths.create({ ethersProvider: provider });
    const loading = ref(false);
    const synth = ref({});
    
    // Connect the sdk a synth                                                
    async function connect(param: string) {
      loading.value = true;
      synth.value = await synthsSDK.connectAsset(param);
      loading.value = false;
    }

    return {
        synth: computed(() => synth.value),
        connect
    }
}

