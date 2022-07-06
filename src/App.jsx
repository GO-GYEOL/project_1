import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { memoState } from "./atoms";

function App() {
  const [memo, setMemo] = useRecoilState(memoState);
  return (
    <DragDropContext>
      {Object.keys(memo).map((firstKey) => {
        const board = memo[firstKey];
        return (
          <Droppable droppableId={firstKey}>
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  width: "150px",
                  height: "250px",
                  backgroundColor: "gray",
                  marginBottom: "10px"
                }}
              >
                <li style={{ marginBottom: "5px", backgroundColor: "pink" }}>
                  {firstKey}
                </li>
                {Object.keys(board).map((secondKey, index) => {
                  return (
                    <Draggable draggableId={secondKey} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {board[secondKey].title}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
}

export default App;
