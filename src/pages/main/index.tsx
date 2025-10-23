import {
  Heading,
  Image,
  ImageContainer,
  InnerContainer,
  MainContainer,
  TextContainer,
  Text,
  Button,
  Form,
  Error,
  FormContainer,
  TopFormContainer,
  Suggestion,
  TopFormContainerText,
  ErrorContainer,
  Label,
} from "./styles";
import { useForm } from "react-hook-form";
import background from "../../assets/images/bg-intro-desktop.png";
import Input from "../../component/Input";

import ErrorIcon from "../../assets/icons/icon-error.svg";
const Main = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{
    firstname: String;
    secondname: String;
    email: string;
    password: string;
  }>({
    mode: "all",
  });

  function submit() {
    alert("You have succesfully submitted the form your request is on the way");
  }

  return (
    <MainContainer>
      <ImageContainer>
        <Image src={background} />
      </ImageContainer>
      <InnerContainer>
        <TextContainer>
          <Heading>Learn to code by watching others</Heading>
          <Text>
            Hello fellow shoppers! We're currently building our new <br />{" "}
            fashion store. Add your email below to stay up-to-date with
            announcements and our launch deals.
          </Text>
        </TextContainer>
        <FormContainer>
          <TopFormContainer>
            <TopFormContainerText>Try it free 7 days </TopFormContainerText>
            <Suggestion>then $20/mo. thereafter</Suggestion>
          </TopFormContainer>
          <Form onSubmit={handleSubmit(submit)}>
            <Label>
              <Input
                type="text"
                placeholder="First Name"
                {...register("firstname", {
                  required: { value: true, message: "This field is required" },
                })}
              />
              <ErrorContainer>
                {errors.firstname && <ErrorIcon />}
              </ErrorContainer>

              <Error>{errors.firstname?.message}</Error>
            </Label>{" "}
            <Label>
              <Input
                type="text"
                placeholder="Last Name"
                {...register("secondname", {
                  required: { value: true, message: "This field is required" },
                })}
              />
              <ErrorContainer>
                {errors.secondname && <ErrorIcon />}
              </ErrorContainer>

              <Error>{errors.secondname?.message}</Error>
            </Label>
            <Label>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please provide a valid email",
                  },
                })}
              />
              <ErrorContainer>{errors.email && <ErrorIcon />}</ErrorContainer>

              <Error>{errors.email?.message}</Error>
            </Label>{" "}
            <Label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 8,
                    message: "Must be at least 8 characters long",
                  },
                })}
              />
              <ErrorContainer>
                {errors.password && <ErrorIcon />}
              </ErrorContainer>
              <Error>{errors.password?.message}</Error>
            </Label>
            <Button>CLAIM YOUR FREE TRIAL</Button>
          </Form>
        </FormContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default Main;
