import "./CardList.css";
import Card from "./Card";

export default function HomeCardList(){
    let homeCardListArray = [];
    for(var index=0; index<8; index++){
        homeCardListArray.push(<Card key={index} /> )
    }

    return(
        <>
            <div id="trending">
                <div><h3>Produtos em alta</h3><a href="#">Ver todos <i class="fa-solid fa-arrow-right"></i></a></div>
                <div id="trendingContent">{homeCardListArray}</div>
            </div>
        </>
    )
}