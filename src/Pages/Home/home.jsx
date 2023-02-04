import "./home.css";
import { Icon } from "@iconify/react";
import Historico from "../../Components/Historico/Historico";

export default function home() {
  return (
    <div className="container-home">
      <div className="grid">
        <div className="header-logo">
          <header>
            <img src=".//src/assets/Group179.svg" alt="" />
          </header>
          <div className="container-menu">
            <div className="options">
              <button className="icones-menu">
                <Icon
                  icon="pepicons-pop:house"
                  width="25"
                  height="25"
                  className="icones"
                />
                Dashboard
              </button>
            </div>
            <div className="options">
              <button className="icones-menu">
                <Icon
                  icon="mdi:archive-arrow-down-outline"
                  width="25"
                  height="25"
                  className="icones"
                />{" "}
                Pacientes
              </button>
            </div>
            <div className="options">
              <button className="icones-menu">
                <Icon
                  icon="mdi:archive-arrow-down-outline"
                  width="25"
                  height="25"
                  className="icones"
                />
                Testes
              </button>
            </div>
            <div className="options">
              <button className="icones-menu">
                <Icon
                  icon="mdi:archive-arrow-down-outline"
                  width="25"
                  height="25"
                  className="icones"
                />
                Configurações
              </button>
            </div>
          </div>
        </div>
        <div className="container-dash-completo">
          <div>
            <header>
              <nav>
                <div className="navbar">
                  <div className="busca">
                    <Icon
                      icon="ic:twotone-search"
                      width="30px"
                      height="30px"
                      className="icon"
                    />
                    <input placeholder="Buscar..." type="search" />
                  </div>
                  <div className="container-main">
                    <Icon
                      icon="material-symbols:settings"
                      width="35"
                      height="35"
                      className="icones"
                    />
                    <Icon
                      icon="mdi:bell-badge"
                      width="35"
                      height="35"
                      className="icones"
                    />
                    <div className="perfil">
                      <p>
                        Olá, <b>Felipe</b>
                      </p>
                      <Icon
                        icon="material-symbols:account-circle"
                        width="35"
                        height="35"
                        className="icones"
                      />
                    </div>
                    <Icon
                      icon="gg:menu-grid-r"
                      width="35"
                      height="35"
                      className="icones"
                    />
                  </div>
                </div>
              </nav>
            </header>
          </div>
          <div>
            <Historico />
          </div>
        </div>
      </div>
    </div>
  );
}
