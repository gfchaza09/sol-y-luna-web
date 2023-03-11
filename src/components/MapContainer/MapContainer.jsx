import { Container, Typography } from "@mui/material";
// components
import ButtonComponent from "../Button/ButtonComponent";
import MapboxMap from "../MapboxMap/MapboxMap";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const MapContainer = ({ selectedTheme, title, longLat }) => {

  const [width, setWidth] = useWindowWidth();

  return (
    <Container component="section" sx={{padding: "0px", maxWidth: "1440px", margin: "0px auto"}}>
        <Typography component="h2" variant={width < 480 ? "h5" : "h3"} sx={{display: {mobile: "block", tablet2: "none"}, textAlign: "center", width: "100%", marginTop: "34px", marginBottom: "36px"}}>{title}</Typography>
      <Container sx={{ display: "flex", flexDirection: {mobile: "column-reverse", tablet:"row"}, padding: {mobile: "20px", tablet: "30px 50px", tablet2: "100px"}, margin: "0px auto", gap: {mobile: "0px", tablet: "20px"} }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {moible:"100%", tablet: "45%"},
            padding: "0px",
          }}
        >
            <Typography component="h2" variant="h2" sx={{display: {mobile: "none", tablet2: "block"}, width: "100%"}}>{title}</Typography>
          <Container sx={{display:"flex", flexDirection: "column", gap:"24px", padding: "0px", marginTop:{mobile:"36px"}}}>
            <Typography variant={width > 820 ? "body1" :"body2"}>
                Creemos que la hora de la comida es sagrada, ya que es cuando nutres
                lo más importante que tienes: a ti mismo. Además, nutres el alma
                cuando compartes estos alimentos con tus seres queridos
            </Typography>
            <Typography variant={width > 820 ? "body1" :"body2"}>
                Es por ello que en Sol y Luna restaurante buscamos crear un ambiente
                cómodo para ti, tu familia y amigos, además de crear alimentos con
                un increíble sabor y mucha variedad.
            </Typography>
            <Typography variant={width > 820 ? "body1" :"body2"}>
                Contamos no sólo con una cocina de alimentos salados, sino también
                con un área de respostería, para poder brindarte pan fresco y
                postres deliciosos, asegurándonos que están hechos con la mejor
                calidad.
            </Typography>
          </Container>
          <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0px", marginTop: "50px"}}>
            <ButtonComponent href="https://wa.me/123456789" target="_blank">
                Contactar
            </ButtonComponent>
          </Container>
        </Container>
        <Container sx={{ height: {mobile: "400px", tablet: "auto"}, width:{ mobile: "100%", tablet:"55%"}, padding: "0px", borderRadius: "12px", overflow: "hidden" }}>
          <MapboxMap selectedTheme={selectedTheme} longLat={longLat} />
        </Container>
      </Container>
    </Container>
  );
};

export default MapContainer;
