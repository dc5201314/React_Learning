import { useState } from "react";
import { Layout, Menu, Divider } from "antd";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

const { Header, Content } = Layout;

const initialBooks = [
  {
    id: 1,
    title: "JavaScript高级程序设计",
    author: "Nicholas C. Zakas",
    year: "2020",
    isbn: "9787115547477",
    image: "https://myqqis.oss-cn-beijing.aliyuncs.com/book1.jpg",
    description: "前端开发经典著作，覆盖ES6+新特性",
  },
  {
    id: 2,
    title: "React设计原理",
    author: "卡颂",
    year: "2022",
    isbn: "9787121436567",
    image: "https://myqqis.oss-cn-beijing.aliyuncs.com/book2.jpeg",
    description: "深入解析React实现原理",
  },
];

export default function BookApp() {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentMenu, setCurrentMenu] = useState("input");

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    setSelectedBook(null);
  };

  const updateBook = (id, newData) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...newData } : book))
    );
  };

  return (
    <Layout className="book-layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentMenu]}
          items={[
            { key: "input", label: "图书录入" },
            { key: "list", label: "图书列表" },
          ]}
          onClick={(e) => setCurrentMenu(e.key)}
        />
      </Header>
      <Content className="book-content" style={{ padding: "0 50px" }}>
        {currentMenu === "input" && (
          <>
            <Divider orientation="left">图书录入</Divider>
            <BookInput onAdd={addBook} />
          </>
        )}

        {currentMenu === "list" && (
          <>
            <Divider orientation="left">图书列表</Divider>
            <BookList
              books={books}
              onDelete={deleteBook}
              onSelect={setSelectedBook}
              onUpdate={updateBook}
            />

            <Divider orientation="left">详细信息</Divider>
            <BookDetail book={selectedBook} />
          </>
        )}
      </Content>
    </Layout>
  );
}
