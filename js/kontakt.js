function provera(){
    event.preventDefault();
    var kor_ime = document.getElementById('name');
    var pass = document.getElementById('pass');
    var prezime = document.getElementById('surname');
    var mejl = document.getElementById('mejl');
    var pass1 = document.getElementById('pass1');
    var err1 = document.getElementById('greska1');
    var err2 = document.getElementById('greska2');
    var err3 = document.getElementById('greska3');
    var err4 = document.getElementById('greska4');
    var err5 = document.getElementById('greska5');
    var poslato = document.getElementById('poslato')
    err1.innerHTML='';
    err2.innerHTML='';
    err3.innerHTML='';
    err4.innerHTML='';
    err5.innerHTML='';
    poslato.innerHTML='';
    if(kor_ime.value==="" || kor_ime.value===null)
    {
        err1.innerHTML='Unesite ime!';
        return false;
    }
    else if(prezime.value==="" || prezime.value===null)
    {
        err2.innerHTML='Unesite prezime!';
        return false;
    }
    else if(mejl.value==="" || mejl.value===null || ValidateEmail(mejl.value)===false)
    {
        err3.innerHTML='Unesite e-mail!';
        return false;
    }
    else if(pass.value==="" || pass.value===null)
    {
        err4.innerHTML='Unesite Lozinku';
        return false;
    }
    else if(pass1.value==="" || pass1.value===null)
    {
        err5.innerHTML='Unesite potvrdu lozinke!'
        return false;
    }
    else if(pass1.value!=pass.value)
    {
        err5.innerHTML='Lozinke se ne podudaraju!';
        return false;
    }
    else{
        poslato.innerHTML='Podaci su uspešno poslati!';
        return true;
    }
}
function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }