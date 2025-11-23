import { AppBar, Box, Button, Container,Toolbar, Typography } from '@mui/material';



export const NavBar = () =>{
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                    <Typography variant="h6">NavBar</Typography>
                                    <Box sx={{display: 'flex', gap: 1}}>
                                        <Button variant="outlined">Login</Button>
                                        <Button  variant="outlined">Register</Button>
                                    </Box>
                            </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}