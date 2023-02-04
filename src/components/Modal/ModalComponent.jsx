import { Modal, useModal, Button, Text } from "@nextui-org/react";

const ModalComponent = () => {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button auto flat onPress={() => setVisible(true)}>
            Abrir modal de Sol y luna
          </Button>
      <Modal scroll
      fullScreen
      closeButton
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...bindings}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Página en construcción
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            Bienvenido al modal del proyecto
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button onPress={() => setVisible(false)}>Agree</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;