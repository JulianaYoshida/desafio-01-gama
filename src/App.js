import { useState, useEffect } from 'react';
import SaleImage from './assets/Sale.png';
import { 
  Container, 
  Vantagens, 
  Vantagem, 
  Footer,
  SubscribeContainer,
  Subscribe,
  SubscribeButton,
} from './styles/app.style';
import { FaTruck, FaSearchDollar, FaThumbsUp, FaInfoCircle, FaUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Input from './components/Input'; 

function App() {
  const [emailList, setEmailList] = useState([]);
  const [emailsLenght, setEmailsLength] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  useEffect(() => {
    function loadEmailList() {
      const emails = JSON.parse(localStorage.getItem('black-friday'));
      if (emails) {
        setEmailsLength(emails.length);
        setEmailList(emails);
      }
    };

    loadEmailList();
  }, [emailsLenght]);

  function handleSubscribeButton() {
    const profileDTO = {
      name,
      email,
    };

    setEmailList([...emailList, profileDTO]);
    localStorage.setItem('black-friday', JSON.stringify([...emailList, profileDTO]));
    setEmailsLength(emailsLenght + 1);
    setEmail('');
    setName('');

    alert('Obrigado por se cadastrar. Em breve teremos mais novidades');
  }

  return (
    <>
      <Container />
      <Vantagens>
        <Vantagem>
          <FaTruck size={30} />
          <strong>Entrega rápida</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
          </p> 
        </Vantagem>
        <Vantagem>
          <FaSearchDollar size={30} />
          <strong>Preço baixo garantido</strong>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p> 
        </Vantagem>
        <Vantagem>
          <FaThumbsUp size={30} />
          <strong>12 meses de garantia</strong>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi.
          </p> 
        </Vantagem>
        <Vantagem>
          <FaInfoCircle size={30} />
          <strong>Assitência 24hrs</strong>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam 
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p> 
        </Vantagem>
      </Vantagens>
      <Footer>
        <SubscribeContainer>
          <img src={SaleImage} alt='black-friday'/>
          <Subscribe>
            <p>Cadastre-se agora e não deixe perder essa ótima oportunidade de 
              realizar seu sonho.
            </p>
            <Input 
              icon={FaUser} 
              placeholder='Nome' 
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <Input 
              icon={FiMail} 
              placeholder='E-mail' 
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <SubscribeButton onClick={handleSubscribeButton}>
              Quero participar!
            </SubscribeButton>
          </Subscribe>
        </SubscribeContainer>
      </Footer>
      <div>{email}</div>
    </>
  );
}

export default App;
