let books = [
  {id:1, titre:'Atomic habits', auteur:'James Clear', prix:30},
  {id:2, titre:'Power of habits', auteur:'Jeff Olsen', prix:25}
];

const showBooks = ()=>{
 //console.log("Afficher les livres");

 //Etape 1 : Récupérer l'emplacement ou on va charger les nouveaux éléments
  const tbody = document.querySelector('#tab1 tbody');

  //Etape 2 : Préparer le nouveau code HTML à injecter
  books.sort(function(a, b){return a['id'] - b['id']});
  let newHTML = '';
  books.forEach(
    (book)=>{
      newHTML += '<tr>';
        newHTML += '<td>' + book.id + '</td>';
        newHTML += `<td>${book.titre}</td>`;
        newHTML += `<td>${book.auteur}</td>`;
        newHTML += `<td>${book.prix}</td>`;
        newHTML += `<td><button name="edit" class='btn btn-primary'>Editer</button></td>`;
        newHTML += `<td><button name="supp" class='btn btn-danger'>Supprimer  </button></td>`;
      newHTML += '</tr>';
    }
  );

  //Etape 3 : Injecter le nouveau code HTML dans le TBody
  tbody.innerHTML = newHTML;


  EditSupp();
};

  function test(x) {
    for (let i = 0; i < x.length; i++) {
      if(x[i].value == ""){
        return 3;
      }
      
    }

    for (let i = 0; i < books.length; i++) {
      if(x[0].value==books[i]['id']) return 2;      
    }
    return 1;
  }

  form=document.querySelector("#add");
  input=document.querySelectorAll("#add input");
  but=document.querySelector("#addL");
  butAnn=document.querySelector("#annul");
  butAjout=document.querySelector("#ajout");
  butEdit=document.getElementsByName("edit");  
  butSupp=document.getElementsByName("supp");


  //button ajouter un livre
  but.addEventListener('click',()=>{
    form.setAttribute("style","display:block;");
  });

  //button Annuller 
  butAnn.addEventListener('click',()=>{
    form.setAttribute("style","display:none;");
  });

  //button Ajout
  butAjout.addEventListener('click',()=>{
    
    switch (test(input)) {
      case 1:
        form.setAttribute("style","display:none;");
        let newbook={id:input[0].value ,titre:input[1].value, auteur:input[2].value, prix:input[3].value};
        books.push(newbook);
        showBooks();    
        form.reset();
        break;

      case 2:
        input[0].value="";
        alert("L'id doit etre unique");
        break;
      case 3:
        alert("Remplir tous les champs");
    
    }

  });

  //button Editer
  function EditSupp() {
    for (let i = 0; i < butEdit.length; i++) {
      butEdit[i].addEventListener('click', () => {
        input[0].value=books[i]['id'];
        input[1].value=books[i]['titre'];
        input[2].value=books[i]['auteur'];
        input[3].value=books[i]['prix'];
        form.setAttribute("style", "display: block;");
        books.splice(i,1);
        showBooks();
      })}

    for (let i = 0; i < butEdit.length; i++) {
      butSupp[i].addEventListener('click', () => {
        books.splice(i,1);
        showBooks();
      })}
  }


window.addEventListener('load', showBooks);


