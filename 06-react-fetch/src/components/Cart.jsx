/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 13:55:12
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 14:04:46
 * @FilePath: \06-react-fetch\src\components\Cart.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Table, Button } from "antd";
import useCartStore from "../store/cartStore";
import { Form, Input } from "antd";

const Cart = () => {
  const cartStore = useCartStore();
  const { cartItems, addItem, removeItem } = cartStore;
  const [form] = Form.useForm();

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "名字", dataIndex: "name", key: "name" },
    {
      title: "状态",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => removeItem(record.id)}>删除</Button>
      ),
    },
  ];

  const onFinish = (values) => {
    addItem({ id: Date.now(), name: values.name });
    form.resetFields();
  };

  return (
    <div>
      <h2>购物车</h2>
      <Table dataSource={cartItems} columns={columns} rowKey="id" />
      <Form form={form} onFinish={onFinish} layout="inline">
        <Form.Item
          name="name"
          rules={[{ required: true, message: "请输入商品名称" }]}
        >
          <Input placeholder="商品名称" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加商品
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Cart;
