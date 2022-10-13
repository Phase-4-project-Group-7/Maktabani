
const HomePage = ({ user }) => {
    if (user) {
        return <h1>Welcome, {user.username}!</h1>;
      } else {
        return <h1>Enter Details to Signup</h1>;
      }
    }
export default HomePage;
