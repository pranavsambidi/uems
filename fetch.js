fetch('https://reqres.in/api/users')
.then(res =>{
    if (res.ok){
        console.log('Sucess')
    }else{
        console.log("Not sucessfull")
    }
})
.then(data => console.log(data))
.catch(error => console.log('Error'))