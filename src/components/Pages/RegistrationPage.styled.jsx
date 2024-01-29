import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  alight-item: center;
  font-size: 20px;
  width: 200px;
  padding: 12px;
  margin: 0 auto;
  background-color: #fff;
  border: 2px solid #05438c;

  transform-style: preserve-3d;
  border-radius: 15px;
  box-shadow: 3px 2px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
    28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  transition: 0.4s ease-in-out transform, 0.4s ease-in-out box-shadow;
  opacity: 0.8;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;
export const Text = styled.h2`
  text-align: center;
  font-size: 22px;
  letter-spacing: 2px;
  color: #05438c;
  font-weight: 600;
`;
export const Button = styled.button`

  font-size: 16px;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #05438c;
  background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
  border: none;
  border-radius: 500px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  &:before {
    content: '';
    border-radius: 1000px;
    min-width: calc(200px + 12px);
    min-height: calc(30px + 12px);
    border: 6px solid #00FFCB;
    box-shadow: 0 0 60px rgba(0, 255, 203, .64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
  }

  &:hover,
  &:focus {
    color: #313133;
    transform: translateY(-6px);
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
  }

  &:after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00FFCB;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }

  &:hover:after,
  &:focus:after {
    animation: none;
    display: none;
  }
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 8px 12px;
  border: 2px solid #05438c;
  windth: 100%;
`;
