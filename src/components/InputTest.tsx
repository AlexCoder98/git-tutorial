import { Space, Input, Select } from "antd";

const { Option } = Select;
const { Search, TextArea } = Input;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);

const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);

const InputTest = () => {
    return (
        <Space
            direction="vertical"
            style={{ width: '100%' }}
            size="large"
        >
            <Input
                placeholder="Type something..."
                size="large"
                variant="underlined"
            />
            <Input
                addonBefore="Text before"
                addonAfter="Text after"
                placeholder="Another input field"
                size="large"
            />
            <Input
                addonBefore={selectBefore}
                placeholder="Type your domain..."
                addonAfter={selectAfter}
            />
            <Search placeholder="Search for products..." loading />
            <Search suffix="Hello" placeholder="Search for products..." enterButton="Search now" />
            <TextArea autoSize rows={4} maxLength={200} showCount />
            <Input.Password
                placeholder="Type your password"
                visibilityToggle={{ visible: false }}
                size="large"
                allowClear
            />
        </Space>
    );
};

export default InputTest;