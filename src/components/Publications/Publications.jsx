import List from "./List";
import Submenu2 from "./Submenu2";
import Submenu3 from "./Submenu3";
import Submenu4 from "./Submenu4";
import Submenu1 from "./submenu1";
function Publications({ filter = "ALL" }) {
  const isSubmenu2 = filter === "SUBMENU_2";
  const isSubmenu3 = filter === "SUBMENU_3";
  const isSubmenu4 = filter === "SUBMENU_4";

  const filtered = filter === "ALL" ? List : List.filter((item) => item.year === filter);

  return (
    <div className="publications">
        {isSubmenu2 ? (
          <Submenu2 />
        ) : isSubmenu3 ? (
          <Submenu3 />
        ) : isSubmenu4 ? (
          <Submenu4 />
        ) : (
          <Submenu1 />
        )}
    </div>
  );
}
export default Publications;
