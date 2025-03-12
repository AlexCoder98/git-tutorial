import { Flex } from "antd";

const baseStyle: React.CSSProperties = {
    width: '25%',
    height: 54,
}

const FlexTest = () => {
    return (
        <Flex wrap align="center" justify="space-around" style={{ height: '500px', width: '100%', backgroundColor: '#ddd' }}>
            {Array.from({ length: 18 }).map((_, i) => (
                <div key={i}
                    style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }}
                ></div>
            ))}
        </Flex>
    );
};

export default FlexTest;