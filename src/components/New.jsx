import PropTypes from "prop-types";
export const New = (props) => {
 let{color}=props

return(
  <div style={{backgroundColor:color, padding:"20px" }}><p>latheef</p> </div>
)
}
export default New;
New.propTypes={
color:PropTypes.oneOf(["red","green"]).isReuired,
};