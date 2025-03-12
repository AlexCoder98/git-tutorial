import { Anchor, Col, Row } from 'antd';


const AnchorTest = () => {
    return (
        <Row>
            <Col span={16}>
                <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.1)' }} />
                <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.1)' }} />
                <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.1)' }} />
                <div id="part-3-1" style={{ height: '100vh', background: 'coral' }} />
                <div id="part-3-2" style={{ height: '100vh', background: 'lightgreen' }} />
            </Col>
            <Col span={8}>
                <Anchor
                    // direction="horizontal"
                    // bounds={500}
                    showInkInFixed={false}
                    replace
                    items={[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title: 'Part 1',
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: 'Part 2',
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Part 3',
                            children: [
                                {
                                    key: '4',
                                    href: '#part-3-1',
                                    title: 'Part 3 - 1',
                                },
                                {
                                    key: '5',
                                    href: '#part-3-2',
                                    title: 'Part 3 - 2',
                                },
                            ]
                        },
                    ]}
                />
            </Col>
        </Row>
    );
};

export default AnchorTest;