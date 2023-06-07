function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("header img")
    if(html.classList.contains('light')){
        img.setAttribute('src', '../assets/perfil-light.jpeg')
        img.setAttribute('alt', 'imagem de perfil em preto e branco com fundo verde')
    } else{
        img.setAttribute('src', '../assets/perfil-dark.png')
        img.setAttribute('alt', 'imagem de perfil com fundo azul escuro e amarelo')
    }
 
}