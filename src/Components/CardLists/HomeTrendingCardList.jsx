import {useState,useEffect} from "react"
import "./CardList.css";
import Card from "./Card";

export default function HomeCardList(){
    // let homeCardListArray = [];
    // for(var index=0; index<8; index++){
    //     homeCardListArray.push(<Card key={index} /> )
    // }
    const [apiData,setApiData] = useState([])

    useEffect(() => {
        fetch("https://662a922667df268010a467b6.mockapi.io/api/products/")
        .then(response=> response.json())
        .then(data => setApiData(data))
        .catch(error => console.log(error))

    },[]);

    return(
        <>
            <div id="trending">
                <div><h3>Produtos em alta</h3><a href="#">Ver todos <i class="fa-solid fa-arrow-right"></i></a></div>
                <div id="trendingContent">
                    
                {

                apiData.map((item,index) => (
                    <Card key = {index} data = {item} />
                ))

                }
                
                </div>
            </div>
        </>
    )
}