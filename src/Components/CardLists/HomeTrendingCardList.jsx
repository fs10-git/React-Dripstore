import {useState,useEffect} from "react"
import "./CardList.css";
import Card from "./Card";
import axios from "axios";

export default function HomeCardList(){

    const [produtos, setProdutos] = useState([])


    useEffect (() => {
        async function fetchData() {
            try {
                const produtos = await axios.get("http://localhost:666/produtos-alta/getAll")
                setProdutos(produtos.data)
            }catch(error) {
                console.log(`Error ao buscar dados ${error}`)
            }
        }
        fetchData()
    },[])

    // useEffect(() => {
    //     fetch("http://localhost:666/produtos-alta/getAll")
    //     .then(response=> response.json())
    //     .then(produtos => setProdutos(produtos))
    //     .catch(error => console.log(error))

    // },[]);

    return(
        <>
            <div id="trending">
                <div><h3>Produtos em alta</h3><a href="#">Ver todos <i class="fa-solid fa-arrow-right"></i></a></div>
                <div id="trendingContent">
                    
                {

                produtos.map((produto) => (
                    <Card
                    key={produtos.id}
                    produto={produto}
                    
                    />
                ))}
                
                </div>
            </div>
        </>
    )
}