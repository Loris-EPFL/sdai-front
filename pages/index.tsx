'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/header';
import { Grid, Typography, Box, TextField} from '@mui/material';
import { useState } from 'react';
import { DepositField } from '../components/depositField';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
       <Header />

      <main className={styles.main}>

        <h1 className={styles.title}>
          sDAI leveraged yield farming vault
        </h1>

          <DepositField />

        <div className={styles.grid}>
          <a className={styles.card} href="https://github.com/Loris-EPFL/sdai-vault">
            <h2>Vault Documentation</h2>
            <p>Learn how the vault works by leveraging GHO by AAVE</p>
          </a>

          <a className={styles.card} href="https://yearn.fi/veyfi">
            <h2>Boost your dYFI</h2>
            <p>Learn how to boost you dYFI emissions with veYFI</p>
          </a>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/Loris-EPFL/sdai-vault" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by Alberto and Loris 
        </a>
      </footer>
    </div>
    

    
  );
};

export default Home;
