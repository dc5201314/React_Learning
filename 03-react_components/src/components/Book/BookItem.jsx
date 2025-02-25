import { useState } from "react";
import { Card, Popconfirm, Form, Input, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function BookItem({ book, onDelete, onSelect, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    onUpdate(book.id, values); // 调用父组件的更新函数
    setEditing(false); // 退出编辑状态
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt={book.title}
          src={book.image}
          style={{
            height: "100%",
            width: "100%",
            maxHeight: 200,
            objectFit: "contain",
          }}
        />
      }
      title={
        editing ? (
          <Form
            form={form}
            initialValues={book} // 初始值设置为当前书籍的值
            layout="vertical"
            onFinish={handleUpdate} // 提交时调用handleUpdate
          >
            <Form.Item
              name="title"
              label="书名"
              rules={[{ required: true, message: "请输入书名" }]}
            >
              <Input placeholder="书名" />
            </Form.Item>
            <Form.Item
              name="author"
              label="作者"
              rules={[{ required: true, message: "请输入作者" }]}
            >
              <Input placeholder="作者" />
            </Form.Item>
            <Form.Item
              name="year"
              label="出版年"
              rules={[{ required: true, message: "请输入出版年" }]}
            >
              <Input placeholder="出版年" />
            </Form.Item>
            <Form.Item
              name="isbn"
              label="ISBN"
              rules={[{ required: true, message: "请输入ISBN" }]}
            >
              <Input placeholder="ISBN" />
            </Form.Item>
            <Form.Item
              name="image"
              label="封面图片URL"
              rules={[{ required: true, message: "请输入图片地址" }]}
            >
              <Input placeholder="图片URL" />
            </Form.Item>
            <Form.Item
              name="description"
              label="书籍介绍"
              rules={[{ required: true, message: "请输入书籍介绍" }]}
            >
              <Input.TextArea rows={4} placeholder="书籍介绍" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                确认修改
              </Button>
              <Button
                style={{ marginLeft: "8px" }}
                onClick={() => setEditing(false)}
              >
                取消
              </Button>
            </Form.Item>
          </Form>
        ) : (
          book.title // 非编辑状态下显示书名
        )
      }
      actions={[
        <EditOutlined
          key="edit"
          onClick={() => {
            form.setFieldsValue(book); // 设置表单初始值
            setEditing(true); // 进入编辑状态
          }}
        />,
        <Popconfirm
          key="delete"
          title="确定要删除吗?"
          onConfirm={() => onDelete(book.id)} // 确认删除
        >
          <DeleteOutlined />
        </Popconfirm>,
      ]}
      onClick={() => !editing && onSelect(book)} // 点击未编辑状态下选择图书
    >
      <p>
        <strong>作者:</strong> {book.author}
      </p>
      <p>
        <strong>出版年:</strong> {book.year || "未知"}
      </p>
    </Card>
  );
}

export default BookItem;
