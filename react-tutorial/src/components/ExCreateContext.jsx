// 🧠 What Does createContext Do?
// It lets you create a shared data source (like a global variable) 
// that can be accessed by any component, without manually passing 
// props through intermediate components.

// export default Dashboard;
// 👤 Profile.js (Deeply Nested Component)

// import React, { useContext } from 'react';
// import { UserContext } from './UserContext';

// function Profile() {
//   const user = useContext(UserContext);

//   return <p className="text-green-600 font-semibold">Logged in as: {user}</p>;
// }

// export default Profile;

// 🧪 Result:
// Even though Profile is multiple levels deep, it can access user directly from context — no prop drilling needed.