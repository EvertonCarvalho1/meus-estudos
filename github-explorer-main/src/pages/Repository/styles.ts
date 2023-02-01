import styled from "styled-components";
import {shade} from "polished"


export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;

        transition: color 0.2s;

        &:hover{
            color:#666
        }
    };

    svg{
        margin-right: 4px;
    }
`;

export const RepositoryInfo = styled.div`

margin-top: 80px;
    header{
        display: flex;
        align-items: center;

        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div{
            margin-left: 24px;

            strong{
                font-size: 36px;
                colort: #3d3d4d;
            }

            p{  
                font-size: 18px;
                color: #737380;
            }
        }
    }

    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;
       

        li{

            & + li{
                margin-left: 80px;
            }
            strong{
                display: block;
                font-size: 36px;

                color: #3d3d4d;
            }

            span{
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`

    margin-top: 80px;
    width: 100%;
    a{
      background: #FFF;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
 
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: background  0.2s;

      &:hover{
            background: ${shade(0.1, '#FFF')};
            p{
                color: #9494a4;
            }
        }

      & + a{
          margin-top: 10px;
      }    

    }

    div{
        margin:0 16px;
        flex: 1;
        strong{
            font-size: 20px;
            color: #3D3D4D;
        }

        p{
            font-size: 18px;
            color:#a8a8b3;
            margin-top: 4px;
        }
    }

    svg{
        margin-left: auto;
        color: #cbcbd6
    } 

`;

export const Spin = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 700px;
    margin:0 auto ;

    display: flex;
    justify-content: center ;
    align-items: center;

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .loader{
        animation: App-logo-spin infinite 2s linear;
    }
`;

