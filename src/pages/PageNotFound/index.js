import img from "../../assets/images/404.svg";
import { Icon } from "../Signin/SigninElements";
import { Container, Img, ImgWrap, ImgWrapper } from "./NotFoundElements";

const PageNotFound = () => {
  return (
    <>
      <Container>
        <ImgWrapper>
          <Icon to="/">dolla</Icon>
          <ImgWrap>
            <Img src={img} alt="404 - Not Found" />
          </ImgWrap>
        </ImgWrapper>
      </Container>
    </>
  );
};

export default PageNotFound;
