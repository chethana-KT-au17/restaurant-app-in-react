import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}>
            Breakfast</button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}>
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
      
        </div>
      </nav>
    </>
  );
};

export default Navbar;



// {menuList.map(() => {
//   return(
//   <button 
//   className="btn-group__item"
//   onClick={() => filterItem("Breakfast")}>
//   Breakfast
//   </button>
//   )
// })} 

    // {/* <button
    //         className="btn-group__item"
    //         onClick={() => setMenuData(Menu)}
    //       >
    //         All
    //       </button> */}
