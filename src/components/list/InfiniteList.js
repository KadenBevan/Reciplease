import React, { useState } from "react";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import styled from "styled-components";

const InfiniteList = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(15).keys(), (n) => n + 1)
  );
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(10).keys(), (n) => n + prevState.length + 1)
      ]);
      setIsFetching(false);
    }, 1000);
  }

  return (
    <>
      <StyledInfiniteList className="list-group mb-2">
        {listItems.map((listItem) => (
          <li className="list-group-item" key={listItem}>
            List Item {listItem}
          </li>
        ))}
      </StyledInfiniteList>
      {isFetching && "Fetching more list items..."}
    </>
  );
};

// Styled Components
const StyledInfiniteList = styled.ul`
  .container {
    padding-bottom: 100px;
  }
  .justify-content-center {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-group {
    border-radius: 5px;
    padding: 10px;
  }

  .list-group-item {
    border-bottom: 0.5px solid rgba(0, 190, 0, 0.2);
    border-left: 0.5px solid rgba(0, 0, 0, 0.2);
    border-right: 0.5px solid rgba(0, 0, 0, 0.2);
  }
  .list-group-item:first-of-type {
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  li {
    font-family: sans-serif;
    list-style-type: none;
    padding: 15px;
    padding-left: 15px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    width: 300px;
  }
`;

export default InfiniteList;
