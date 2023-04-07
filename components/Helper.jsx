
function Helper() {

 console.log("Hello World ");
// //RANDOM NUMBER 
const randomNumber = Math.floor(Math.random() * 100);
    

  return (
    <div>
      Here's the helper {randomNumber}
    </div>
  )
}

export default Helper
