import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ThemeProvider, createTheme } from '@mui/material';


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});



export const theme = createTheme({
  
palette: {
  primary: {
    // light: will be calculated from palette.primary.main,
    light : '#FFFFFF',
    main: '#E8ECFB',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    light: '#FB118E', //uniswap purple light mode
    main: '#FB118E', //uniswap purple main mode
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#FDEAF1',
  },
  background: {
    paper: '#FFFFFF',
  },
  text: {
    primary: "#000000",
    secondary : "7780A0",
   
  }
  
},

});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
