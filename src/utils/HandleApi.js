import axios from "axios";

const baseUrl = "https://magnificent-jade-peacock.cyclic.app";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setToDo(data);
  });
};

const addToDo = (text, description, setText, setToDo, setDescription) => {
  axios
    .post(`${baseUrl}/save`, { text, description })
    .then((data) => {
      console.log(data);
      setText("");
      setDescription("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (
  toDoId,
  text,
  description,
  setToDo,
  setText,
  setDescription,
  setIsUpdating
) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text, description })
    .then((data) => {
      setText("");
      setDescription("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
