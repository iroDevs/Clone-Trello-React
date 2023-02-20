import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html,body,#root {
        height:100%;
    }

    body {
     font:14px 'Roboto', sans-serif;
     background: #002e34;
     color: #FFF;
     -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;

/*
.color1 { #002e34 }; verde-escuro
.color2 { #004443 }; verde-escuor-poucoLeve
.color3 { #00755c }; verde-pouco-escuro
.color4 { #00c16c }; verde-quase-claro
.color5 { #90ff17 }; verde-claro
*/