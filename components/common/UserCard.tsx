
import React from 'react';
import { UserProp } from '@/interfaces';
interface UserCardProps {
    user: UserProp;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <div style1={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, maxWidth: 400 }}>
        <h2>{user.name} <span style={{ color: "#888" }}>@{user.username}</span></h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <div>
            <strong>Address:</strong>
            <div>
                {user.address.suite}, {user.address.street},<br />
                {user.address.city}, {user.address.zipcode}
            </div>
        </div>
        <div>
            <strong>Company:</strong>
            <div>
                {user.company.name}<br />
                <em>{user.company.catchPhrase}</em>
            </div>
        </div>
    </div>
);

export default UserCard;

// Sample usage:
// const sampleUser: UserProp = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: { lat: "-37.3159", lng: "81.1496" }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets"
//     }
// };
// <UserCard user={sampleUser} />

