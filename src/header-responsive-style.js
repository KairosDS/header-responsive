import { css } from 'lit-element';

export const HeaderResponsiveStyles = css`
  :host {
    width: 100%;
  }
 
  .header__container{
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0px 2px 6px rgba(178, 176, 176, 0.5);
    z-index: 4;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    box-sizing: border-box;
  }

  .header-menu-icon {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 17px;
    right: 17px;
    background: url(/assets/images/menu-navigation-xs.svg) no-repeat center;
    background-size: 100%;
    cursor: pointer;
    transition: all 0.3s;
    outline: none;
  }

  .header__input {
    display: none;
  }

  .header__input:checked ~ .header-menu-icon {
    transform: rotate(90deg);
    background-image: url(/assets/images/menu-nav-close.svg);
  }

  .header__input:checked ~ .header--container--items {
    right: 0;
  }

  .header--container--items {
    width: 92vw;
    height: 90vh;
    cursor: hand;
    position: fixed;
    top: 60px;
    right: -120%;
    background-color: #464545;
    transition: all 0.75s ease;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    
  }
  @media all and (min-width: 1024px) {
    .header__container {
      flex-direccion: row;
      height: 60px;
      padding: 0 9%;
      
    }

    .header-menu-icon {
       display: none;
    }
  

    .header--container--items {
      width: 100%;
      height: 100%;
      position: static;
      transition: none;
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

    }
  }


`;
