const list = (clients) => {
  return clients.map(client => 
    `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance.toFixed(2)}</strong>
    </li>`
  ).join('');
};



const order = (clients, property) => {
  return clients.sort((a, b) => {
    if (typeof a[property] === 'string') {
      return a[property] > b[property] ? 1 : -1;
    }
    return a[property] - b[property];
  });
};




const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};


const info = (clients, index) => {
  return clients.find(client => client.index === index);
};


const search = (clients, query) => {
  return clients.filter(client => 
    client.name.toLowerCase().includes(query.toLowerCase())
  );
};
