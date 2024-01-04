import { WarpTokenConfig } from '../features/tokens/types';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const tokenList: WarpTokenConfig = [

  // Native coin
  { // 1.jbc > optimism > bsc > bkc > jfin = native
    type: 'native',
    chainId: 8899,
    name: 'JBC',
    symbol: 'JBC',
    decimals: 18,
    hypNativeAddress: '0x6b4976946C197F5a6253Ff2C086A10BC6EdFd3c4',
    logoURI: '/jbc-2.png',
  },
  { // 2.bkc > jbc- = native
    type: 'native',
    chainId: 96,
    name: 'KUB',
    symbol: 'KUB',
    decimals: 18,
    hypNativeAddress: '0xd63cD9ab38AeFDa71C87f09E5d78cbd135c442B0',
    logoURI: '/bkc.png',
  },
  { // 3.bsc > jbc- = native
    type: 'native',
    chainId: 56,
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    hypNativeAddress: '0xEd1a5843311A6dFa655d9904500C18b737A03f51',
    logoURI: '/bnb.png',
  },
  { // 4.jfin > jbc- = native
    type: 'native',
    chainId: 3501,
    name: 'JFIN',
    symbol: 'JFIN',
    decimals: 18,
    hypNativeAddress: '0x69271DA5BF309d2853EC1a5F93855978175f38c5',
    logoURI: '/jfin.png',
  },
  { // 5.op > jbc- = native
    type: 'native',
    chainId: 10,
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    hypNativeAddress: '0x18cdA25dB36187106050D41289aCf35c1e78c80d',
    logoURI: '/eth.png',
  },

  // ERC-20
  { // 1.bsc > jbc = usdt
    type: 'collateral',
    chainId: 56,
    address: '0x55d398326f99059ff775485246999027b3197955',
    hypCollateralAddress: '0x083110E5A5812D8c8400725090C5Fdd5df3C2D87',
    name: 'USDT',
    symbol: 'USDT',
    decimals: 18,
    logoURI: '/usdt.png',
  },
  { // 2.bsc > jbc = usdc
    type: 'collateral',
    chainId: 56,
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    hypCollateralAddress: '0x8bce87Ed31911F219991589d145cdFB577D3663C',
    name: 'USDC',
    symbol: 'USDC',
    decimals: 18,
    logoURI: '/usdc.png',
  },
  { // 3.op > jbc = op
    type: 'collateral',
    chainId: 10,
    address: '0x4200000000000000000000000000000000000042',
    hypCollateralAddress: '0x244395d1B683A2afe0CE4259CA5cf9E38cF9a6dE',
    name: 'OP',
    symbol: 'OP',
    decimals: 18,
    logoURI: '/op.png',
  },

  // Example NFT (ERC721) token for an EVM chain
  // {
  //   chainId: 5,
  //   name: 'Test721',
  //   symbol: 'TEST721',
  //   decimals: 0,
  //   type: 'collateral',
  //   address: 'xxx',
  //   hypCollateralAddress: 'xxx',
  //   isNft: true,
  // },

];
