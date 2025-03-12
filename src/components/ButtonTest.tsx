import { Button, Space } from 'antd';

import { SearchOutlined } from '@ant-design/icons'

const ButtonTest = () => {
    return (
        <>
            <Space size={20} wrap>
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    iconPosition="start"
                    size="large"
                    shape="default"
                // ghost
                >Primary</Button>
                <Button type="default" disabled>Default</Button>
                <Button type="dashed" danger>Dashed</Button>
                <Button type="text" size="small">Text</Button>
                <Button type="link" href="#">Link</Button>
            </Space>
        </>
    );
};

export default ButtonTest;