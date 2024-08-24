import { Button, Form, Input, InputNumber, Select, Space } from "antd"
import SubmitButton from "../Component/SubmitButton";

const HomeForm = () => {
    const [form] = Form.useForm()
    const handleChange = (value: any) => {
        console.info(`update value country: ${value}`)
    }

    const opts = [
        {
            label: '🇨🇳 - China',
            value: 'china',
            // emoji: '🇨🇳',
            // desc: 'China (中国)',
        },
        {
            label: '🇺🇸 - USA',
            value: 'usa',
            // emoji: '🇺🇸',
            // desc: 'USA (美国)',
        },
        {
            label: '🇯🇵 - Japan',
            value: 'japan',
            // emoji: '🇯🇵',
            // desc: 'Japan (日本)',
        },
        {
            label: '🇰🇷 - Korea',
            value: 'korea',
            // emoji: '🇰🇷',
            // desc: 'Korea (韩国)',
        },
    ];

    return (
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="age" label="Age" rules={[{ required: true }]}>
               <InputNumber 
                    min={1}
                    max={200}
                    style={{ width: 200 }}
                />
            </Form.Item>
            <Form.Item name="select" label="Select" rules={[{ required: false }]}>
                <Select
                    placeholder="Select"
                    options={opts}
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item>
                <Space>
                <SubmitButton form={form}>Submit</SubmitButton>
                <Button htmlType="reset">Reset</Button>
                </Space>
            </Form.Item>
        </Form>
    );
}


export default HomeForm