import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        type: 'divider'
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        type: 'divider'
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

const DropdownTest = () => {
    return (
        <Dropdown menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }} arrow={{ pointAtCenter: true }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <p>Hover me</p>
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default DropdownTest;