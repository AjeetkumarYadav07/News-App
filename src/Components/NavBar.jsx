import './NewsBar.css'

const NavBar = ({ setCategory  , category}) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary  "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark">NewsApp</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>



          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item  " >
                <div  style={{ cursor: "pointer" }}  onClick={() => setCategory("general")} 
                    className={` nav-link   ${category=== "general" ? "active" : "" }  `} 
                  >General</div>
    
    
              </li>
              
              <li className="nav-item  icon-link-hover ">
                <div  style={{ cursor: "pointer" }}  onClick={() => setCategory("business")} 
                      className={` nav-link   ${category=== "business" ? "active" : "" }  `} 
                  >Business</div>
              </li>
              <li className="nav-item">
                <div  style={{ cursor: "pointer" }} onClick={() => setCategory("technology")}
                  className={` nav-link   ${category=== "technology" ? "active" : "" }  `}
                >Technology</div>
              </li>
              <li className="nav-item">
                <div   style={{ cursor: "pointer" }}  onClick={() => setCategory("health")} 
                
                 className={` nav-link   ${category=== "health" ? "active" : "" }  `}
                >Health</div>
              </li>
              <li className="nav-item">
                <div   style={{ cursor: "pointer" }}  onClick={() => setCategory("sports")} 
                  className={` nav-link   ${category=== "sports" ? "active" : "" }  `}
                >Sports</div>
              </li>
              <li className="nav-item">
                <div   style={{ cursor: "pointer" }}  onClick={() => setCategory("entertainment")} 
                  className={` nav-link   ${category=== "entertainment" ? "active" : "" }  `}
                >Entertainment</div>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
