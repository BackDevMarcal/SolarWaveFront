import './Logado.css'

const Logado = () => {
    return(
        <>
      <header>  
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
      </header>
      <body>
        <div class="row">
            <nav class="navbar navbar-scroll d-flex align-items-center col-lg-12">
                <div class="teste d-flex align-items-center">
                  <div class="teste-logo">
                      <img class="img-nav" src="../../logo_main.jpg" alt="Minha Figura"/>
                  </div>
                  <div class="nav-list">
                      <div class="row">
                          <div class="home-nav col-lg-3">
                              <b>HOME</b>
                          </div>
                          <div class="home-nav col-lg-3">
                              <b>CONSUMIDORES</b>
                          </div>
                          <div class="home-nav col-lg-3">
                              <b>PRODUTORES</b>
                          </div>
                          <div class="home-nav col-lg-3">
                                Nome usuário                            
                          </div>
                      </div>
                  </div>
                </div>
            </nav>
        </div>
        </body>

        </>
    )
}

export default Logado;