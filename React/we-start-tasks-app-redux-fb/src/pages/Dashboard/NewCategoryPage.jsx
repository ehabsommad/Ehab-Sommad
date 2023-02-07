import { useRef } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesController from "../../controllers/categories-controller";
import Category from "../../models/Category";
import { categoriesActions } from "../../redux/categories-slice";

let NewCategoryPage = () => {
  let dispatch = useDispatch();
  let nameRef = useRef();
  let categoryController = new CategoriesController();
  let onSubmitHandler = (event) => {
    event.preventDefault();
    if(checkData()){
      save();
    }
  }
  let checkData = () => {
    if(nameRef.current.value != ""){
      return true;
    }
    alert("Enter required data");
    return false;
  }
  let save = async () => {
    let category = new Category(nameRef.current.value);
    let newCategoryId = await categoryController.create(category)
    if(newCategoryId != null){
      category.id = newCategoryId;
      console.log(category);
      dispatch(categoriesActions.create(category));
      nameRef.current.value = "";
    }else{
      alert("ERROR!")
    }


  }
  return (
    <Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 mt-3">Add New Category</h1>
        </div>

        <form className="row mt-5" onSubmit={onSubmitHandler}>
          <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Category name</label>
              <input
                type="texy"
                id="loginName"
                ref={nameRef}
                className="form-control"
                placeholder="Category name"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="pull-right btn btn-main mb-4">
              Add New Category
            </button>
          </div>
        </form>
      </main>
    </Fragment>
  );
};
export default NewCategoryPage;
