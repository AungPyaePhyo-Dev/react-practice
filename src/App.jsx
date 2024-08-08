import { useState } from 'react';

import { Box, Container } from "@mui/material"  

import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Item from './components/Item.jsx';

import { useApp } from './ThemedApp'

export default function App() {
  const { showForm } = useApp();

  const [data, setData] = useState([
    {id:1, content:"Hello, World", name: "Alice"},
    {id:2, content:"React is fun", name: "Bob"},
    {id:3, content:"Yay, Interesting", name: "Chris"},
  ]);

  const remove = id => {
    setData(data.filter(item => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([{id, content, name}, ...data]);
  }

  return (
    <Box>
      <Header />
      <Container
        maxWidth="sm"
        sx={{ mt: 4}}
      >
        {showForm&& <Form add={add} />}

        {data.map(item => {
          return (
            <Item
              key={item.id}
              item={item}
              remove={remove}
            />
          );
        })}
      </Container>
    </Box>
  );
}