import Container from "@components/Container";
import { FPTextField, FPButton, FPContainer, FPTypo, FPLink } from "./style";
import Logo from "@components/Logo";

function FP() {
  return (
    <Container>
      <Logo type={2} width={210} />
      <FPTypo margin="20px 0 0 0">가입할 때 사용한 이메일을 입력해 주세요</FPTypo>
      <FPTypo margin="0">해당 이메일로 변경된 비밀번호를 전송됩니다.</FPTypo>
      <FPTextField placeholder="E MAIL" />
      <FPButton>로그인</FPButton>
      <FPContainer>
        <FPContainer margin="0" direction="row">
          <FPTypo margin="0 4px">계정이 없으신가요?</FPTypo>
          <FPLink to="./">회원가입</FPLink>
        </FPContainer>
        <FPContainer direction="row">
          <FPTypo margin="0 4px 0 -48px">계정이 이미 있으신가요? </FPTypo>
          <FPLink to="../login">로그인</FPLink>
        </FPContainer>
      </FPContainer>
    </Container>
  );
}

export default FP;
