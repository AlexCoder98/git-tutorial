import React from "react";

import { Avatar, Space, List } from "antd";

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ListTest = () => {
    return (
        // <>
        //     <Divider orientation="left">Default Size</Divider>
        //     <List
        //         header={<h2>List Header</h2>}
        //         footer={<p>List Footer</p>}
        //         bordered
        //         dataSource={data}
        //         renderItem={(item) => (
        //             <List.Item>
        //                 <Typography.Text mark>[ITEM]</Typography.Text> {item}
        //             </List.Item>
        //         )}
        //     />
        //     <Divider orientation="left">Small Size</Divider>
        //     <List
        //         size="small"
        //         header={<h2>List Header</h2>}
        //         footer={<p>List Footer</p>}
        //         bordered
        //         dataSource={data}
        //         renderItem={(item) => (
        //             <List.Item>{item}</List.Item>
        //         )}
        //     />
        //     <Divider orientation="left">Large Size</Divider>
        //     <List
        //         size="large"
        //         header={<h2>List Header</h2>}
        //         footer={<p>List Footer</p>}
        //         bordered
        //         dataSource={data}
        //         renderItem={(item) => (
        //             <List.Item>{item}</List.Item>
        //         )}
        //     />
        // </>
        <>
            <List
                grid={{ gutter: 4, column: 2 }}
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 2,
                }}
                dataSource={data}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </>
    );
};

export default ListTest;