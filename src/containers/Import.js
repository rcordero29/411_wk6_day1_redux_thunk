// fill out this container
import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes } from "../redux/actions";

const mapStateToProps = (state) =>{
  return{
    makes: state.makes
  };
};

const mapDispatchToProps = {
  fetchMakes
}

export default connect(mapStateToProps,mapDispatchToProps)(Import);