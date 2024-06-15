import "@/styles/searchbar.scss"
import IcSearch from "@/components/svgs/ic-search.svg"

const Searchbar = () => {
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search in site"/>
            <IcSearch />
        </div>
    )
}

export default Searchbar