export default function CompanyInfo({ company }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">

                Company Information

            </h2>

            <div className="grid grid-cols-2 gap-5">

                <Info title="Ticker" value={company.symbol} />

                <Info title="Sector" value={company.sector} />

                <Info title="CEO" value={company.ceo} />

                <Info title="Founded" value={company.founded} />

                <Info title="Market Cap" value={company.marketCap} />

                <Info title="P/E Ratio" value={company.peRatio} />

                <Info title="EPS" value={company.eps} />

            </div>

        </div>

    );

}

function Info({ title, value }) {

    return (

        <div>

            <p className="text-gray-500">

                {title}

            </p>

            <h3 className="font-semibold mt-1">

                {value}

            </h3>

        </div>

    );

}