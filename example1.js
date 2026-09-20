async function myFunction() {
    return 5

}

let result = myFunction()
console.log(result);
result.then((value) => {
    console.log(value);
    
})



async function myAsync() {
    const response = await fetch("https://localhost/test/26.php")
    const text = await response.text()
    console.log(text);
    throw new Error ('Error')
}


result = myAsync()


result.catch((error) => console.log(error))