import HoldingCard from "./HoldingCard";

export default function HoldingsGrid({ holdings }) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">

            {

                holdings.map(stock=>(

                    <HoldingCard

                        key={stock.id}

                        stock={stock}

                    />

                ))

            }

        </div>

    );

}