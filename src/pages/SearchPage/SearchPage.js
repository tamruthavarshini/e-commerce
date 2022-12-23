import React,{useEffect} from "react";
import "./SearchPage.scss";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import { fetchAsyncSearchProduct,setSearchterm,getSearchproductStatus, getSearchProducts } from "../../store/searchSlice";

const SearchPage = () =>
{
    const dispatch = useDispatch ();
    const { searchTerm }=useParams();
    const searchProducts = useSelector(getSearchProducts);
    console.log(searchProducts);
    
    useEffect(() => {
        
        dispatch(fetchAsyncSearchProduct(searchTerm));
      }, [searchTerm]);
    return(
        <div>SearchPage</div>
    );
}
export default SearchPage;