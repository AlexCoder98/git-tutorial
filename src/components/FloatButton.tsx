import { useState } from "react";

import { FloatButton, Switch } from "antd";

import {
    QuestionCircleOutlined, FileOutlined, SunOutlined, QuestionOutlined
} from '@ant-design/icons';

const FloatButtonTest = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        console.log('It works!!!');
    }

    return (
        <div className="wrapper" style={{ height: '300vh' }}>
            <Switch onChange={setIsOpen} checked={isOpen} />
            <FloatButton
                style={{ insetInlineStart: 25 }}
                onClick={handleClick}
                shape="square"
                description="Help"
                tooltip="Need some help?"
                type="primary"
                icon={<QuestionCircleOutlined spin />}
                badge={{ count: 2, color: 'green', offset: [10, -2] }}
            // badge={{ dot: true, color: 'green' }}
            />
            <FloatButton.Group
                tooltip="Click here"
                shape="square"
                trigger="click"
                open={isOpen}
                icon={<QuestionOutlined />}
                style={{ insetInlineEnd: 50 }}
            // onOpenChange={() => alert('FloatButton Group triggred!')}
            >
                <FloatButton icon={<QuestionCircleOutlined />} type="primary" />
                <FloatButton icon={<FileOutlined />} />
                <FloatButton icon={<SunOutlined twoToneColor="red" />} />
            </FloatButton.Group>
            <FloatButton.BackTop />
            {/* <FloatButton style={{ insetInlineStart: 100 }} onClick={() => console.log('Go go!')} type="primary" /> */}
        </div>
    );
};

export default FloatButtonTest;