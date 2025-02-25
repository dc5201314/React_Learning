import { Descriptions, Image } from "antd";

function BookDetail({ book }) {
  if (!book)
    return (
      <div style={{ textAlign: "center", padding: 24 }}>
        请从左侧列表选择图书查看详情
      </div>
    );

  return (
    <div style={{ padding: 24 }}>
      <Image
        width={200}
        src={book.image}
        alt={book.title}
        style={{ marginBottom: 24 }}
      />
      <Descriptions bordered column={2}>
        <Descriptions.Item label="书名">{book.title}</Descriptions.Item>
        <Descriptions.Item label="作者">{book.author}</Descriptions.Item>
        <Descriptions.Item label="出版年">{book.year}</Descriptions.Item>
        <Descriptions.Item label="ISBN">{book.isbn}</Descriptions.Item>
        <Descriptions.Item label="简介" span={2}>
          {book.description || "暂无简介"}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default BookDetail;
