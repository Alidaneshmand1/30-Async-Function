const send = document.querySelector("#button")

send.addEventListener('click' , function () {
    console.log("Start1");
    handler()
    console.log('End1');
    
    
})

async function handler() {
    console.log('Start2');

    let result = await fetch("https://localhost/test/27.php?id=1")
    let text = await result.text()
    console.log(text);
    result = await fetch("https://localhost/test/27.php?id=2")
    text = await result.text()
    console.log(text);
      result = await fetch("https://localhost/test/27.php?id=3")
    text = await result.text()
    console.log(text);
      result = await fetch("https://localhost/test/27.php?id=4")
    text = await result.text()
    console.log(text);


    console.log('End2');
    
    
    
}