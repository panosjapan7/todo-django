import React, { useEffect, useState } from 'react';


export default function App(){

  const [todos, setTodos] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const data = await res.json();
      setTodos(data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


    return (
      <div>
        {todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }