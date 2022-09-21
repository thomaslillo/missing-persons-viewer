import { Card, Grid, Typography } from "@mui/material";

export const PersonView = ({ person }) => (
  <Card sx={{ p: 2 }}>
    <Grid container>
      {Object.entries(person).map(([attrName, attrValue]) => [
        <Grid item xs={7}>
          <Typography sx={{ fontWeight: 700 }}>{attrName}</Typography>
        </Grid>,
        <Grid item xs={5}>
          <Typography>{attrValue}</Typography>
        </Grid>,
      ])}
    </Grid>
  </Card>
);