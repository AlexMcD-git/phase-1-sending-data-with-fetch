// Add your code here
const submitData = (username, email)=> {
    fetch(`http://localhost:3000/users`,{
    method: 'POST',
    headers: {    
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
    body: JSON.stringify({
        'name': `${username}`,
        'email': `${email}`
    })
}).then((response)=>response.json())
.then((newObj) => document.querySelector('body').innerHTML = newObj.id)
.catch(()=>{
    document.querySelector('body').innerHTML = error.message
    // document.querySelector('body').append(message['message'])
})
}