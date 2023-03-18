import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarMenuVisible: window.innerWidth > 1159,
      selectedIndex: 0,
    };
    this.toggleSidebarMenu = this.toggleSidebarMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ isSidebarMenuVisible: window.innerWidth > 1159 });
  };

  toggleSidebarMenu() {
    this.setState((prevState) => ({
      isSidebarMenuVisible: !prevState.isSidebarMenuVisible,
    }));
  }

    render() {
        return (
<>
<div className="wrapper ">
  <div className="navbar active" id="sidebar-menu" style={{display: this.state.isSidebarMenuVisible || window.innerWidth > 1159 ? "block" : "none"}}>
    <div className="close-menu hidden-lg" id='sidebar-mmenu' onClick={this.toggleSidebarMenu}>
          <i className="fa fa-times" />
        </div>

    <div className="navbar-inner" id="nav-mmenu">
      <h1 className="brand">
        <a href="/">
          <img
            src="//theme.hstatic.net/200000490033/1000843621/14/logo.png?v=51"
            alt="hali hair"
          />
        </a>
      </h1>
      <div id="header-mobile-menu">

          <div className="hidden" id="mmenu">
              <ul>
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li className="">
                  <a href="/about">About me</a>
                </li>
                <li className="">
                  <a href="/products">Product</a>
                </li>
                <li className=''>
                        <a href="/contact">Contact</a>
                  </li>
              </ul>
            </div>
          </div>
          <div className="share-links">
              <a target="_blank" rel="nofollow" className="fa fa-facebook" href="https://www.facebook.com/profile.php?id=100086621584294" title="Facebook" />
              <a target="_blank" rel="nofollow" className="fa fa-google" href="#" title="Google plus" />
              <a target="_blank" rel="nofollow" className="share-in" href="#" title="Instagram" />
            </div>
      </div>
    </div>
  <div className="header-mobile hidden-lg">
  <div className="menu-mobile-btn">
  <a id="menu-mobile" onClick={this.toggleSidebarMenu}>
    <i className="fa fa-bars" />
  </a>
</div>
    <div className="text-center">
      <a href="/" className="brand">
        <img
          src="//theme.hstatic.net/200000490033/1000843621/14/logo.png?v=51"
          alt="hali hair"
        />
      </a>
    </div>
  </div>
  <div id="main-content">
        <div className='nav-background'>
          <a href="">
           <img className="brand-2" src="//theme.hstatic.net/200000490033/1000843621/14/slideshow_1.jpg?v=51" alt="hali hair" />       
          </a>
        </div>
  </div>
  <div className="product-fancy hidden" />
  {/*Scroll to Top*/}
  <a href="#" className="scrollToTop">
    <img
      src="//theme.hstatic.net/200000490033/1000843621/14/backtotop.png?v=51"
      alt="Back to top"
    />
  </a>
</div>
</>
        )
    }
}

export default Header