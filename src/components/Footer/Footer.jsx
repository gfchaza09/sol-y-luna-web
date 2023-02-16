import { Container, Card, Row, Text, Col } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{height: "292px", maxWidth: "1440px", width: "100%"}}>
        <Container fluid justify="center" alignContent="center" gap={1}>
            <Row justify="center" align="center">
                <Col>Logo</Col>
                <Col><Text><Link href="/">Sol y Luna San Cristóbal</Link></Text></Col>
            </Row>
            <Row gap={2}>
                <Col>
                    <Text><Link href="/menu">Menú</Link></Text>
                </Col>
                <Col>
                    <Text><Link href="/about">Nosotros</Link></Text>
                </Col>
                <Col>
                    <Text><Link href="/services">Servicios</Link></Text>
                </Col>
                <Col>
                    <Text><Link href="/location">Ubicaciones</Link></Text>
                </Col>
            </Row>
            <Row>
                <Col><Text>Facebook</Text></Col>
                <Col><Text>Instagram</Text></Col>
                <Col><Text>Tik Tok</Text></Col>
                <Col><Text>Trip Advisor</Text></Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer