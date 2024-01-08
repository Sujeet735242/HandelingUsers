// Create User function
async function createUser()
{
    
    let url='http://localhost:4500/users/';
    
    let id=document.getElementById("cid").value;
    
    let name=document.getElementById("cname").value;
    let userName=document.getElementById("cusername").value;
    let mygmail=document.getElementById("cgmail").value;
    let password=document.getElementById("cpassword").value;
    let mobile=document.getElementById("cmobile").value;
    
    // Fetching data 
    await fetch(url,{
        
        method:"POST",
        body:JSON.stringify({
            "id":id,
            "name":name,
            "username":userName,
            "email":mygmail,
            "password":password,
            "mobile":mobile
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    window.location.replace('./mainPage.html');
}

// Update a User
async function updateUser()
{
    let url='http://localhost:4500/users/';
    let id=document.getElementById("myid").value;
    let name=document.getElementById("myname").value;
    let userName=document.getElementById("myusername").value;
    let mygmail=document.getElementById("gmail").value;
    
    let password=document.getElementById("mypassword").value;
    let mobile=document.getElementById("mymobile").value;
    await fetch(url+id,{
        method:"PUT",
        body:JSON.stringify({
            "name":name,
            "username":userName,
            "email":mygmail,
            "password":password,
            "mobile":mobile
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    alert("You have successfully created !")
    window.location.replace('./mainPage.html');
    
}

// Delete a User
async function deleteUser(id) {
    if (confirm("Are you sure?")) {
        let url = 'http://localhost:4500/users/';
        try {
            await fetch(url + id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            alert("You have successfully deleted ID - " + id);
        } catch (error) {
            console.log(error);
            alert("Failed to delete ID - " + id);
        }
    }
}
// Search a user
async function searchUser()
{
    let id=parseInt(prompt("Please enter ID number to search !"))
    let url='http://localhost:4500/users/';
    let dataProm=await (await fetch(url+id)).json()
    let result=''
    for(key in dataProm)
    {
        result+=key+" - "+dataProm[key]+" , "
    }
    alert(result)
    
}