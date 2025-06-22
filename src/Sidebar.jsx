import React from "react";
import styles from "./Sidebar.module.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Switch,
  Avatar,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import DiscountIcon from "@mui/icons-material/Sell";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" classes={{ paper: styles.drawerPaper }}>
      <div className={styles.logo}>
        <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="logo" className={styles.logoImg} />
        <Typography variant="h6" className={styles.logoText}>Flup</Typography>
      </div>

      <List>
        <Typography className={styles.sectionTitle}>MARKETING</Typography>
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><LocalShippingIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><DiscountIcon /></ListItemIcon>
          <ListItemText primary="Discounts" />
        </ListItem>

        <Typography className={styles.sectionTitle}>PAYMENTS</Typography>
        <ListItem button>
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          <ListItemText primary="Ledger" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ReceiptIcon /></ListItemIcon>
          <ListItemText primary="Taxes" />
        </ListItem>

        <Typography className={styles.sectionTitle}>SYSTEM</Typography>
        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem>
          <ListItemIcon><Brightness4Icon /></ListItemIcon>
          <ListItemText primary="Dark mode" />
          <Switch />
        </ListItem>
      </List>

      <div className={styles.profileSection}>
        <Avatar alt="Harper Nelson" src="https://i.pravatar.cc/300?img=13" />
        <Box className={styles.profileText}>
          <Typography variant="body1" className={styles.profileName}>Harper Nelson</Typography>
          <Typography variant="caption" color="textSecondary">Admin Manager</Typography>
        </Box>
      </div>
    </Drawer>
  );
};

export default Sidebar;
