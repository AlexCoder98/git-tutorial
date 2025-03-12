import { Form, Button, Checkbox, Input } from "antd";

import { QuestionOutlined } from '@ant-design/icons';

import type { FormProps } from "antd";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormTest = () => {
    return (
        <Form
            name="test-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 12 }}
            style={{ maxWidth: '100%' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelWrap
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                // rules={[{ required: true, message: 'Please provide your username' }]}
                required
                tooltip={{ title: "This field is required", icon: <QuestionOutlined /> }}
            >
                <Input placeholder="Username..." />
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please provide your password' }]}
            >
                <Input placeholder="Password..." />
            </Form.Item>
            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                label={null}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormTest;