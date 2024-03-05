/* eslint-disable react/prop-types */
const UserDataTable = ({ users }) => {
  console.log(users);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Join Date</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserDataTable;
