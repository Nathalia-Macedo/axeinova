import "./Home.css"
import Case from "../../Components/Cases"
import case1 from "../../Assets/case1.jpg"
import case2 from '../../Assets/case2.png'
import case3 from '../../Assets/case3.jpg'
import Footer from "../../Components/Footer"

function Home(){
    return(
        <>  
        <section className="inicio">
            <header>
                <nav>
                    {/* <img src={logo} alt="" /> */}
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre Nós</li>
                        <li>Ajuda</li>
                    </ul>
                    <ul className="access">
                        <li>Cadastrar</li>
                        <li id="entrar">Entrar</li>
                    </ul>
                </nav>
            </header>

            <h1>Promovendo Inclusão</h1>
            <span>Impactando Negócios</span>
        </section>
        <section className="description">
        <input type="text" placeholder="Pesquisar" />
        <p>Descubra os métodos de promover a diversidade em seu negócio através da capacitação de pessoas com deficiência utilizando métodos de disseminação de conhecimento teórico e prático de forma personalizada para cada perfil de colaborador</p>

        <button>Ler Mais</button>
        
        
        </section>
        <section className="cases">
            <h1>Cases de sucesso</h1>
            <div className="yellow"></div>

            <div className="conteiner">
        <Case img={case1} alt={'brand name'} name={'brand name'} link={"#"}/>
        <Case img={case2} alt={'brand name'} name={'studio IA'} link={"#"}/>
        <Case img={case3} alt={'brand name'} name={'Restaurant'} link={"#"}/>
        
            </div>
            <button className="button">Ver mais</button>

        </section>
       <Footer></Footer>
        </>
    )
}

export default Home