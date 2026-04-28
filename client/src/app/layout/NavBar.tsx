import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, MenuItem, MenuList } from '@mui/material';
import { Group } from '@mui/icons-material';

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
                <MenuItem sx={{ display: 'flex', gap: 2 }}>
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
                <MenuItem
                  sx={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  Activities
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  Contact
                </MenuItem>
              </Box>
            </MenuList>
            <Button size="large" variant="contained" color="warning">
              Create activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
