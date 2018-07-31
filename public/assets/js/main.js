document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        console.log(user);
        hideAll();
        document.getElementById('menuPage').style.display = 'block';
        document.getElementById('userData').innerHTML='Bienvenid@ ' + user.displayName + ' <a href="#" onClick="signOut()">Cerrar Sesion</a>';
      }else{
        hideAll();
        document.getElementById('menuPage').style.display = 'none'
        document.getElementById('userData').innerHTML='';// para limpiar al deslogearse
        login();
      }
    });
  } catch (e) {
    console.error(e);
  }
  
  addListenerToClass('btnrecepcion', showRegister);
  addListenerToClass('btnoficina', showAdmission);
  addListenerToClass('btnadministracion', showAdministrador);
});

