export const deployed_contracts = {
  sepolia: {
    ccm: "0x2f43668479e1F2B5955f9C9bf1A93123a6738AF0",
    // aave: "0x412F05Ac9D672f883928906886C1a7b109004554",
    aave: "0x560B163A0FBcC293E082Df70Cc6b26B655C99d36",
    batchExecutor: "0x111196aDC3868c745339F5D5549aB60D56B6c9F0",
    uniswap: "0x6b7683c33C142750AA36461F0f199d46dee28E9e",
  },
  lisk: {
    ccm: "0x6193c44E7C8cE5438FEE9D2e94Ea98369Ef297af",
  },
  arbitrum: {},
  optimism: {},
};

// IERC20 dai = IERC20(0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357);
// IERC20 link = IERC20(0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5);
// 0x34a4d932E722b9dFb492B9D8131127690CE2430B DAIVAriableDebt
// USDCVariablrDebt: 0x36B5dE936eF1710E1d22EabE5231b28581a92ECc

export const token_addresses = {
  sepolia: {
    usdc: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    usdt: "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0",
    dai: "0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357",
    link: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    lsk: "0x16B840bA01e2b05fc2268eAf6d18892a11EC29D6",
    weth: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
  },
  lisk: {
    usdc: "",
    usdt: "",
    dai: "",
    link: "",
    lsk: "",
    weth: "",
  },
  arbitrum: {
    usdc: "",
    usdt: "",
    dai: "",
    link: "",
    lsk: "",
    weth: "",
  },
  optimism: {
    usdc: "",
    usdt: "",
    dai: "",
    link: "",
    lsk: "",
    weth: "",
  },
};
