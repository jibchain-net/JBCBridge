import { WarpTokenConfig } from '../features/tokens/types';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command

export const tokenList: WarpTokenConfig = [
// export const tokenList = [

  // Native coin
  // { // 1. eth > jzero
  //   type: 'native',
  //   chainId: 1,
  //   name: 'JFIN',
  //   symbol: 'JFIN',
  //   decimals: 18,
  //   hypNativeAddress: '0x56122b44789d0824F07a6A6C451C23C9bd33af43',
  //   logoURI: '/jzero.png',
  // },

  {
    chainId: 1,
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    type: "collateral",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    hypCollateralAddress: "0x681feD0bB621e9F4654623b0ed621CcB164e878e",
    logoURI: '/usdt.png',
    // isNft: false
  }

];
