import { List } from "antd";
import BookItem from "./BookItem";

function BookList({ books, onDelete, onSelect, onUpdate }) {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={books}
      renderItem={(book) => (
        <List.Item key={book.id}>
          <BookItem
            book={book}
            onDelete={onDelete}
            onSelect={onSelect}
            onUpdate={onUpdate}
          />
        </List.Item>
      )}
    />
  );
}

export default BookList;
