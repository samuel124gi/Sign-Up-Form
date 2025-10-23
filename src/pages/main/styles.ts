import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: ${colors.primary01};
  position: relative;
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 48px;
  width: 1100px;
  max-width: 1100px;
  align-items: center;
  z-index: 11;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Heading = styled.h1`
  color: ${colors.white};
  font-size: 50px;
  line-height: 55px;
  font-weight: bold;
  letter-spacing: -0.52px;
`;
export const TextContainer = styled.div`
  display: flex;
  width: 445px;
  heigth: 100%;
  gap: 32px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-weight: 300;
  color: ${colors.white};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 500px;
`;

export const TopFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${colors.white};
  font-size: 15px;
  line-height: 26px;
  background: ${colors.secondary02};
  height: 60px;
  border-radius: 10px;
  letter-spacing: 0.27px;
  gap: 5px;
`;
export const TopFormContainerText = styled.div`
  font-weight: bold;
  color: ${colors.white};
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.27px;
`;
export const Suggestion = styled.span`
  font-weight: 300;
  color: ${colors.white};
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.27px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 40px;
  border-radius: 10px;
  width: 100%;
  background-color: ${colors.white};
  justify-content: space-between;
`;
export const Label = styled.label`
  align-items: flex-end;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  justify-content: center;
`;
export const Error = styled.span`
  font-size: 12px;
  letter-spacing: 0px;
  color: ${colors.primary01};
  font-weight: bold;
  margin-left: 20px;
`;
export const ErrorContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
export const Button = styled.button`
  border-radius: 5px;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 56px;
  cursor: pointer;
  width: 100%;
  z-index: 11;
  font-size: 15px;
  letter-spacing: 0px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${colors.secondary05};
`;
