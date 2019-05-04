import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "Alfara",
      job: "Designer"
    },
    {
      img: 34,
      name: "Faresa",
      job: "Frontend"
    },
    {
      img: 56,
      name: "faza",
      job: "backend"
    }
  ];

  return (
    <section>
      <Person person={people[0]}>
      Nulla non voluptate magna id laboris fugiat. Sunt culpa duis nulla sint
        deserunt laborum laboris cillum eiusmod exercitation consectetur aliqua
        officia deserunt.
      </Person>
      <Person person={people[1]}>
        Nulla non voluptate magna id laboris fugiat. Sunt culpa duis nulla sint
        deserunt laborum laboris cillum eiusmod exercitation consectetur aliqua
        officia deserunt. 
      </Person>
      <Person person={people[2]}>
      Nulla non voluptate magna id laboris fugiat. Sunt culpa duis nulla sint
        deserunt laborum laboris cillum eiusmod exercitation consectetur aliqua
        officia deserunt.
        </Person>
    </section>
  );
};
const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};
export default App;
