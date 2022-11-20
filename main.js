
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
const regForm = document.querySelector('#reg');

const deleteBtn = document.querySelectorAll('.delete');

// cvladebi inputebis 

const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const UserPhone = document.querySelector('#Phone');
const idNumber = document.querySelector('#id_number');
const email = document.querySelector('#email');
const zipCode = document.querySelector('#zip-code');
const gender = document.querySelector('#gender'); 


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
               <button class="user-btn delete">Delete</button>
            </td>
         </tr>
      `
	});
 
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
     
        renderUsers(users);
     })  
     .catch((error) => {
      console.log(error);
   });
}
// serverze igzavneba axali useri
function getNewUser(formInfo){
   fetch("https://borjomi.loremipsum.ge/api/register" ,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formInfo),
   })
   .then((res) => res.json())
   .then((data) => {

   })
   .catch((err) => {
      // console.log(err);
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


//  const deleteSomeUser = {
//    deleteBtn.forEach((btn) => {
//       btn.addEventListener("click", () => {
        
//            btn.closest(".table-content").remove();
//       });
//     });
//  }

//  deleteUser()
 


function deleteUser(id) {
   fetch('https://borjomi.loremipsum.ge/api/delete-user/${id}', {
			method: "delete",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			
				getAllUsers(); 
				
			})
			.catch((error) => {
				console.log(error);
			});
	}


regForm.addEventListener("submit", (e)=>{
   e.preventDefault();
   
    const userNameValue = firstName.value;
    const userLastNameValue = lastName.value;
    const userPhoneValue =  UserPhone.value;
    const userIdValue = idNumber.value;
    const userEmailValue =  email.value; 
    const usercodeValue = zipCode.value;
    const userGenderValue =  gender.value;

 
    const newUser = {
      first_name:userNameValue,
		last_name: userLastNameValue,
		phone: userPhoneValue,
		id_number:userIdValue,
		email: userEmailValue,
		gender: userGenderValue,
		zip_code:  usercodeValue,
    }
  
    getNewUser(newUser);
    regForm.reset();
    
} )