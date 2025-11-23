import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import React from "react"



type LoginType = {
    username:string;
     password:string;
}


export const LoginPage = ()=>{

const [loginData, setLoginData] = React.useState<LoginType>({
    username:"",
     password:"",
})



const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setLoginData({...loginData,[e.target.name]:e.target.value
    });
};


const handleSubmit = (e:React.FormEvent<HTMLInputElement>)=>{
    e.preventDefault();
    console.log(loginData)
}


    return(
    
    <>
        <Container sx={{mt:9}} maxWidth="sm">
            <Grid container 
            direction="column" 
            alignItems="center"
            justifyContent="center"
            sx={{minHeight:"100vh"}}
            >
            <Paper sx ={{padding:"1.2rem", boderRadius:"0.5rem"}}>
                <Typography variant="h4" sx={{mb:2, mt:1}}  >Iniciar sesion</Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <TextField fullWidth type="email" name="email" label="Email" variant="outlined" onChange={dataLogin} required/>
                        <TextField fullWidth type="password" name="password" label="Password" variant="outlined" onChange={dataLogin} required/>
                    </Stack>
                   
                    <Button 
                    fullWidth 
                    type="submit" 
                    sx={{mb:1, mt:3}}
                    >Iniciar sesion</Button>
                </Box>
            </Paper>
        </Grid> 
    </Container>
    </>
    )
}