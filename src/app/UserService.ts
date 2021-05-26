import { Injectable } from '@angular/core';
import User from './entity/User';
import { HttpClient } from "@angular/common/http";
const BASE_URL = "http://localhost:3000/users";
 
@Injectable() 
export default class UserService{  
constructor(private http:HttpClient){ }  
getUsers() {
  return this.http.get(BASE_URL);
}        
save(user:User){ 
console.log("Successfull");     
console.log(user);  
return this.http.post(BASE_URL, user, {
    headers: {
        "content-type": "application/json"
    }
});
}  
}