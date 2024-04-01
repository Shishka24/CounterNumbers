// // // const advice = {
// // //   name: "Bob",
// // // };

// // // const attention = advice;

// // // const apartment = {};

// // // const camera = {
// // //   name: "Bob",
// // // };

// // // if (camera === attention) {
// // //   console.log("Yo!!!");
// // // } else {
// // //   console.log("Hey!!!");
// // // }

// // // /*Какие переменные можно использовать вместо XXX, что бы в консоль вывелась строка "Hey"!!!"? Если их несколько, напишите через пробел.*/
// // import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// // import "./index.css";

// // type UserType = {
// //   id: number;
// //   name: string;
// //   age: number;
// // };

// // type UserPropsType = UserType & {
// //   deleteUser: (id: number) => void;
// // };

// // function User(props: UserPropsType) {
// //   return (
// //     <li>
// //       <button onClick={() => props.deleteUser(props.id)}>x</button>
// //       User {props.name}: {props.age} y.o.
// //     </li>
// //   );
// // }

// // function UsersList() {
// //   const data: Array<UserType> = [
// //     { id: 1, name: "Bob", age: 25 },
// //     { id: 2, name: "Alex", age: 28 },
// //     { id: 3, name: "Ann", age: 23 },
// //     { id: 4, name: "John", age: 30 },
// //   ];
// //   const [users, setUsers] = useState<Array<UserType>>(data);
// //   const deleteUser = (userID: number) => {
// //     const filteredUsers = users.filter((u) => u.id !== userID);
// //     setUsers(filteredUsers);
// //   };
// //   return (
// //     <main>
// //       <h4>User list:</h4>
// //       <ul>
// //         {users.map((u) => (
// //           <User key={u.id} {...u} deleteUser={deleteUser} />
// //         ))}
// //       </ul>
// //     </main>
// //   );
// // }

// // ReactDOM.render(<UsersList />, document.getElementById("root"));
// // // Что надо написать вместо xxx, чтобы код работал?
// // import React, { useState, MouseEvent, ChangeEvent } from "react";
// // import ReactDOM from "react-dom";
// // import "./index.css";

// // function Notes() {
// //   const [newNote, setNewNote] = useState<string>("");
// //   const [notes, setNotes] = useState<Array<string>>([]);
// //   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
// //     setNewNote(e.currentTarget.value);
// //   const addNote = () => {
// //     setNotes([newNote, ...notes]);
// //     setNewNote("");
// //   };
// //   return (
// //     <div>
// //       <textarea value={newNote} onChange={onChangeHandler} onBlur={addNote} />
// //       <div>
// //         <button onClick={addNote}>Clear notes list</button>
// //       </div>
// //       <h4>Notes:</h4>
// //       <div>
// //         {notes.map((n) => (
// //           <p>{n}</p>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // ReactDOM.render(<Notes />, document.getElementById("root"));
// // // Что надо написать вместо ххх,
// // // чтобы при клике список заметок очищался?
// // import React, { useState, MouseEvent, ChangeEvent } from "react";
// // import ReactDOM from "react-dom";
// // import "./index.css";

// // function User() {
// //   const [userName, setUserName] = useState<string>("");
// //   return (
// //     <div>
// //       <p>{userName}</p>
// //       <input
// //         // value={userName}
// //         onChange={(e) => setUserName(e.currentTarget.value)}
// //       />
// //     </div>
// //   );
// // }

// // ReactDOM.render(<User />, document.getElementById("root"));
// // // Что надо написать вместо ххх, чтобы инпут был контролируемым?
// // import React, { useState, MouseEvent } from "react";
// // import ReactDOM from "react-dom";
// // import "./index.css";

// // function Post() {
// //   const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
// //     e.preventDefault();
// //     alert("Летим-бомбим!!!");
// //   };
// //   return (
// //     <div>
// //       <article>
// //         <h4>Как дела, братан?</h4>
// //         <p>
// //           Вижу, что неплохо. Давай, трудись ))) Google ждёт тебя в цифровом
// //           рабстве! Cтавь лайк и полетели!!!
// //         </p>
// //         <a href={"https://www.youtube.com/"} onClick={onClickHandler}>
// //           В этом месте подробнее...
// //         </a>
// //       </article>
// //     </div>
// //   );
// // }

// // ReactDOM.render(<Post />, document.getElementById("root"));
// // // Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube
// // // при клике по ссылке?
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// type UserType = {
//   id: number;
//   name: string;
//   age: number;
// };

// function User(props: UserType) {
//   return (
//     <li>
//       User {props.name}: {props.age} y.o.
//     </li>
//   );
// }

// function UsersList() {
//   const state = [
//     { id: 1, name: "Bob", age: 34 },
//     { id: 2, name: "Alex", age: 25 },
//     { id: 3, name: "Ann", age: 30 },
//     { id: 4, name: "John", age: 23 },
//   ];
//   const users = [
//     { id: 1, userName: "Bob", age: 34 },
//     { id: 2, userName: "Alex", age: 25 },
//     { id: 3, userName: "Ann", age: 30 },
//     { id: 4, userName: "John", age: 23 },
//   ];

//   const [usersList, setUsersList] = useState<Array<UserType>>(state);
//   return (
//     <main>
//       <h5>User list:</h5>
//       <p>Тут будет список пользователей</p>
//     </main>
//   );
// }

// ReactDOM.render(<UsersList />, document.getElementById("root"));
// // Что надо написать вместо XXX, чтобы код работал?
// // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // ❗ Ответ дать минимально возможным объёмом кода
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
