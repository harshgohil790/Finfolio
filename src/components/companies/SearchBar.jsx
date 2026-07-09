export default function SearchBar({

    search,

    setSearch

}){

return(

<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search company..."

className="border
rounded-xl
bg-white
px-5
py-3
w-full
md:w-96
outline-none
focus:ring-2
focus:ring-blue-500"

/>

)

}