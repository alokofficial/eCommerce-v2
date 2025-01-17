import { Pagination } from "react-bootstrap";

import { NavLink } from "react-router-dom";
const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            style={{ cursor: "pointer" }}
            as={NavLink}
            to={!isAdmin ? `/page/${x + 1}` : `/admin/productlist/${x + 1}`}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};
export default Paginate;
