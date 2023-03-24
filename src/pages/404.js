import { Container, Typography } from "@mui/material";
import ButtonComponent from "@/components/Button/ButtonComponent";

const NotFoundPage = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          width: "100vw",
          maxWidth: "100%",
          height: "100vh",
        }}
      >
        <Typography component="h1" variant="h1" sx={{ textAlign: "center" }}>
          404 - Página no encontrada
        </Typography>
        <Typography component="h2" variant="h4" sx={{ textAlign: "center" }}>
          Lo siento, no hay nada para ver aquí
        </Typography>
        <div>
          <ButtonComponent href="/">Volver al inicio</ButtonComponent>
        </div>
      </Container>
    </>
  );
};

export default NotFoundPage;
