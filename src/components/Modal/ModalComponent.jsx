import { useState } from "react";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Modal, Typography } from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { borderRadius } from "@mui/system";

const style = {
  height: '600px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'primary.navbar',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px"
};

const accordionItems = [
  { name: "SOL Y LUNA ALCANFORES", tel: "+529671467419", id: 1 },
  { name: "SOL Y LUNA BOULEVARD", tel: "+529671291668", id: 2 },
  { name: "SOL Y LUNA CENTRO", tel: "+529671452802", id: 3 },
];

const ModalComponent = ({open, handleClose, selectedTheme}) => {

  const [expanded, setExpanded] = useState(null);

  const handleChange = id => (_, isExpanded) => {
    setExpanded(isExpanded ? id : null);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h4">
          Ubicaciones
        </Typography>
        {
          accordionItems.map((item, index)=>(
            <Accordion variant="backgroundAccordion" onChange={handleChange(item.id)} expanded={expanded === item.id} key={index} sx={{boxShadow: 'none', marginTop: '20px', position: 'static'}}>
              <AccordionSummary
                expandIcon={<ChevronDownIcon width={25} color={selectedTheme === "dark" ? "#ffffff" : "#000000"} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                variant="backgroundAccordionHover"
              >
                <Typography component="h5" variant="h5">{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{display: 'flex', flexDirection:'column', gap: "24px"}}>
                  <Link href={`https://api.whatsapp.com/send?phone=${item.tel}&text=Hola ${item.name}!%20Quisiera%20realizar%20una%20reservación`} target="_blank">
                    <Container variant="backgroundAccordionHover" sx={{display:'flex', flexDirection: 'column', textTransform: 'none', width: '100%', padding: "15px 10px", borderRadius:"6px"}}>
                      <Typography className="body2" variant="modalWhatsappColor">Realizar reservación</Typography>
                      <Typography sx={{fontSize:12, lineHeight: '18px', fontWeight: 500}}>Hacer una reservación en la sucursal</Typography>
                    </Container>
                  </Link>                
                <Link href={`https://api.whatsapp.com/send?phone=${item.tel}&text=Hola ${item.name}!%20Quisiera%20realizar%20un%20pedido`} target="_blank" sx={{display:'flex', flexDirection: 'column', textTransform: 'none'}}>
                  <Container variant="backgroundAccordionHover" sx={{display:'flex', flexDirection: 'column', textTransform: 'none', width: '100%', padding: "15px 10px", borderRadius:"6px"}}>
                    <Typography className="body2" variant="modalWhatsappColor">Realizar pedido</Typography>
                    <Typography sx={{fontSize:12, lineHeight: '18px', fontWeight: 500}}>Hacer un pedido para delivery o take out en la sucursal</Typography>
                  </Container>
                </Link>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>
    </Modal>
  );
}

export default ModalComponent;