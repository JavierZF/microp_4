import  {  Contact  }  from   "../models/contact.model" ;
import  {  AngularFireDatabase  }  from   "angularfire2/database";
import  {  Injectable  }  from   "@angular/core" ;


@Injectable()
export class ContactService {  
 //private   contacts :  
// Contact  []= [{ "nombre" : "Andres" , "organizacion" : "UC3M" , "movil" : "666666666" , correo: "andr es@example.com" }];
  

private contactsRef = this.db.list<Contact>('AgendaFirebase');  
constructor (private db:AngularFireDatabase){
}
 addContact ( value :  Contact ){
 this.contactsRef.push(value); 
}
 getContacts(){
 return  this.contactsRef ;
}
 updateContact ( value :  Contact ){
     return this.contactsRef.update(value.key,value);
}
 removeContact ( value :  Contact ){
    return this.contactsRef.remove(value.key);
} 
}