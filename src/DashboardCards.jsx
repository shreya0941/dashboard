import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Group, AttachMoney, ShoppingBag, Replay } from '@mui/icons-material';

const stats = [
  {
    title: 'Total customers',
    value: '567,899',
    icon: <Group style={{ color: '#22c55e' }} />,
    growth: '+2.5%',
    color: '#22c55e',
  },
  {
    title: 'Total revenue',
    value: '$3,465 M',
    icon: <AttachMoney style={{ color: '#10b981' }} />,
    growth: '+0.5%',
    color: '#10b981',
  },
  {
    title: 'Total orders',
    value: '1,136 M',
    icon: <ShoppingBag style={{ color: '#ef4444' }} />,
    growth: '-0.2%',
    color: '#ef4444',
  },
  {
    title: 'Total returns',
    value: '1,789',
    icon: <Replay style={{ color: '#3b82f6' }} />,
    growth: '+0.12%',
    color: '#3b82f6',
  },
];

const DashboardCard = () => {
  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card style={{ padding: '20px', borderRadius: '12px', height: '100%' }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                  backgroundColor: `${stat.color}1A`, // light background
                  borderRadius: '50%',
                  padding: '10px',
                  marginRight: '10px'
                }}>
                  {stat.icon}
                </div>
                <Typography variant="subtitle2" color="textSecondary">
                  {stat.title}
                </Typography>
              </div>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>{stat.value}</Typography>
              <Typography variant="body2" style={{ color: stat.color, marginTop: '4px' }}>
                {stat.growth}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCard;
