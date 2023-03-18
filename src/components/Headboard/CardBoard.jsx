import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export default function CardBoard() {
  return (
    <Container sx={{width:"100vh"}}>
      <Card sx={{ maxWidth: 860 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="140"
            image="/assets/images/delivery.jpg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Container>
  );
}
