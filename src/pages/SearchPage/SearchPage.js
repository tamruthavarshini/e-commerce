import React,{useEffect} from "react";
import "./SearchPage.scss";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import { fetchAsyncSearchProduct,setSearchterm,getSearchproductStatus, getSearchProducts, getSearchProductsStatus } from "../../store/searchSlice";

const SearchPage = () =>
{
    const dispatch = useDispatch ();
    const { searchTerm }=useParams();
    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector (getSearchProductsStatus);
   
    
    useEffect(() => {
        
        dispatch(fetchAsyncSearchProduct(searchTerm));
      }, [searchTerm]);

    
    return(
        <div className='cat-products py-5 bg-whitesmoke'>
      <div className='container'>
        <div className='cat-products-content'>
          <div className='title-md'>
            <h3>See our <span className='text-capitalize'>{searchTerm.replace("-", " ")}</span></h3>
          </div>

          {
            searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {searchProducts} />
          }
        </div>
      </div>
    </div>
    );
}
export default SearchPage;