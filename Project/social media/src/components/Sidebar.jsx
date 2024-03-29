import { Link } from "react-router-dom";

const Sidebar = ({ selectedtab, setselectedtab }) => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar"
      style={{ width: "180px" }}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg class="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item" onClick={() => setselectedtab("Home")}>
          <Link
            to="/"
            class={`nav-link ${selectedtab === "Home" && "active"}`}
            aria-current="page"
          >
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li onClick={() => setselectedtab("createpost")}>
          <Link
            to="/create-post"
            class={`nav-link ${selectedtab === "createpost" && "active"}`}
          >
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            create post
          </Link>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu text-small shadow" style={{}}>
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
