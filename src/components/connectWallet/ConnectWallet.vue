<template>
  <div class="modal-backdrop">
    <div class="modal">
      <img class="wallet_gif" src="../../assets/icons/Wallet.png" />

      <div class="title">
        <div class="header connect_wallet_header">Connect your wallet</div>
        <div class="connect_wallet_info">Start using Yarn Synths with your favourite wallet</div>
      </div>

      <div class="connect_wallet_container">
        <div @click="$emit('connect', 'injected')" class="wallet_box">
          <img src="../../assets/icons/metamask.svg" />
          <div class="wallet_name" @click="$emit('connect', 'injected')">Metamask</div>
        </div>
        <div @click="$emit('connect', 'walletconnect')" class="wallet_box">
          <img src="../../assets/icons/walletconnect.png" />
          <div class="wallet_name" @click="$emit('connect', 'walletconnect')">WalletConnect &nbsp;</div>
        </div>
        <div @click="$emit('connect', 'fortmatic')" class="wallet_box">
          <img src="../../assets/icons/formatic.png" />
          <div class="wallet_name" @click="$emit('connect', 'fortmatic')">Fortmatic</div>
        </div>
        <div @click="$emit('connect', 'portis')" class="wallet_box">
          <img src="../../assets/icons/portis.png" />
          <div class="wallet_name">Portis</div>
        </div>
      </div>
      <div class="learn_more_box">
        Not sure how connect wallet works?
        <span class="t_learn_more"
          >Learn More &nbsp;<img src="../../assets/icons/externalLink.svg"
        /></span>
      </div>
    </div>
  </div>
</template>

<script >



export default {
  name: "ConnectWallet",

  methods: {
    close() {
      this.$emit("close")
    },
    saveWalletType() {
      this.$emit("saveWalletType")
    },
 
    
  },
}
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wallet_gif {
  position: absolute;
  width: 150px;
  height: 136px;
  right: -10%;
  top: -20%;
}

.wallet_name {
  position: static;
  width: fit-content;
  height: 15px;
  left: 33.23px;
  top: 8.5px;
  cursor: pointer;

  font-family: Open Sauce Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;

  /* identical to box height */

  color: #ffffff;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
}
.wallet_box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px 8px 8px;
  justify-content: flex-start;
  position: static;
  width: fit-content;
  height: 31.09px;
  left: 0px;
  top: 0px;
  background: linear-gradient(180deg, rgba(143, 143, 255, 0.2) 0%, rgba(143, 143, 255, 0) 100%);
  box-shadow: inset 0px 0px 4px rgba(143, 143, 255, 0.2);
  border-radius: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
  font-size: 12px;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  position: absolute;
  width: 340px;
  height: 239px;
  left: 590px;
  top: 221px;

  background: #252562;
  box-shadow: 0px 32px 64px -8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.connect_wallet_header {
  font-family: Open Sauce Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #ffffff;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
}
.modal-footer {
  padding: 15px;
  display: flex;
}

.t_learn_more {
  display: inline-flex;
  color: #ffffff;
}

.learn_more_box {
  position: absolute;
  width: 236px;
  height: 15px;
  left: 0px;
  bottom: 20px;

  font-family: Open Sauce Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  width: auto;
  color: #cbcbff;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 15px;
}

.connect_wallet_info {
  position: static;
  width: 215px;
  height: 44px;
  left: 16px;
  top: 44px;

  font-family: Open Sauce Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  color: #cbcbff;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}

.connect_wallet_container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 11px 10px;
  position: absolute;
  width: 308px;
  height: 96px;
  left: 16px;
  top: 96px;

  background: #1d1d52;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}
.title {
  position: relative;
  color: #ffffff;
  justify-content: space-between;
  font-family: Open Sauce Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
