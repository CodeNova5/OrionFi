import { cookieStorage, createStorage, noopStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum]

// Always wrap in createStorage
const storage = createStorage({
  storage: typeof window === 'undefined' ? noopStorage : cookieStorage,
})

export const wagmiAdapter = new WagmiAdapter({
  storage,
  ssr: true,
  projectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig
