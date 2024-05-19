import "./Footer.css"


function Footer(){
    return(
        <section className="footer">
            <div className="content_footer">
            <span className="title">
                Esteja sempre atualizado
            </span>
            <span className="description_footer">
            Receba atualizações constantes sobre novos projetos e liberação de capacitações através do seu e-mail
            </span>

            <input id="check" type="text" placeholder="E-mail" />

<div className="concord">
<input id="checkT" type="checkbox"/>
            <label>Possuo mais de 18 anos e concordo com os Termos e Condições e o Aviso de Privacidade.</label>

</div>

<button> Inscreva-se </button>
           


            </div>
           
        </section>
    )
}


export default Footer