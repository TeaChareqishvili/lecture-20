
const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
 getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", //id, method  GET
updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", //id, method PUT
deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; //id, method DELETE

const tableDiv = document.querySelector('.table-content');

const newUserButton = document.querySelector('.new-user');
const userSection = document.querySelector('#section-user');
const modalForm = document.querySelector('#modal');
const modalButton = document.querySelector('.form-btn');


// userebis gadatana html-shi
function renderUsers(userArray){
   console.log(userArray, 'render users')
   const renderedUsers = userArray.map((user) => {
		return `
         <tr class="table-row">
            <td class="table-data">${user.id}</td>
            <td class="table-data">${user.first_name}</td>
            <td class="table-data">${user.last_name}</td>
            <td class="table-data">${user.email}</td>
            <td class="table-data">${user.id_number}</td>
            <td class="table-data">${user.phone}</td>
            <td class="table-data">${user.zip_code}</td>
            <td class="table-data">${user.gender}</td>
            <td class="table-data flex">
               <button class="user-btn">Edit</button>
               <button class="user-btn">Delete</button>
            </td>
         </tr>
      `
	});
   // console.log(renderedUsers)
   tableDiv.innerHTML=renderedUsers.join("")
}

// serveridan mivige monacemebi userebis shesaxeb
function getAllUsers(){
    fetch("https://borjomi.loremipsum.ge/api/all-users")
     .then((response)=> {
        return response.json()
     })
     .then((data) =>{
       const users = data.users;
      //   console.log(users)
        renderUsers(users);
     })  
     .catch((error) => {
      console.log(error);
   });
}


// eventebi gilakebze

   newUserButton.addEventListener('click', ()=>{
      userSection.classList.add('hide');
      modalForm.classList.remove('modal-form');
       modalForm.classList.add('appear');
     
   })

   modalButton.addEventListener('click', ()=>{
      modalForm.classList.remove('appear');
      modalForm.classList.add('modal-form');
      userSection.classList.remove('hide');
   })




getAllUsers();


