import React, { Component } from 'react'
import './css/main.css';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarMenuVisible: window.innerWidth > 1159
    }
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
    <div className="wrapper not-index">
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
              <li className="">
                <a href="/">Home</a>
              </li>
              <li className="active">
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
              <img src="//theme.hstatic.net/200000490033/1000843621/14/logo.png?v=51" alt="hali hair" />
            </a>
          </div>
        </div>
        <div id="main-content">
        <div className="title-bg">
            <div className="container-fluid">
              <h1>About me</h1>
            </div>
            </div>
                <div className="container-introduce">
                    <div className="pages">
                        <ol className="breadcrumb hidden-sm hidden-xs">
                            <li>
                            <a href="/" target="_self">Home</a>
                            </li>
                            <li className="active">
                            <span>About me</span>
                            </li>
                        </ol>
                        <div className="col-xs-12 col-sm-9">
                          <div className="content-page">
                              <p>
                                  <strong>Hali Hair </strong>
                                  is a reputable and professional hair business, we provides all kind of hairs on the domestic and oversea market. With Hali Hair, the customer can find a variety of wig models, meet all your needs such as full head wig, half head wig, bald-cover wig, dyed wig, fashional wig… for both men and women.<br />With the motto of putting quality first, all kinds of wig provided by Hali Hair are made from 100% real hair, help the customer to have a nature beatiful, soft hair and safe to use.
                              </p>
                          </div>
                      </div>
                    </div>
                        <div className="introduce">
                            <a href="">
                              <img src="//theme.hstatic.net/200000490033/1000843621/14/slideshow_1.jpg?v=51" alt="hali hair" />       
                            </a>
                        </div>
                 </div> 
    <footer className="footer_bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 footer-block">
            <h4>
              <a href="/" className="logo">
                <img
                  src="//theme.hstatic.net/200000490033/1000843621/14/logo.png?v=51"
                  alt="hali hair"
                />
              </a>
            </h4>
            <div className="footer-intro">
              Hali Hair is a reputable and professional hair business, we
              provides all kind of hairs on the domestic and oversea market.
              With Hali Hair, the customer can find a variety of wig models,
              meet all your needs such as full head wig, half head wig,
              bald-cover wig, dyed wig, fashional wig… for both men and women.
              With the motto of putting quality first, all kinds of wig
              provided by Hali Hair are made from 100% real hair, help the
              customer to have a nature beatiful, soft hair and safe to use.
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 footer-block">
            <h4>Address</h4>
            <div className="footer-address clearfix">
              <span>
                <i className="fa fa-map-marker" />
              </span>
              <p>Trung Bạn- Đông Thọ- Yên Phong- Bắc Ninh</p>
            </div>
            <div className="footer-address clearfix">
              <span>
                <i className="fa fa-mobile" />
              </span>
              <p>+84396606950</p>
            </div>
            <div className="footer-address clearfix">
              <span className="email">
                <i className="fa fa-envelope-o" />
              </span>
              <p>halihair869@gmail.com</p>
            </div>
            <div className="footer-address clearfix">
              <span className="email">
                <i className="fa fa-instagram" aria-hidden="true" />
              </span>
              <p>halihair869</p>
            </div>
            <div className="footer-address clearfix">
              <span className="whatsapp">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  style={{ enableBackground: "new 0 0 60 60" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M30.5,0C14.233,0,1,13.233,1,29.5c0,5.146,1.346,10.202,3.896,14.65L0.051,58.684c-0.116,0.349-0.032,0.732,0.219,1
                       C0.462,59.889,0.728,60,1,60c0.085,0,0.17-0.011,0.254-0.033l15.867-4.175C21.243,57.892,25.86,59,30.5,59
                       C46.767,59,60,45.767,60,29.5S46.767,0,30.5,0z M30.5,57c-3.468,0-6.919-0.672-10.132-1.945l4.849-1.079
                       c0.539-0.12,0.879-0.654,0.759-1.193c-0.12-0.54-0.653-0.876-1.193-0.76l-7.76,1.727c-0.007,0.002-0.012,0.007-0.019,0.008
                       c-0.006,0.002-0.012,0-0.018,0.001L2.533,57.563l4.403-13.209c0.092-0.275,0.059-0.577-0.089-0.827C4.33,39.291,3,34.441,3,29.5
                       C3,14.337,15.336,2,30.5,2S58,14.337,58,29.5S45.664,57,30.5,57z"
                    />
                    <path
                      d="M49.567,38.517c-1.408-2.661-6.025-5.42-6.557-5.732c-0.957-0.544-1.956-0.715-2.813-0.477
                       c-0.655,0.182-1.189,0.592-1.552,1.188c-0.676,0.808-1.517,1.756-1.718,1.912c-1.514,1.024-2.665,0.91-3.974-0.398l-7.962-7.962
                       c-1.309-1.31-1.425-2.461-0.409-3.96c0.167-0.215,1.114-1.057,1.922-1.732c0.597-0.362,1.007-0.896,1.188-1.552
                       c0.238-0.857,0.068-1.857-0.483-2.824c-0.306-0.521-3.064-5.139-5.726-6.547c-1.455-0.771-3.215-0.505-4.377,0.659l-1.759,1.759
                       c-2.862,2.861-3.897,6.11-3.077,9.657c0.675,2.921,2.634,6.019,5.823,9.206l10.193,10.193c3.188,3.188,6.286,5.147,9.207,5.823
                       c0.785,0.182,1.556,0.272,2.311,0.272c2.655,0,5.118-1.121,7.346-3.35l1.758-1.759C50.073,41.731,50.337,39.972,49.567,38.517z
                       M47.494,41.48l-1.758,1.759c-2.374,2.375-4.922,3.205-7.792,2.543c-2.551-0.59-5.324-2.37-8.244-5.289L19.507,30.3
                       c-2.919-2.919-4.699-5.692-5.289-8.243c-0.664-2.869,0.168-5.418,2.542-7.792l1.759-1.759c0.333-0.334,0.772-0.508,1.218-0.508
                       c0.275,0,0.552,0.066,0.81,0.202c1.83,0.969,4.184,4.509,4.93,5.78c0.268,0.47,0.377,0.963,0.287,1.289
                       c-0.047,0.171-0.148,0.292-0.328,0.393l-0.151,0.104c-0.747,0.622-2.045,1.734-2.35,2.185c-0.274,0.405-0.474,0.804-0.64,1.201
                       c-0.326-0.786-0.579-1.654-0.676-2.596c-0.057-0.549-0.55-0.934-1.098-0.892c-0.549,0.058-0.949,0.549-0.892,1.099
                       c0.513,4.943,4.354,8.159,4.518,8.293c0.016,0.013,0.035,0.017,0.051,0.029l7.34,7.339c0.028,0.028,0.057,0.048,0.086,0.075
                       c0.03,0.04,0.046,0.086,0.082,0.122c0.134,0.133,3.339,3.241,8.224,3.749c0.035,0.003,0.07,0.005,0.104,0.005
                       c0.506,0,0.94-0.383,0.994-0.896c0.057-0.55-0.342-1.041-0.892-1.099c-1.133-0.117-2.163-0.407-3.069-0.763
                       c0.324-0.151,0.65-0.329,0.979-0.552c0.452-0.305,1.563-1.604,2.186-2.351l0.104-0.15c0.101-0.18,0.222-0.281,0.394-0.328
                       c0.324-0.094,0.819,0.02,1.278,0.28c1.282,0.752,4.82,3.103,5.791,4.937C48.156,40.126,48.034,40.941,47.494,41.48z"
                    />
                  </g>
                </svg>
              </span>
              <p>+84396606950</p>
            </div>
            <h4 className="mt20">REGISTER FOR A PROMOTION</h4>
            <div className="newsletter">
              <form acceptCharset="UTF-8" action="/account/contact" className="contact-form" method="post">
                    <input name="form_type" type="hidden" defaultValue="customer" />
                    <input name="utf8" type="hidden" defaultValue="✓" />
                    <input type="hidden" id="contact_tags" name="contact[tags]" defaultValue="khách hàng tiềm năng, nhận thông báo" />
                    <input name="contact[email]" type="email" id="contact_email" placeholder="Register email" required />
                    <button className="button button-sp">Register</button>
                    <input id="62814dbfc3654bbf86d130bbc086b415" name="g-recaptcha-response" type="hidden" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            Copyright ©2016 HT Business.{" "}
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.haravan.com?ref=ht0912"
            >
              Powered by Haravan
            </a>
          </div>
        </div>
      </div>
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
        )
    }
}

export default About