import { useEffect, useState } from "react";
import {
  addToDo,
  deleteToDo,
  getAllToDo,
  updateToDo,
} from "../../utils/HandleApi";
import ToDo from "../../components/ToDo";

function Home() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [viewData, setViewData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, description) => {
    setIsUpdating(true);
    setText(text);
    setDescription(description);
    setToDoId(_id);
  };

  const handleView = (item) => {
    console.log("view hobe", item);
    setViewData(item);
  };

  return (
    <div className="mb-10">
      <div className="container">
        <h1 className="text-3xl font-bold">Mern Stack Todo App</h1>
        <div className="top">
          <form action="">
            <label htmlFor="addTodo">Write Todo</label>
            <input
              type="text"
              placeholder="Add ToDos..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            />
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              placeholder="descriptions........"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            ></textarea>
          </form>
        </div>
        <div
          className="add"
          onClick={
            isUpdating
              ? () =>
                  updateToDo(
                    toDoId,
                    text,
                    description,
                    setToDo,
                    setText,
                    setDescription,
                    setIsUpdating
                  )
              : () =>
                  addToDo(text, description, setText, setToDo, setDescription)
          }
        >
          {isUpdating ? "Update" : "Add"}
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() =>
                updateMode(item._id, item.text, item.description)
              }
              deleteToDo={() => deleteToDo(item._id, setToDo)}
              handleView={() => handleView(item)}
            />
          ))}
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{viewData.text}</h3>
          <p className="py-4">{viewData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
