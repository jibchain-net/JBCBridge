import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';


// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
// , protocolFee?: Address
export const chains: ChainMap<ChainMetadata & { mailbox?: Address, interchainGasPaymaster?: Address, validatorAnnounce?: Address }> = {

  eth: {
    protocol: ProtocolType.Ethereum,
    chainId: 1,
    domainId: 1,
    name: 'eth',
    displayName: 'Ethereum',
    nativeToken: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: [
      { http: 'https://cloudflare-eth.com' },
      { http: 'https://eth.llamarpc.com' },
      { http: 'https://eth.drpc.org' },
      { http: 'https://eth-mainnet.public.blastapi.io' },
    ],
    blockExplorers: [
      {
        name: 'eth',
        url: 'https://etherscan.io',
        apiUrl: 'https://etherscan.io/api',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 2,
      estimateBlockTime: 3,
    },
    logoURI: '/ethereum.png',
    // interchainGasPaymaster: '0x29A7b29ADeb30f0E08649F24bc087Fb586AE7C62',
    // mailbox: '0x9cee5Fa6182e1Ea883903051fb014f080098B10b',
    // validatorAnnounce: '0x46d5261a0a0F184cC283712105bE53064F5f565f',
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
    // interchainGasPaymaster: '0x1c2e0e9D6a0d3B7aB4CE3013219e6fB921E9e4a1',
    // mailbox: '0x7dBeB639F60ecA5156A8C6066dA5c706fe36675d',
    // validatorAnnounce: '0x56122b44789d0824F07a6A6C451C23C9bd33af43'
  },


};
