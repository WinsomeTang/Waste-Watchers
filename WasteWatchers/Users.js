const users = []; // Array to store user objects

const addUser = (user) => {
  users.push(user);
};

const findUser = (username) => {
  return users.find((user) => user.username === username);
};

module.exports = {
  users,
  addUser,
  findUser,
};
