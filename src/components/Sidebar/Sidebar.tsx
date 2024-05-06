import { Box, Link, List } from '@mui/material';
import React from 'react';

import { navigationList } from '@/constants';
import { NavItem } from '@/ui-kit';

import logoLetters from '../../assets/logo-sidebar.svg';
import { styles } from './styles';

export const Sidebar: React.FC = () => (
  <Box sx={styles.container}>
    <Link href="/" sx={styles.title} variant="h4">
      <img src={logoLetters} loading="lazy" decoding="async" height={60} style={styles.logo} alt="logo" />
    </Link>

    <List>
      {navigationList.map((item) => (
        <NavItem {...item} key={item.name} />
      ))}
    </List>
  </Box>
);
