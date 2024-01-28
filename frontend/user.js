//fertching the services

var tableData="";
async function showAllUsers()
{
    let url='https://usersdata-c7uo.onrender.com/users/';
    let users_API=await fetch(url);
    let data=await users_API.json();

    tableData=`<tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile</th>
                <th colspan="2">Action</th>
               </tr>`

    for(let i=0;i<data.length;i++)
    {
        tableData+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].password}</td>
                    <td>${data[i].mobile}</td>
                    <td><button onclick="deleteUser(${data[i].id})">Delete</button></td>
                    <td><a href="./frontend/update.html"><button>Update</button></a></td>
                    <tr>`
    }
    document.getElementById("users_details").innerHTML=tableData;
}
showAllUsers();