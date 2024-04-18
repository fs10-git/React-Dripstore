
import "./Carrinho.css"
import BgBlue from "../../assets/BgBlue.png"

export default function Carrinho(){
    return(
        <>
        <div className="pai" >
            <div className="body2">
                <div className="ths">
                    <div className="meuCarinho"> 
                       <span>MEU CARRINHO</span>
                    </div>
                    <div className="ps">
                        <p>QUANTIDADE</p>
                        <p>UNITÁRIO</p>
                        <p>TOTAL</p>
                    </div>
                </div>

                <div className="productsUnit">
                    <div className="meuCarrinhoProductDesc">
                        <img src={BgBlue} alt="" />
                        <div className="desc">
                            <h4>Tenis nike revolution 6 Next  nature Masculino</h4>
                            <p>Cor :<span>Vermelho/Branco</span> </p>
                            <p>Tamanho :<span>42</span> </p>
                        </div>
                       
                    </div>
                    <div className="calculations">
                        <div className="calcButtons">
                            <button>-</button>
                            <p>0</p>
                            <button>+</button>
                        </div>
                        <div className="removeItem">
                            <a href="">Remover Item</a>
                        </div>
                       
                    </div>
                    
                    <div className="prices-carinho">
                        <div className="unit-div">
                            <span>R$ 219,00</span>
                            <p>R$ 219,00</p>
                        </div>
                        <div className="unit-div">   
                            <span>R$ 219,00</span>
                            <p>R$ 219,00</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="resumo">   
                    <h1>Resumo</h1>
            </div>
        </div>

        </>
    )
}