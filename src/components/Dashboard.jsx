import { AppBar, Button, Container, Toolbar, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar >
                    <Grid container>

                        <Grid item xs={12} md={3} lg={3}>        
                            <Link to={'/qna'} style={{textDecoration:'none', color:'white'}}>Preguntas y Respuestas</Link>
                        </Grid>

                        <Grid item xs={12} md={1} lg={1}>        
                            <Link to={'/taskplan'} style={{textDecoration:'none', color:'white'}}>Agenda</Link>
                        </Grid>                 
                    </Grid>
                </Toolbar >
            </Container>
        </AppBar>
      
    );
  }
  
  export default Dashboard;