import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, MenuItem, MenuList } from '@mui/material';
import { Group } from '@mui/icons-material';
import { NavLink } from 'react-router';
import MenuItemLink from '../shares/components/MenuItemLink';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
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
              </Box>
            </MenuList>
            <MenuList>
              <MenuItem>User menu</MenuItem>
            </MenuList>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
