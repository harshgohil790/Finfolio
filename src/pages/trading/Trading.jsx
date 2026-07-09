import BuyCard from "../../components/trading/BuyCard";
import SellCard from "../../components/trading/SellCard";
import OrderSummary from "../../components/trading/OrderSummary";
import OrderHistory from "../../components/trading/OrderHistory";
import TradingChart from "../../components/trading/TradingChart";
import {

stocks,

orders

} from "../../data/tradingData";

export default function Trading(){

return(

<div className="space-y-8">

<div>

<h1 className="text-4xl font-bold">

Trading

</h1>

<p className="text-gray-500 mt-2">

Buy and Sell Stocks

</p>

</div>

<div className="grid lg:grid-cols-2 gap-8">

<BuyCard stocks={stocks}/>

<SellCard stocks={stocks}/>

</div>

<div className="grid lg:grid-cols-2 gap-8">

<OrderSummary/>

<TradingChart/>

</div>

<OrderHistory

orders={orders}

/>
</div>

)

}