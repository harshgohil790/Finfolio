import { useState } from "react";

import SearchBar from "../../components/companies/SearchBar";
import CompanyGrid from "../../components/companies/CompanyGrid";

import companies from "../../data/companyData";

export default function Companies(){

const [search,setSearch]=useState("");

const filteredCompanies=companies.filter(company=>

company.name
.toLowerCase()
.includes(search.toLowerCase())

||

company.symbol
.toLowerCase()
.includes(search.toLowerCase())

);

return(

<div className="space-y-8">

<div>

<h1 className="text-4xl font-bold">

Companies

</h1>

<p className="text-gray-500 mt-2">

Explore Stocks and Market Data

</p>

</div>

<SearchBar

search={search}

setSearch={setSearch}

/>

<CompanyGrid

companies={filteredCompanies}

/>

</div>

)

}