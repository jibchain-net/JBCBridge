import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';


// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
// , protocolFee?: Address
export const chains: ChainMap<ChainMetadata & { mailbox?: Address, interchainGasPaymaster?: Address, validatorAnnounce?: Address }> = {

  jbc: {
    protocol: ProtocolType.Ethereum,
    chainId: 8899,
    domainId: 8899,
    name: 'jbc',
    displayName: 'JIB Chain',
    nativeToken: { name: 'JBC', symbol: 'JBC', decimals: 18 },
    rpcUrls: [{ http: 'https://jib-rpc.inan.in.th' }],
    blockExplorers: [
      {
        name: 'jbc',
        url: 'https://exp-l1.jibchain.net',
        apiUrl: 'https://exp-l1.jibchain.net/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 2,
      estimateBlockTime: 3,
    },
    logoURI: '/jbc-2.png',
    interchainGasPaymaster: '0x29A7b29ADeb30f0E08649F24bc087Fb586AE7C62',
    mailbox: '0x9cee5Fa6182e1Ea883903051fb014f080098B10b',
    validatorAnnounce: '0x46d5261a0a0F184cC283712105bE53064F5f565f',
    // protocolFee: '0xEA85d92110D9A5af168aBAEE0fe495DFc4373f42',
  },

  jfin: {
    protocol: ProtocolType.Ethereum,
    chainId: 3501,
    domainId: 3501,
    name: 'jfin',
    displayName: 'Jfin Chain',
    nativeToken: { name: 'JFIN', symbol: 'JFIN', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc.jfinchain.com' }],
    blockExplorers: [
      {
        name: 'jfin',
        url: 'https://exp.jfinchain.com',
        apiUrl: 'https://exp.jfinchain.com/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 2,
      estimateBlockTime: 3,
    },
    logoURI: '/jfin.png',
    interchainGasPaymaster: '0x1c2e0e9D6a0d3B7aB4CE3013219e6fB921E9e4a1',
    mailbox: '0x7dBeB639F60ecA5156A8C6066dA5c706fe36675d',
    validatorAnnounce: '0x56122b44789d0824F07a6A6C451C23C9bd33af43'
  },

  bkc: {
    protocol: ProtocolType.Ethereum,
    chainId: 96,
    domainId: 96,
    name: 'bkc',
    displayName: 'Bitkub Chain',
    nativeToken: { name: 'KUB', symbol: 'KUB', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc.bitkubchain.io' }],
    blockExplorers: [
      {
        name: 'bkc',
        url: 'https://www.bkcscan.com',
        apiUrl: 'https://www.bkcscan.com/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 2,
      estimateBlockTime: 3,
    },
    logoURI: '/bkc.png',
    interchainGasPaymaster: '0x1c2e0e9D6a0d3B7aB4CE3013219e6fB921E9e4a1',
    mailbox: '0xCc7997A71df915b447a985dfCE05C4BB938caA31',
    validatorAnnounce: '0x56122b44789d0824F07a6A6C451C23C9bd33af43'
  },

  bsc: {
    protocol: ProtocolType.Ethereum,
    chainId: 56,
    domainId: 56,
    name: 'bsc',
    displayName: 'Binance Smart Chain',
    nativeToken: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: [{ http: 'https://bsc-dataseed1.ninicoin.io' }],
    blockExplorers: [
      {
        name: 'bsc',
        url: 'https://bscscan.com/',
        apiUrl: 'https://bscscan.com/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 2,
      estimateBlockTime: 3,
    },
    logoURI: '/bnb.png',
    interchainGasPaymaster: '0x86d0FCE81b5a51c319Ad5CfBa4E67998d515e5CC',
    mailbox: '0xFE8bA65DD05dDE886A387D97efC95b736bB9C0eF',
    validatorAnnounce: '0xB3578FB2b1706E352000E408A67d170b70598E46'
  },

  optimism: {
    protocol: ProtocolType.Ethereum,
    chainId: 10,
    domainId: 10,
    name: 'optimism',
    displayName: 'Optimistic',
    nativeToken: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'https://mainnet.optimism.io' }],
    blockExplorers: [
      {
        name: 'optimism',
        url: 'https://optimistic.etherscan.io',
        apiUrl: 'https://optimistic.etherscan.io/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 2,
      estimateBlockTime: 3,
    },
    logoURI: '/op.png',
    interchainGasPaymaster: '0x036d69e09A6c14EBcA4ce79A6e3dBa1Adbbd016B',
    mailbox: '0x682490f624D6eD742e596992fE26CBa65e4aB7B0',
    validatorAnnounce: '0xFCaC1cdbaF7a4f3358dF05AbfeEa17B11d8bC8D3'
  },

};
