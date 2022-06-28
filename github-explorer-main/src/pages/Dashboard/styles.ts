import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    color: #3a3a3a;
    font-size: 48px;
    line-height: 56px;
    margin-top: 80px;
    max-width: 450px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    width: 100%;
    max-width: 700px;
    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #FFF;
        
        ${(props) => props.hasError && css`
            border: 2px solid  #c53030;
            border-right: 0;
        `}

        &::placeholder{
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        border-radius: 0 5px 5px 0;
        background: #04d361;
        border:0;
        color: #fff;
        font-weight: bold;
        transition: 0.2s;

        &:hover{
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    width: 100%;
    max-width: 700px;
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

    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
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


export const ModifyContainer = styled.div`
    margin: 0px !important;

    .button1{
      border: 0;
      background: #FFF;
      color: #a8a8b3;

        &:hover{
            border: 0;
            color: ${shade(0.2, '#a8a8b3')};
            background-color: rgb(0 0 0 / 4%);
        }
    }

    .button2{
        background: #a8a8b3;
        box-shadow:none ;
        &:hover{
            background: ${shade(0.2, '#a8a8b3')};
            box-shadow:none ;
        }
    }
    

    display: flex;
    button{
        margin:5px 0 25px 0;

        & + button{
            margin-left: 15px;
        }
    }

`;