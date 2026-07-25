import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, LinearProgress, MenuItem, MenuList } from '@mui/material';
import { Group } from '@mui/icons-material';
import { NavLink } from 'react-router';
import MenuItemLink from '../shares/components/MenuItemLink';
import { useStore } from '../../lib/hooks/useStore';
import { Observer } from 'mobx-react-lite';

export default function NavBar() {
  const { uiStore } = useStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <MenuList>
              <Box>
                <MenuItem
                  component={NavLink}
                  to="/"
                  sx={{ display: 'flex', gap: 2 }}
                >
                  <Group fontSize="large" />
                  <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                    Reactivities
                  </Typography>
                </MenuItem>
              </Box>
            </MenuList>
            <MenuList
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <MenuItemLink to="/activities">Activities</MenuItemLink>
                <MenuItemLink to="/createActivity">
                  Create Activity
                </MenuItemLink>
                <MenuItemLink to="/counter">Counter</MenuItemLink>
                <MenuItemLink to="/errors">Errors</MenuItemLink>
              </Box>
            </MenuList>
            <MenuList>
              <MenuItem>User menu</MenuItem>
            </MenuList>
          </Toolbar>
        </Container>

        <Observer>
          {() =>
            uiStore.isLoading ? (
              <LinearProgress
                color="secondary"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                }}
              />
            ) : null
          }
        </Observer>
      </AppBar>
    </Box>
  );
}
