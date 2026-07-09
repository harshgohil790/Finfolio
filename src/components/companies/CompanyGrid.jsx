import CompanyCard from "./CompanyCard";

export default function CompanyGrid({ companies }) {

    return (

        <div
            className="grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6"
        >

            {

                companies.map(company => (

                    <CompanyCard

                        key={company.id}

                        company={company}

                    />

                ))

            }

        </div>

    );

}