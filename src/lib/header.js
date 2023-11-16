export let header = [
	{
		name: 'Centered Logo Header with Search, Social Icons, and Off-Canvas Menu',
		code: ` <nav class="navbar navbar-light bg-light">
        <div class="container py-3">

            <!-- Mobile Logo -->
            <a class="navbar-brand d-lg-none" href="https://library.livecanvas.com/sections/">
                <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" class="align-middle me-1" alt="My Website">
                LiveCanvas
            </a>
            <!-- end Mobile Logo-->

            <!-- Desktop Logo -->
            <div class="lc-block position-absolute start-50 translate-middle top-50 d-none d-lg-block">
                <a editable="inline" class="navbar-brand mx-auto" href="https://library.livecanvas.com/sections/">
                    <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" class="d-block mx-auto" alt="My Website">
                    LiveCanvas
                </a>
            </div>
            <!-- end Desktop Logo-->

            <div class="lc-block d-none d-lg-block">
                <form role="search" method="get" id="searchform" action="/">
                    <div class="input-group">
                        <input type="text" value="" name="s" id="s" class="form-control" placeholder="Search..." aria-label="Search">
                        <span class="input-group-text" id="basic-addon2">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="text-dark" width="1rem" height="1rem" viewBox="0 0 24 24" style="" lc-helper="svg-icon" fill="currentColor">
                                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
                            </svg>
                        </span>
                    </div>

                </form>
            </div>

            <div class="lc-block d-flex ms-auto gap-2 me-2">
                <div class="lc-block nav-item">
                    <a href="https://twitter.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" lc-helper="svg-icon" class="rws-1">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                        </svg>
                    </a>
                </div>
                <div class="lc-block nav-item">
                    <a href="https://www.youtube.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" style="" lc-helper="svg-icon" class="rws-1">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                        </svg>
                    </a>
                </div>
                <div class="lc-block nav-item">


                    <a href="https://www.tiktok.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" style="" lc-helper="svg-icon" class="rws-1">
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"></path>
                        </svg>
                    </a>
                </div>

            </div>

            <!-- WordPress Menu -->
            <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNavHamburger" aria-controls="navbarNavHamburger">
                <span class="navbar-toggler-icon"></span>
            </button>


            <!-- START OFFCANVAS -->
            <!-- To customize and view the offcanvas, utilize the "show" class, but make sure to remove it once you are finished. -->
            <div class="offcanvas offcanvas-end shadow" tabindex="-1" id="navbarNavHamburger" aria-labelledby="navbarNavHamburgerLabel">
                <div class="offcanvas-header border-bottom">
                    <div class="lc-block">
                        <div editable="rich">
                            <h5 class="offcanvas-title" id="navbarNavHamburgerLabel">Menu</h5>
                        </div>
                    </div>

                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="lc-block mb-4">

                                <div lc-helper="shortcode" class="live-shortcode me-auto"> <!--  lc_nav_menu -->
                                    <ul id="menu-menu-1" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739"><a href="https://library.livecanvas.com/starters" class="nav-link ">BS5 Page Templates</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738"><a href="https://library.livecanvas.com/sections/" class="nav-link ">BS5 Snippets</a></li>
                                    </ul> <!-- /lc_nav_menu -->
                                </div>

                            </div>
                            <div class="lc-block d-grid gap-3">
                                <a class="btn btn-outline-primary" href="#" role="button">Sign in</a>
                                <a class="btn btn-primary" href="#" role="button">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END OFFCANVAS -->
        </div>
    </nav>`
	},
	{
		name: 'Header with Off-Canvas, always collapsed navbar',
		code: ` <nav class="navbar navbar-light">
    <div class="container">
        <a editable="inline" class="navbar-brand" href="https://library.livecanvas.com/sections/">
            <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" class="align-middle me-1" alt="My Website">
            My Site</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- START OFFCANVAS -->
        <!-- To customize and view the offcanvas, utilize the "show" class, but make sure to remove it once you are finished. -->
        <div class="offcanvas offcanvas-end p-2 bg-light" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <div class="lc-block">
                    <div editable="rich">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    </div>
                </div>

                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="row">
                    <div class="col">
                        <div class="lc-block mb-4">

                            <div lc-helper="shortcode" class="live-shortcode me-auto"> <!--  lc_nav_menu -->
                                <ul id="menu-menu-1" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739"><a href="https://library.livecanvas.com/starters" class="nav-link ">BS5 Page Templates</a></li>
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738"><a href="https://library.livecanvas.com/sections/" class="nav-link ">BS5 Snippets</a></li>
                                </ul> <!-- /lc_nav_menu -->
                            </div>


                        </div>
                        <div class="lc-block">
                            <a class="btn btn-primary" href="#" role="button">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END OFFCANVAS -->

    </div>
</nav>
`
	},
	{
		name: 'Centered Logo Header with two individual menus on the sides',
		code: `    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container position-relative py-lg-4">

            <!-- Mobile Logo -->
            <a editable="inline" class="navbar-brand d-lg-none" href="https://library.livecanvas.com/sections/">
                <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" class="align-middle me-1" alt="My Website">
                LiveCanvas</a>
            <!-- end -->

            <!-- Desktop Logo -->
            <div class="lc-block position-absolute start-50 translate-middle top-50 d-none d-lg-block">
                <a editable="inline" class="navbar-brand mx-auto" href="https://library.livecanvas.com/sections/">
                    <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" class="d-block mx-auto" alt="My Website">
                    LiveCanvas</a>
            </div>
            <!-- end -->

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar5" aria-controls="myNavbar5" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="lc-block collapse navbar-collapse" id="myNavbar5">
                <div lc-helper="shortcode" class="live-shortcode me-auto"> <!--  lc_nav_menu -->
                    <ul id="menu-menu-1" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739"><a href="https://library.livecanvas.com/starters" class="nav-link ">BS5 Page Templates</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738"><a href="https://library.livecanvas.com/sections/" class="nav-link ">BS5 Snippets</a></li>
                    </ul> <!-- /lc_nav_menu -->
                </div>

                <div lc-helper="shortcode" class="live-shortcode ms-auto"> <!--  lc_nav_menu -->
                    <ul id="menu-secondary" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item nav-item-33131"><a href="#" class="nav-link  dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Categories</a>
                            <ul class="dropdown-menu  depth_0">
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33132"><a href="https://library.livecanvas.com/sections/category/cta/" class="dropdown-item ">CTA</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33137"><a href="https://library.livecanvas.com/sections/category/contact/" class="dropdown-item ">Contact</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33136"><a href="https://library.livecanvas.com/sections/category/faq/" class="dropdown-item ">FAQ</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33138"><a href="https://library.livecanvas.com/sections/category/flex-layout/" class="dropdown-item ">Flex Layout</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33139"><a href="https://library.livecanvas.com/sections/category/footers/" class="dropdown-item ">Footers</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33140"><a href="https://library.livecanvas.com/sections/category/headers/" class="dropdown-item ">Headers</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33134"><a href="https://library.livecanvas.com/sections/category/pricing/" class="dropdown-item ">Pricing Tables</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33133"><a href="https://library.livecanvas.com/sections/category/team/" class="dropdown-item ">Team</a></li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33135"><a href="https://library.livecanvas.com/sections/category/testimonials/" class="dropdown-item ">Testimonials</a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag nav-item nav-item-33142"><a href="https://library.livecanvas.com/sections/tag/bootstrap-5/" class="nav-link ">Bootstrap 5</a></li>
                    </ul> <!-- /lc_nav_menu -->
                </div>

            </div>


        </div>
    </nav>`
	},
	{
		name: 'Header with two expanded individual menus',
		code: `<nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="https://library.livecanvas.com/sections/">
            <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" class="align-middle me-1" alt="My Website">
            My Site</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar4" aria-controls="myNavbar4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>


        <div class="lc-block collapse navbar-collapse" id="myNavbar4">
            <div lc-helper="shortcode" class="live-shortcode me-auto"> <!--  lc_nav_menu -->
                <ul id="menu-menu-1" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739"><a href="https://library.livecanvas.com/starters" class="nav-link ">BS5 Page Templates</a></li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738"><a href="https://library.livecanvas.com/sections/" class="nav-link ">BS5 Snippets</a></li>
                </ul> <!-- /lc_nav_menu -->
            </div>

            <div lc-helper="shortcode" class="live-shortcode ms-auto"> <!--  lc_nav_menu -->
                <ul id="menu-secondary" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown nav-item nav-item-33131"><a href="#" class="nav-link  dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <ul class="dropdown-menu  depth_0">
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33132"><a href="https://library.livecanvas.com/sections/category/cta/" class="dropdown-item ">CTA</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33137"><a href="https://library.livecanvas.com/sections/category/contact/" class="dropdown-item ">Contact</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33136"><a href="https://library.livecanvas.com/sections/category/faq/" class="dropdown-item ">FAQ</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33138"><a href="https://library.livecanvas.com/sections/category/flex-layout/" class="dropdown-item ">Flex Layout</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33139"><a href="https://library.livecanvas.com/sections/category/footers/" class="dropdown-item ">Footers</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33140"><a href="https://library.livecanvas.com/sections/category/headers/" class="dropdown-item ">Headers</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33134"><a href="https://library.livecanvas.com/sections/category/pricing/" class="dropdown-item ">Pricing Tables</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33133"><a href="https://library.livecanvas.com/sections/category/team/" class="dropdown-item ">Team</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category nav-item nav-item-33135"><a href="https://library.livecanvas.com/sections/category/testimonials/" class="dropdown-item ">Testimonials</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag nav-item nav-item-33142"><a href="https://library.livecanvas.com/sections/tag/bootstrap-5/" class="nav-link ">Bootstrap 5</a></li>
                </ul> <!-- /lc_nav_menu -->
            </div>

        </div>
    </div>
</nav>
`
	},
	{
		name: 'Header with Centered Menu and Buttons on the right side',
		code: `
<nav class="navbar navbar-expand-lg py-3 navbar-light">
    <div class="container">
        <a class="navbar-brand" href="https://library.livecanvas.com/sections/">
            <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" width="48" height="48" class="align-middle me-1" alt="My Website">
            My Site</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar3" aria-controls="myNavbar3" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>


        <div class="lc-block collapse navbar-collapse" id="myNavbar3">
            <div lc-helper="shortcode" class="live-shortcode ms-auto"> <!--  lc_nav_menu -->
                <ul id="menu-menu-1" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739"><a href="https://library.livecanvas.com/starters" class="nav-link ">BS5 Page Templates</a></li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738"><a href="https://library.livecanvas.com/sections/" class="nav-link ">BS5 Snippets</a></li>
                </ul> <!-- /lc_nav_menu -->
            </div>
            <div class="lc-block ms-auto d-grid gap-2 d-lg-block"><a class="btn link-secondary" href="#" role="button">Sign in</a>
                <a class="btn btn-primary" href="#" role="button">Sign up</a>
            </div>
        </div>
    </div>
</nav>`
	}
];
