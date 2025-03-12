import { Flex, Splitter, Typography } from 'antd';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
    <Flex justify="center" align="center" style={{ height: '100%' }}>
        <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
            {props.text}
        </Typography.Title>
    </Flex>
);

const SplitterTest = () => {
    return (
        <Splitter lazy style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Splitter.Panel resizable={true} defaultSize="40%" min="20%" max="70%">
                <Desc text="First" />
            </Splitter.Panel>
            <Splitter.Panel>
                <Desc text="Second" />
            </Splitter.Panel>
        </Splitter>
    );
};

export default SplitterTest;