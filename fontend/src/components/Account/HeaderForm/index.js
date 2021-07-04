import headerForm from '../../../assets/images/account/header_form.png'

export default function HeaderForm(props) {

  return (
    <div className={props.class}>
      <img src={headerForm} alt=""></img>
      <br></br>
      <span>{props.spanValue}</span>
    </div>
  )
}