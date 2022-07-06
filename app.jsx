import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

function App() {
  const onDragEnd = () => {};
  const [toDos, setToDos] = useRecoilState(toDoState);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {/* 이게 보드임 결국. Droppable과 ul 써줘서 보드 완성 */}

              {toDos.map((item, index) => (
                <Draggable draggableId={item} index={index}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.dragHandleProps}>
                      {item}
                    </li>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
              {/* placeholder의 역할이 뭐지? 없으면 작동을 제대로 안하네? */}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
