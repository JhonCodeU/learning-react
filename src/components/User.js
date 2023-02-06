import { Title } from "./Title";
import styled from "styled-components";

const User = () => {

  const country = 'USA';
  const friends = ['Santy', 'Peter', 'Sara', 'Susan'];

  return (
    <div>
      <Title name="Ericka" color="blue" />
      <Title />
      <Title name="Manuel" color="red" />
      {country && <Pagraph>you are from: {country}</Pagraph>}
      {friends.length > 0 && <Pagraph >you have {friends.length} friends</Pagraph>}
      <ul>
        {friends.map((friend, index) => <li key={index}>{friend}</li>)}
      </ul>
    </div>
  );
}

const Pagraph = styled.p`
  margin-bottom: 20px 0px;
`;

export default User;