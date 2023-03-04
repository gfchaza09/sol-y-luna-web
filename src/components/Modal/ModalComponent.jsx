import { useState } from "react";
import Link from "next/link";
import { Accordion, AccordionDetails, AccordionSummary, Box, Modal, Typography } from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
  { name: "SOL Y LUNA ALCANFORES", tel: "123456789", id: 1 },
  { name: "SOL Y LUNA BOULEVARD", tel: "123456789", id: 2 },
  { name: "SOL Y LUNA CENTRO", tel: "123456789", id: 3 },
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
              >
                <Typography component="h5" variant="h5">{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{display: 'flex', flexDirection:'column', gap: "24px"}}>
                <Link href={`https://wa.me/${item.tel}`} target="_blank" sx={{display:'flex', flexDirection: 'column', textTransform: 'none', width: '100%'}}>
                  <Typography className="body2" variant="modalWhatsappColor">Realizar reservación</Typography>
                  <Typography className="caption2">Hacer una reservación en la sucursal</Typography>
                </Link>
                <Link href={`https://wa.me/${item.tel}`} target="_blank" sx={{display:'flex', flexDirection: 'column', textTransform: 'none'}}>
                  <Typography className="body2" variant="modalWhatsappColor">Realizar pedido</Typography>
                  <Typography className="caption2">Hacer un pedido para delivery o take out en la sucursal</Typography>
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