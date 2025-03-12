import { HomeOutlined } from '@ant-design/icons';


import { Breadcrumb } from 'antd';

const menuItems = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                General
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Layout
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Navigation
            </a>
        ),
    },
];

const BreadcrumbsTest = () => {
    return (
        <Breadcrumb
            // separator={<ArrowRightOutlined />}
            separator=""
            items={[
                {
                    title: <HomeOutlined />,
                    href: 'home'
                },
                {
                    type: 'separator',
                    separator: ':'
                },
                {
                    // title: <UserOutlined />,
                    title: 'User',
                    href: 'home/application-center'
                },
                {
                    type: 'separator',
                    separator: '['
                },
                {
                    title: 'Application List',
                    href: 'home/application-center/application-list',
                    menu: { items: menuItems }
                },
                {
                    type: 'separator',
                    separator: ']'
                },
                {
                    title: 'An Application',
                    href: 'home/application-center/application-list/application'
                },
            ]}
        />
    );
};

export default BreadcrumbsTest;