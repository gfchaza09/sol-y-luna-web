import { Container, Typography } from "@mui/material";
// components
import ButtonComponent from "../Button/ButtonComponent";
import MapboxMap from "../MapboxMap/MapboxMap";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const MapContainer = ({ selectedTheme, title, longLat, linkLocation, tel, text1, text2, text3 }) => {

  const [width, setWidth] = useWindowWidth();

  return (
    <Container component="section" sx={{padding: "0px", maxWidth: "1440px", margin: "0px auto"}}>
        <Typography component="h2" variant={width < 480 ? "h5" : "h3"} sx={{display: {mobile: "block", tablet2: "none"}, textAlign: "center", width: "100%", marginTop: {mobile: "34px", mobile2: "54px"}, marginBottom: {mobile: "36px", mobile2: "24px"}}}>{title}</Typography>
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
                {text1}
            </Typography>
            <Typography variant={width > 820 ? "body1" :"body2"}>
                {text2}
            </Typography>
            <Typography variant={width > 820 ? "body1" :"body2"}>
                {text3}
            </Typography>
          </Container>
          <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0px", marginTop: "50px"}}>
            <ButtonComponent href={`https://wa.me/${tel}`} target="_blank">
                Contactar
            </ButtonComponent>
          </Container>
        </Container>
        <Container sx={{ height: {mobile: "400px", tablet: "auto"}, width:{ mobile: "100%", tablet:"55%"}, padding: "0px", borderRadius: "12px", overflow: "hidden" }}>
          <MapboxMap selectedTheme={selectedTheme} longLat={longLat} linkLocation={linkLocation}/>
        </Container>
      </Container>
    </Container>
  );
};

export default MapContainer;
