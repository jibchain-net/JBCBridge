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
    name: 'Optimistic',
    symbol: 'ETH',
    decimals: 18,
    hypNativeAddress: '0x18cdA25dB36187106050D41289aCf35c1e78c80d',
    logoURI: '/eth.png',
  },    
  // + Add new chain = native
  { // 6. jbc > meta = native
    type: 'native',
    chainId: 8899,
    name: 'JBC',
    symbol: 'JBC',
    decimals: 18,
    hypNativeAddress: '0xE23Be4D1a1CDA5454e0e82099A75B13AF53cb673',
    logoURI: '/jbc-2.png',
  },
  { // 7. arb > jbc = native (eth)
    type: 'native',
    chainId: 42161,
    name: 'Arbitrum One',
    symbol: 'ETH',
    decimals: 18,
    hypNativeAddress: '0x89C94A3a822686C69A0EDB9E130ff1c0C9A13753',
    logoURI: '/eth.png',
  },
  { // 8. jbc > arb = native
    type: 'native',
    chainId: 8899,
    name: 'JBC',
    symbol: 'JBC',
    decimals: 18,
    hypNativeAddress: '0xc5b66604d72dA3cE864a826aaFc23b988528e8bF',
    logoURI: '/jbc-2.png',
  },


  // Token ERC-20
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
  //
  { // 4.bkc > jbc- = CMM (ERC-20)
    type: 'collateral',
    chainId: 96,
    address: '0x9B005000A10Ac871947D99001345b01C1cEf2790',
    hypCollateralAddress: '0x50040B2f285811e1eeEC1C016D6048d43E963058',
    name: 'Commu Token',
    symbol: 'CMM',
    decimals: 18,
    logoURI: '/cmm.png',
  },
  { // 5.bsc > jbc- = BTCB (ERC-20)
    type: 'collateral',
    chainId: 56,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    hypCollateralAddress: '0x5833d96F21594be4dd2F4b63C51Ba7C7227918f0',
    name: 'Binance-Peg BTCB Token',
    symbol: 'BTCB',
    decimals: 18,
    logoURI: '/btc.png',
  },
  { // 6.meta > jbc = gash (erc-20)
    type: 'collateral',
    chainId: 17,
    address: '0x4dD1d9Dd0f3d9C3F6F747F99928C29924A1b42b1',
    hypCollateralAddress: '0xA8C84540c5893ADa365fCe0a5A6B0318EAd72893',
    name: 'GASH Token',
    symbol: 'GASH',
    decimals: 18,
    logoURI: '/erc20.png',
  },
  { // 7.arb > jbc = arb (erc-20)
    type: 'collateral',
    chainId: 42161,
    address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    hypCollateralAddress: '0x9cee5Fa6182e1Ea883903051fb014f080098B10b',
    name: 'ARB',
    symbol: 'ARB',
    decimals: 18,
    logoURI: '/arb.png',
  },
  { // 8.bsc > jbc = class (erc-20)
    type: 'collateral',
    chainId: 56,
    address: '0xe57EDc546Ee99f17a5d6e32C2457B4569ecD40f8',
    hypCollateralAddress: '0xC26b01D78bc57B9dB38D3D2a60BbC6c0e1D2c554',
    name: 'Class Coin',
    symbol: 'CLASS',
    decimals: 18,
    logoURI: '/erc20.png',
  },
  { // 9.bkc > jbc = tao (erc-20)
    type: 'collateral',
    chainId: 96,
    address: '0x6527d3D38a7Ff4E62f98fE27dd9242a36227FE23',
    hypCollateralAddress: '0x4c09981C0bf19a9b6d4419003557f1cA84e0d265',
    name: 'Tao Meme',
    symbol: 'TAO',
    decimals: 18,
    logoURI: '/tao.png',
  },
  { // 10.bkc > jbc = jak (erc-20)
    type: 'collateral',
    chainId: 96,
    address: '0xcD7A79946eaef6Bb308E21f9E947D94f073F58Be',
    hypCollateralAddress: '0xa613B59F4acD33455434059ca79a3b320968b24a',
    name: 'JAK Coin',
    symbol: 'JAK',
    decimals: 18,
    logoURI: '/jak.jpg',
  },
  { // 11.bkc > jbc = meta (erc-20)
    type: 'collateral',
    chainId: 96,
    address: '0xb2D5a5AEC0C7f2Cac33DcdF6D7B47Ab6Dd403246',
    hypCollateralAddress: '0xC5FB0704351c070ec1C83937ec51E0641E0f9Ea3',
    name: 'META Token',
    symbol: 'META',
    decimals: 18,
    logoURI: '/meta.png',
  },
  { // 12.jbc > op = CMM (erc-20)
    type: 'collateral',
    chainId: 8899,
    address: '0x627C4EBf2fE5b93b10C2bf594719ebE04452Fd5B',
    hypCollateralAddress: '0xABae213641f0825EaDd83FF5892F45881bB013fb',
    name: 'Commu Token',
    symbol: 'CMM',
    decimals: 18,
    logoURI: '/cmm.png',
  },
  { // 13.jbc > op = meta (erc-20)
    type: 'collateral',
    chainId: 8899,
    address: '0x8fcC6e3a23a0255057bfD9A97799b3a995Bf3D24',
    hypCollateralAddress: '0xF387258dc382512161206de5CA7E655f8b677Db0',
    name: 'BunnyToken',
    symbol: 'BB',
    decimals: 18,
    logoURI: '/bb.png',
  },
  { // 14.jbc > op = meta (erc-20)
    type: 'collateral',
    chainId: 8899,
    address: '0x7EB6dd3969C7AaA5E37C1cD4e83E610B04297F6C',
    hypCollateralAddress: '0x6888Eb3e872c78c3b1e3d870677f4C352B433a0a',
    name: 'Bunny Coin',
    symbol: 'BC',
    decimals: 18,
    logoURI: '/bc.png',
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
