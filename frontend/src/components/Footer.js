import FooterContainer from "../styled/FooterContainer"

const Footer = props => {
  return (
    <FooterContainer>
      {props.caption}
    </FooterContainer>
  )
}

export default Footer;
