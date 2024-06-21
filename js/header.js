console.log("entre aca2");
const header = $(`header`);

header.append(`
    <div><h1>Aida Games</h1></div>
<nav class="row g-0 align-items-center">  
    <a class="col p-md-1 me-xl-4 boton_navegacion d-fnone d-xl-block" href="index.html">Inicio</a>
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block   dropdown-toggle"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
    <ul class="dropdown-menu w-25" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something</a></li>
        <li><a class="dropdown-item" href="#">Something</a></li>
        <li><a class="dropdown-item" href="#">Something</a></li>
    </ul>
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block" href="productos.html">Promociones</a>
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block" href="#">Soporte</a>
    <a class="col p-md-1 me-xl-4 boton_navegacion d-none d-xl-block" href="#noticias">Noticias</a> 
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
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="productos.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="">Action</a></li>
                    <li><a class="dropdown-item" href="productos.html">Another action</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                </ul>
                <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </div>
    </div>
</nav>
`);


