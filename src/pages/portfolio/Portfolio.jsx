import PortfolioSummary from "../../components/portfolio/PortfolioSummary";
import AllocationChart from "../../components/portfolio/AllocationChart";
import HoldingsTable from "../../components/portfolio/HoldingsTable";
import RecentTrades from "../../components/portfolio/RecentTrades";
import PortfolioChart from "../../components/charts/PortfolioChart";

import {

summary,

holdings,

recentTrades

} from "../../data/portfolioData";

export default function Portfolio(){

return(

<div className="space-y-8">

<div>

<h1 className="text-4xl font-bold">

Portfolio

</h1>

<p className="text-gray-500 mt-2">

Track all your investments

</p>

</div>

<PortfolioSummary summary={summary}/>

<div className="grid lg:grid-cols-2 gap-8">

<AllocationChart/>

<PortfolioChart/>

</div>

<HoldingsTable holdings={holdings}/>

<RecentTrades trades={recentTrades}/>

</div>

)

}