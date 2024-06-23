const header = $(`header`);

header.append(`
    <div class="logo">
    <img src="./img/aidagames.png">
    </div>
<nav class="row g-0 align-items-center">  
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block" href="index.html">Inicio</a>
    <a id="boton_header_subscripciones" class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block" href="index.html#banner">Subscripciones</a>
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block   dropdown-toggle"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
    <ul class="dropdown-menu w-25" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="productos.html">Action</a></li>
        <li><a class="dropdown-item" href="productos.html#deportes">Sports</a></li>
        <li><a class="dropdown-item" href="productos.html#disparos">Shooter</a></li>
        <li><a class="dropdown-item" href="productos.html#horror">Horror</a></li>
    </ul>
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block" href="faq.html">Soporte</a>
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block" href="contacto.html">Contacto</a> 
    <div class="col p-md-1 me-xl-4 d-block d-xl-none">
        <div class="container-fluid navbar navbar-dark">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#banner">Subscripciones</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="productos.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="productos.html#accion">Action</a></li>
                            <li><a class="dropdown-item" href="productos.html#deportes">Sports</a></li>
                            <li><a class="dropdown-item" href="productos.html#disparos">Shooter</a></li>
                            <li><a class="dropdown-item" href="productos.html#horror">Horror</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="faq.html">Soporte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</nav>
`);


