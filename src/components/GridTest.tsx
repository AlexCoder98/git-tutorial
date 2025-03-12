import { Row, Col, Grid } from "antd";

const { useBreakpoint } = Grid;

const GridTest = () => {
    const screens = useBreakpoint();

    console.log(screens);

    return (
        <>
            <Row align="top">
                <Col style={{ backgroundColor: 'skyblue', padding: '20px', textAlign: 'center' }} span={24}>Col - 24</Col>
            </Row>
            <Row align="stretch">
                <Col style={{ color: '#fff', backgroundColor: 'red', padding: '20px', textAlign: 'center' }} span={12}>Col - 12</Col>
                <Col style={{ color: '#fff', backgroundColor: 'darkblue', padding: '20px', textAlign: 'center' }} span={12}>Col - 12</Col>
            </Row>
            <Row align="middle">
                <Col style={{ color: '#fff', backgroundColor: 'coral', padding: '20px', textAlign: 'center' }} span={2}>Col - 8 - 3</Col>
                <Col style={{ color: '#fff', backgroundColor: 'coral', padding: '20px', textAlign: 'center' }} flex="auto">Col - 8</Col>
                <Col style={{ color: '#fff', backgroundColor: 'coral', padding: '20px', textAlign: 'center' }} span={4}>Col - 8</Col>
            </Row>
            <Row align="bottom">
                <Col style={{ color: '#fff', backgroundColor: 'lightgreen', padding: '20px', textAlign: 'center' }} span={6}>Col - 6</Col>
                <Col style={{ color: '#fff', backgroundColor: 'lightgreen', padding: '20px', textAlign: 'center' }} span={6}>Col - 6</Col>
                <Col style={{ color: '#fff', backgroundColor: 'lightgreen', padding: '20px', textAlign: 'center' }} span={6}>Col - 6</Col>
                <Col style={{ color: '#fff', backgroundColor: 'lightgreen', padding: '20px', textAlign: 'center' }} span={6}>Col - 6</Col>
            </Row>
        </>
    );
};

export default GridTest;