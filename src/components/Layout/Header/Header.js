import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenus from './BurgerMenus';
import ShopingCart from './ShopingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)
	const [shopOpen, setShopOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
          window.removeEventListener('scroll', sticky);
      };
  });

   const sticky = (e) => {
      const header = document.querySelector('.header__area');
      const scrollTop = window.scrollY; 
      scrollTop >= 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
   };
   // Sticky Menu Area End

	return (
		<React.Fragment>
			<Head>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            <title>Educal – Online Course and Education React, Nextjs Template</title>
         </Head>
			<header>
         <div id="header-sticky" className="header__area header__transparent header__padding">
            <div className="container-fluid header_start">
               <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                     <div className="header__left d-flex">
                        <div className="logo">
                           <Link href="/">
                              <a><img src="assets/img/logo/logo.png" alt="logo"/></a>
                           </Link>
                        </div>
                        <div className="header__category d-none d-lg-block">
                           <nav>
                              <ul>
                                 <li>
                                    <Link href="/course-grid"><a className="cat-menu d-flex align-items-center">
                                       <div className="cat-dot-icon d-inline-block">
                                          <svg viewBox="0 0 276.2 276.2">
                                             <g>
                                                <g>
                                                   <path className="cat-dot" d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z"/>
                                                   <path className="cat-dot" d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z"/>
                                                   <path className="cat-dot" d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z"/>
                                                   <path className="cat-dot" d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z"/>
                                                   <path className="cat-dot" d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z"/>
                                                   <path className="cat-dot" d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z"/>
                                                   <path className="cat-dot" d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    "/>
                                                   <path className="cat-dot" d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z"/>
                                                   <path className="cat-dot" d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z"/>
                                                </g>
                                             </g>
                                          </svg>
                                       </div>
                                       <span>Category</span>
                                       </a>
                                    </Link>
                                    <ul className="cat-submenu">
                                       <li><Link href="/course-grid"><a>English Learning</a></Link></li>
                                       <li><Link href="/course-grid"><a>Web Development</a></Link></li>
                                       <li><Link href="/course-grid"><a>Logo Design</a></Link></li>
                                       <li><Link href="/course-grid"><a>Motion Graphics</a></Link></li>
                                       <li><Link href="/course-grid"><a>Video Edition</a></Link></li>
                                    </ul>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>


{/* // NEW CODE */}
                
                  <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                     <div className="header__right d-flex justify-content-end align-items-center">
                        <div className=" d-none d-xl-block">
                           <nav id="mobile-menu font-style">
                           <ul className='header_ul '>
    <li className='header_li has-dropdown'><a className='header_a_items' href="/">Home</a></li>
    <li id="services"><a className='header_a_items has-dropdown' href="#">Services</a>
      <div className="sub-nav">
        <div className="sub-nav-col left">
          <a href="#" className="sub-nav-box header_a_items" id="box-1">
            <div className="icon-background " id="icon-1">
              <i className="fas fa-user-lock icon" />
            </div>
            <h4>Counceling</h4>
            <p>Dedicated counceling by our experts</p>
          </a>
          <a href="#" className="sub-nav-box header_a_items" id="box-2">
            <div className="icon-background" id="icon-2">
              <i className="fas fa-user-lock icon" />
            </div>
            <h4>Consulting</h4>
            <p>24/7 support team</p>
          </a>
          
         
        </div>
        <div className="sub-nav-col right">
          <a href="#" className="sub-nav-box header_a_items "  id="box-5">
            <div className="icon-background" id="icon-5">
              <i className="fas fa-trophy icon " />
            </div>
            <h4>Goals</h4>
            <p>Monthly tracking</p>
          </a>
          <a href="#" className="sub-nav-box header_a_items" id="box-6">
            <div className="icon-background" id="icon-6">
              <i className="far fa-calendar-check icon" />
            </div>
            <h4>Onboarding</h4>
            <p>Get started quickly</p>
          </a>
         
          
        </div>
      </div>
    </li>

    <li id="services" className='has-dropdown'><a href="#" className='header_a_items'>Random</a>
      <div className="sub-nav">
        <div className="sub-nav-col left">
          <a href="#" className="sub-nav-box header_a_items" id="box-1">
            <div className="icon-background" id="icon-1">
              <i className="fas fa-user-lock icon" />
            </div>
            <h4>Counceling</h4>
            <p>Dedicated counceling by our experts</p>
          </a>
          <a href="#" className="sub-nav-box header_a_items" id="box-2">
            <div className="icon-background" id="icon-2">
              <i className="fas fa-user-lock icon" />
            </div>
            <h4>Consulting</h4>
            <p>24/7 support team</p>
          </a>
          
         
        </div>
        <div className="sub-nav-col right">
          <a href="#" className="sub-nav-box header_a_items" id="box-5">
            <div className="icon-background" id="icon-5">
              <i className="fas fa-trophy icon" />
            </div>
            <h4>Goals</h4>
            <p>Monthly tracking</p>
          </a>
          <a href="#" className="sub-nav-box header_a_items" id="box-6">
            <div className="icon-background" id="icon-6">
              <i className="far fa-calendar-check icon" />
            </div>
            <h4>Onboarding</h4>
            <p>Get started quickly</p>
          </a>
         
          
        </div>
      </div>
    </li>

  </ul>


                           </nav>
                        </div>
                        <div className="header__search p-relative ml-50 d-none d-md-block">
                           <form action="#">
                              <input type="text" placeholder="Search..."/>
                              <button type="submit"><i><FontAwesomeIcon icon={['fas', 'search']} /></i></button>
                           </form>
                           <div className="header__cart">
                              <span className="cart-toggle-btn" onClick={() => {setShopOpen(!shopOpen)}}>
                                 <div className="header__cart-icon">
                                    <svg viewBox="0 0 24 24">
                                       <circle className="st0" cx="9" cy="21" r="1"/>
                                       <circle className="st0" cx="20" cy="21" r="1"/>
                                       <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"/>
                                    </svg>
                                 </div>
                                 <span className="cart-item">2</span>
                              </span>
                           </div>
                        </div>
                        <div className="header__cart header__cart--responsive">
                           <span className="cart-toggle-btn" onClick={() => {setShopOpen(!shopOpen)}}>
                                 <div className="header__cart-icon">
                                 <svg viewBox="0 0 24 24">
                                       <circle className="st0" cx="9" cy="21" r="1"/>
                                       <circle className="st0" cx="20" cy="21" r="1"/>
                                       <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"/>
                                 </svg>
                                 </div>
                                 <span className="cart-item">2</span>
                           </span>
                        </div>
                        <div className="header__btn ml-20 d-none d-sm-block">
                           <Link href="/contact"><a className="e-btn">Try for free</a></Link>
                        </div>
                        <div className="sidebar__menu d-xl-none">
                           <div className="sidebar-toggle-btn ml-30" id="sidebar-toggle" onClick={() => {
											setMenuOpen(!menuOpen)
											}}>
                               <span className="line"></span>
                               <span className="line"></span>
                               <span className="line"></span>
                           </div>
                       </div>
                     </div>
                  </div>





               </div>
            </div>
         </div>

         <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

         <ShopingCart shopOpen={shopOpen} setShopOpen={setShopOpen} />
			<div onClick={() => setShopOpen(false)} className={shopOpen ? "body-overlay show" : "body-overlay"}></div>

      </header>
		</React.Fragment>
	);
}

export default Header;