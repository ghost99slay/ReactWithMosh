import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>
        {heading} ({items.length})
      </h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {items.length > 0 ? (
        <>
          <hr></hr>
          <h3>You've got stuff</h3>
        </>
      ) : (
        <>
          <hr></hr>
          <h3>You've got no stuff</h3>
        </>
      )}
    </>
  );
}

export default ListGroup;
