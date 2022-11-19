
const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
 getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", //id, method  GET
updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", //id, method PUT
deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; //id, method DELETE

const tableDiv = document.querySelector('.table-content');

function renderUsers(userArray){
   console.log(userArray, 'render users')
   const renderedUsers = userArray.map((user) => {
		return `
         <tr class="table-row">
            <td class="table-data">${user.id}</td>
            <td class="table-data">${user.first_name}</td>
            <td class="table-data">${user.last_name}</td>
            <td class="table-data">${user.gender}</td>
            <td class="table-data">${user.email}</td>
            <td class="table-data">${user.id_number}</td>
            <td class="table-data">${user.phone}</td>
            <td class="table-data">${user.zip_code}</td>
            <td class="table-data">
               <button>add</button>
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


getAllUsers();


