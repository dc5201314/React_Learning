import { Form, Input, Button } from "antd";

function BookInput({ onAdd }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAdd(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="title"
        label="书名"
        rules={[{ required: true, message: "请输入书名" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="author"
        label="作者"
        rules={[{ required: true, message: "请输入作者" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="year"
        label="出版年"
        rules={[{ required: true, message: "请输入出版年" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="isbn"
        label="ISBN"
        rules={[{ required: true, message: "请输入ISBN" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="image"
        label="封面图片URL"
        rules={[{ required: true, message: "请输入图片地址" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="书籍介绍"
        rules={[{ required: true, message: "请输入书籍介绍" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          添加图书
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BookInput;
