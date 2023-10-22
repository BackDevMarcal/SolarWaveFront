import "./Paginainicial.css";

const Paginainicial = () => {
  return (
    <>

      <header>  
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
      </header>
      <body>
        <div>
            <nav class="navbar navbar-scroll d-flex align-items-center justify-content-between">
                <div class="teste d-flex align-items-center">
                  <div class="teste-logo">
                      <img class="img-nav" src="../../logo_main.jpg" alt="Minha Figura"/>
                  </div>
                  <div class="nav-list">
                      <div class="row">
                          <div class="col-lg-12 ml-btn-login">
                              <button type="button" class="btn btn-primary btn-nav">Login</button>
                          </div>
                      </div>
                  </div>
                </div>
            </nav>
        </div>
        <section >
            <div class="card-main">
                <span></span>
                <div class="content d-flex texto">
                    <h1>SURFE NA ONDA economize +</h1>
                </div>
            </div>
            <img class="img-logo" src="../../logo_main.jpg" alt="Minha Figura"/>
            <div class="container ">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card card-consumer">
                            <div class="card-body text-center">
                                <h5 class="card-title title-card-consumer">Gaste menos consumindo mais</h5>
                                    <p class="card-text">cadastra-se como consumidor</p>
                                <a href="#" class="btn btn-primary">Cadastrar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-consumer text-center">
                            <div class="card-body">
                                <h5 class="card-title title-card-consumer">Venda seu excedente de energia </h5>
                                    <p class="card-text">cadastra-se como gerador</p>
                                <a href="#" class="btn btn-primary">Afiliar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-consumer">
                            <div class="card-body text-center">
                                <h5 class="card-title title-card-consumer">Faça parte do nosso sistema </h5>
                                    <p class="card-text">cadastra-se como cooperativa</p>
                                <a href="#" class="btn btn-primary">Cadastrar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="icon-about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="#333027" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                        <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z"/>
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                    </svg>
                </div>
                <div class="title-1">
                    <h1>
                        QUEM SOMOS?
                    </h1>
                </div>
                <div class="text">
                    <p>
                    O sistema tem como objetivo atuar na mediação entre vendedores de excedentes de energia, cooperativas que realizam a distribuição da energia e os consumidores que querem comprar energia limpa das cooperativas. Os usuários do tipo cooperativa vão ter acesso a uma lista de produtores de energia e possíveis consumidores que por meio dos dados de cadastro, irão possibilitar que a cooperativa entre em contato com estes usuário. Do mesmo modo os usuários produtores e consumidores poderão marcar interesse em cooperativas, fazendo com que um “card” com suas informações apareça para a cooperativa como interessados nos serviços da mesma
                    </p>
                </div>
               
            </div>
        </section>
        <div>
            <nav class="navbar footer navbar-scroll d-flex align-items-center justify-content-between">
                <div class="teste d-flex align-items-center">
                  <img class="img-footer" src="../../logo_main.jpg" alt="Minha Figura"/>
                  <div class="nav-list">
                      <div class="row">
                          
                      </div>
                  </div>
                </div>
            </nav>
        </div>
      </body>


    </>
  );
};

export default Paginainicial;
