
const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
 getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", //id, method  GET
updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", //id, method PUT
deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; //id, method DELETE


function getAllUsers(){
    fetch("https://borjomi.loremipsum.ge/api/all-users")
     .then((response)=> {
        return response.json()
     })
     .then((data) =>{
        const users = data.users;
        console.log(users);
     })
    
    
}

getAllUsers();