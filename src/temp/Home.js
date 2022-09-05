// components
//import Menu from './components/Menu';
// material UI
import Grid from '@mui/material/Grid'; // Grid version 
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

//<Menu name="Menu" />

function Home() {
  return (
    <div className="HomePage">
        <Grid container spacing={2}>
            <Grid xs={8}>
                <h1>xs=8</h1>
            </Grid>
            <Grid xs={4}>
                <h1>xs=4</h1>
            </Grid>
        </Grid>
    </div>
  );
}

export default Home;