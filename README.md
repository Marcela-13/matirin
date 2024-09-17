# matirin-
Este repositório contém o código-fonte para um projeto desenvolvido para facilitar o acesso e a compreensão de frases e palavras de uso diário em linguagem de sinais. 


*{
    margin: 0;
    padding: 0;
}
header{
     background-color: #86beda;
     display: flex;
    grid-template-columns: 30fr 10fr; 
    color: rgb(0, 0, 0);
    height: 90px;
    width: 100%;
}

.nav ul {
    display: flex;
    list-style: none;
    margin-top: 20; 
    background-color: #aeeec3;
    height: 35px;
    display: flex;
    justify-content: center;
}

.nav ul li {
   background-color: #aaaaaa;
    margin: 0 50px;
    padding: 5px;
    height: 14px;
    margin-top: 5px;
    border-radius: 9px;
}

.nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}
.nav ul li a:hover {
    background-color: #8af1f1;
    transition: 2s;
    margin-top: 5px;
    border-radius: 9px;
    margin: 0 50px;
    padding: 5px;
    height: 14px;
}


footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #86beda;
    padding: 10px 0;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
}
