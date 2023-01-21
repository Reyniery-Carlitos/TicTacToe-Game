export const Cell = ({ children, index, updateBoard }) => {
     const handleClick = () => {
          updateBoard(index);
     };

     return (
          <button onClick={handleClick}>
               <h2> {children} </h2>
          </button>
     )
}