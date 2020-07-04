import React from 'react' 
import Layout from "../components/Layout"
import ThemeButton from "../components/ThemeButton"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'
import * as S from "../components/Layout/styled"

const AboutPage = () => {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  }
  return (
  <Layout>
    <MainContent>
    <SEO title="About"/>
      <S.LayoutMainContent>
        <h1>Sobre este blog</h1>
        <p> TL;DR - Um caderno digital pessoal e um playground para Gatsby, React e CSS. ❤ </p>
        <h2>Como começou</h2>
        <p>Este blog foi desenvolvido durante <a href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">o curso de Gatsby</a> que fiz pela Udemy com o instrutor <a href="https://willianjusten.com.br/">Willian Justen.</a> Ali ele ensina passo-a-passo como criar um blog igual ao dele utilizando <a href="https://www.gatsbyjs.org/">Gatsby</a>. Recomendo muito e falo um pouquinho mais sobre o curso <a href="/curso-gatsby/">aqui</a>.</p>

        <p>Terminado o curso, a era criar um blog completamente do zero. Mas, depois de um tempo tentando, percebi que estava patinando em conceitos muito básicos. Acabei passando muito tempo travada na frente do computador sem evoluir nada - e isso não é o jeito mais motivante de aprender coisas novas depois de um dia de trabalho. Acabei desanimando.</p>

        <p>Depois de uma longa pausa, retomei a ideia do blog. Desta vez, voltando para trabalhar a partir do projeto final do curso: customizando layout, design, adicionando/removendo componentes, enquanto continuo aprendendo.</p>

        <p>Percebi que essa abordagem foi certa quando me vi passando o fim de semana todo trabalhando nas primeiras customizações sem ver o tempo passar. <a href="https://pt.wikipedia.org/wiki/Fluxo_(psicologia)">Estado de Flow</a> total.</p>

        <blockquote><p>"learning is hard, and it's humbling" ( <a href="https://css-tricks.com/learning-to-learn/">Learning to learn, by Sarah Drasner</a>)</p></blockquote>

        <hr/>

        <h2>Conteúdo</h2>

        <p>Este blog é um caderno digital pessoal. Um lugar para organizar referências e registrar aprendizados sobre assuntos de interesse profissional e pessoal, como:</p>

        <ul>
          <li>Front-end</li>  
          <li>CSS</li> 
          <li>Creative work</li> 
          <li>Languages</li> 
          <li>❤</li>        
        </ul> 
        
        <p>Com o passar <strike>das décadas</strike> dos anos, acabei guardando esse tipo de informação em diferentes plataformas: evernote, google keep, e-mails, whatsapp, playlists do Youtube e blogs antigos.</p>
        
        <p>Por isso, o Gatsby caiu como uma luva para uma necessidade antiga, pois ele realmente me permite criar um caderno digital, com a minha cara, de acordo com as minhas necessidades. Estou organizando e refinando o conteúdo aos poucos, enquanto vou aprendendo sobre Gatsby e tecnologias relacionadas.</p>

        <p>Este blog também é um playground para brincar com Gatsby, React.JS e CSS. Para testar ideias como essa que aprendi com o vídeo do <a href="https://youtu.be/ad9f-EYtWPo">WebDevEducation</a>:</p>

        <ThemeButton toggled={toggled} onClick={handleClick}/>

        <p>Sim, sou bem apaixonadinha por animações CSS.</p> 
        
        <p>Ainda engatinhando nesse universo de possibilidades criadas por tecnologias web modernas, ando me segurando para não transformar esse blog num carnaval, hihi. Confesso que comecei a construir esse componente para ser o botão para trocar o tema do blog (facepalm).</p>

        <hr/>

        <h2>Quem escreve?</h2>

        <p><a href="https://www.linkedin.com/in/mileinesouto/">Mileine</a> - ou Mi. O que for mais fácil lembrar. =)</p>
        <p> Hmmm... É difícil falar sobre nós mesmos, não é?</p>
        <p>Resumindo, sou apaixonada pelos temas que descrevem este blog: </p>
        <ul>
          <li>Front-end: minha área de especialização.</li>  
          <li>CSS: meu crush dentro da minha área de especialização. LOL!</li> 
          <li>Creative work: atividades que relaxam meu cérebro e o preparam para tarefas do dia-a-dia.</li> 
          <li>Languages: minha primeira paixão. E que vou levar para vida toda.</li> 
          <li>❤ : tudo o que me faz crescer. Músicas, palestras, livros, textos...</li>        
        </ul> 

        <p>Ah! Também sou apaixonada por uma banda chamada Mayday 五月天.</p>

        <hr/>

        <h2>Motivação</h2>

        <p>Escrevo para Mi do futuro. Especialmente para a Mi do Front-end.</p>

        <p>Escrevo para registrar aprendizados na área, porque sei que cada "não sei nem por onde começar" que se torna um "consegui!" serve como combustível para seguir em frente e continuar trabalhando. :)</p>

        <p>加油！加油！</p>
      </S.LayoutMainContent>
    </MainContent>
  </Layout>
)}

export default AboutPage