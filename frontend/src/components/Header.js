import HeaderContainer from "../styled/HeaderContainer"

const Header = props => {
  return (
    <HeaderContainer>
      {props.caption}
    </HeaderContainer>
  )
}

export default Header;
