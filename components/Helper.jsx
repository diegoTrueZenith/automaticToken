
function Helper() {

 console.log("Hello World ");
// //RANDOM NUMBER 
const randomNumber = Math.floor(Math.random() * 100);
    

  return (
    <div>
      Helper:  {randomNumber}
    </div>
  )
}

export default Helper
