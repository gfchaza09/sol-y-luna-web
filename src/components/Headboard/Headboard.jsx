import { ButtonBase, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import foto from "../../../public/assets/images/galeries/galeria-alcanfores-2-min.jpg";

const Headboard = ({ data, isAlined }) => {
  const alignRight = true;

  return (
    <Container
      fluid
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "90vw",
        height: "80vh",
        margin: "150px 20px",
        gap: "30px",
      }}
    >
      {isAlined ? (
        <>
          <Box sx={{ flex: "50%" }}>
            <Image
              src={foto}
              alt="foto"
              className="img"
              style={{ borderRadius: "10px", minWidth: "200px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              flex: "50%",
              paddingBottom:"50px"
            }}
          >
            <Typography variant="h2">{data?.servicios?.titulo}</Typography>
            <Typography variant="p">{data?.servicios?.descripcion}</Typography>
            <ButtonBase>Conoce más</ButtonBase>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              flex: "50%",
              paddingBottom:"50px"
            }}
          >
            <Typography variant="h2">{data?.servicios?.titulo}</Typography>
            <Typography variant="p">{data?.servicios?.descripcion}</Typography>
            <ButtonBase>Conoce más</ButtonBase>
          </Box>
          <Box sx={{ flex: "50%" }}>
            <Image
              src={foto}
              alt="foto"
              className="img"
              style={{ borderRadius: "10px", minWidth: "200px" }}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default Headboard;

//   return (
//     <Container fluid  sx={{display:"flex", flexDirection:"row", width:"80vw", height:"80vh", margin:"60px", gap:"10px"}}>
//         {isAlined ? (
//         <Box sx={{flex:"60%"}}>
//             <Image src={foto} alt="foto" className='img'  style={{borderRadius:"10px", minWidth:"200px"}}/>
//         </Box>
//         <Box sx={{display:"flex", flexDirection:"column",justifyContent:"space-between",alignItems:"center" ,flex:"40%"}}>
//             <Typography variant='h2'>{data.servicios.titulo}</Typography>
//             <Typography variant='p'>{data.servicios.descripcion}</Typography>
//             <ButtonBase>Conoce mas</ButtonBase>
//         </Box>
//         )
//     :(
//         <Box>
//             <ButtonBase>hola mundo</ButtonBase>
//         </Box>
//     )}
//     </Container>
//   )
// }
