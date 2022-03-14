import React from 'react';

const List = ({ users }) => {

  return (
    <div>
      {
      users.map((user) => {
        return (
          <article className="person">
            <img src={user.image} alt={user.name} />
            <div>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
            </div>
          </article>
        );
      })
      }
    </div>
  );
};

export default List;
