import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [connections, setConnections] = useState([
      { id: 1, items: [], thickness: 2 },
      { id: 2, items: [], thickness: 3 },
  ]);


  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleCreateConnectionClick = () => {
    if (selectedItems.length < 2) {
      alert('Selecione pelo menos dois itens para criar uma conexão');
      return;
    }

    const newConnection = {
      id: connections.length + 1,
      items: selectedItems,
    };

    setConnections([...connections, newConnection]);
    setSelectedItems([]);
  };
  
  const handleEditConnection = (updatedConnection) => {
      const newConnection = connections.map(connection => {
          if (connection.id === updatedConnection.id) {
              return updatedConnection;
          }
          return connection;
      });
      setConnections(newConnection);
  };

  const handleDeleteConnection = (connectionId) => {
      
        const newConnection = connections.filter(connection => connection.id !== connectionId);
        setConnections(newConnection);
    };

    // teste de seleção de texto para conexão
   /* 
  useEffect(() => {
    // Monitora eventos de seleção de texto
    document.addEventListener('mouseup', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  function handleSelection(e) {
    // Obtém o texto selecionado
    const selection = window.getSelection().toString();
    if (selection) {
      // Adiciona o item selecionado ao estado
      setSelectedItems(prevItems => [...prevItems, selection]);
    }
    if (selectedItems.length === 2) {
      // Cria a conexão entre os dois itens selecionados
      createConnection(selectedItems[0], selectedItems[1]);
      setSelectedItems([]);
    }
  }
*/

  return (
    <div className="container">
      <h1 className="title">Itens</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button className="itens" onClick={() => handleItemClick(item)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <button className="criarLink" onClick={handleCreateConnectionClick}>
        Criar link
      </button>
      <h2 className="title">Links</h2>
      <ul>
        {connections.map((connection) => (
          <li key={connection.id}>
            <div> 
              {connection.items.map((item) => item.name).join(' -> ')}
            </div>
            <button className='edit' onClick={() => handleEditConnection(connection)}>Editar</button>
            <button className='delete' onClick={() => handleDeleteConnection(connection.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {/*
      <div onMouseUp={handleSelection} onTouchEnd={handleSelection}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
        magna at tincidunt convallis, urna ligula fringilla massa, eu 
        fermentum quam augue ut augue. 
      </div>
      */}
    </div>
  );
}


export default App;