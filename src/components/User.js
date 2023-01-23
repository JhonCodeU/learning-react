import { Title } from "./Title";

const User = () => {

  const country = 'USA';
  const friends = ['Santy', 'Peter', 'Sara', 'Susan'];

  return (
    <div>
      <Title name="Ericka" color="blue" />
      <Title />
      <Title name="Manuel" color="red" />
      {country && <p>you are from: {country}</p>}
      {friends.length > 0 && <p>you have {friends.length} friends</p>}
      <ul>
        {friends.map((friend, index) => <li key={index}>{friend}</li>)}
      </ul>
    </div>
  );
}

export default User;