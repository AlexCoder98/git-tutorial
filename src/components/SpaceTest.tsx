import { UploadOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Upload } from 'antd';

const SpaceTest = () => {
    return (
        <Space.Compact>
            Space
            <Button type="primary">Button</Button>
            < Upload >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload >
            <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                <Button>Confirm</Button>
            </Popconfirm>
        </Space.Compact >
    );
};

export default SpaceTest;