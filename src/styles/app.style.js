import styled from 'styled-components';
import Banner from '../assets/Banner.jpg'
import Button from '../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 50vh;

  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Vantagens = styled.div`
  max-width: 1000px;
  padding: 2rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: '#fafafa';
`;

export const Vantagem = styled.div`
  background-color: #ddd;
  
  width: 13rem;
  height: 15rem;
  padding: 1rem;
  padding-top: 1.5rem;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.2);
  border: 0.25px solid #bbb;
  transition: all .2s ease-in-out;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    transform: scale(1.125,1.125);
  }

  svg {
    margin-bottom: 1rem;
    color: #444;
  }

  strong {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #444;
  }

  p {
    text-align: center;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

export const SubscribeContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 2rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 1.125rem;
`;

export const Subscribe = styled.div`
  width: 100%;

  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    color: #444;

    margin-bottom: 2rem;
  }
`;


