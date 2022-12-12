var oracledb = require('oracledb');
const { listenerCount } = require('process');
oracledb.autoCommit = true;
const prompt = require('prompt-sync')();

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validation (){
	getButtonValue = document.getElementByClassName("email-input");
	console.log(getButtonValue.value);
}

var contador=0;
const config = {
  user: 'USUARIO6',
  password: 'USUARIO6',
  connectString: "localhost/xe" // nombre del host 
}

async function getUsers () {
  let con;
  try {
    con = await oracledb.getConnection(config)
	if(con){
		return 0 ;
	}
  }catch (err){
    console.error(err);
  }
  await con.close();
}

getUsers();