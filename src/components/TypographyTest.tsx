import { useState } from "react";

import { Typography, Space, Divider } from "antd";

const { Title, Text, Link, Paragraph } = Typography;

const TypographyTest = () => {
    const [text, setText] = useState('Some text');

    return (
        <>
            <section className="titles-container">
                <Title level={1}>Level 1 Title</Title>
                <Title level={2}>Level 2 Title</Title>
                <Title level={3}>Level 3 Title</Title>
                <Title level={4}>Level 4 Title</Title>
                <Title level={5}>Level 5 Title</Title>
            </section>
            <Divider orientation="left">Separator goes here</Divider>
            <section className="texts-container">
                <Space size={20} direction="vertical">
                    <Text editable={{ onChange: setText, tooltip: 'Edit now' }}>{text}</Text>
                    <Text type="secondary">Secondary Text</Text>
                    <Text type="success">Success Text</Text>
                    <Text type="warning">Warning Text</Text>
                    <Text type="danger">Danger Text</Text>
                    <Text disabled>Disabled Text</Text>
                    <Text mark>Marked Text</Text>
                    <Text code copyable>Code Text</Text>
                    <Text keyboard>Keyboard Text</Text>
                    <Text underline>Underlined Text</Text>
                    <Text delete>Deleted Text</Text>
                    <Text strong>Strong Text</Text>
                    <Text italic>Italic Text</Text>
                    <Link href="#">This is a Link</Link>
                </Space>
            </section>
            <section className="paragraphs-container">
                <Paragraph ellipsis={{ rows: 3, expandable: 'collapsible', symbol: 'Show more' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quae? Blanditiis delectus autem numquam impedit, laudantium quo quasi earum magnam quisquam culpa, tempore quae debitis facere fuga omnis deserunt necessitatibus iure molestias beatae. Iure harum cumque error nostrum? Doloremque, facere.</Paragraph>
            </section>
        </>
    );
};

export default TypographyTest;