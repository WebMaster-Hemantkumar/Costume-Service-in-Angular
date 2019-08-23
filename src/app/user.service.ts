import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
getUsers(){
  return[
    {"Id":1,"Name":"Hemant Kumar","age":28,"mobile":"9205262451"},
    {"Id":2,"Name":"Aman ","age":29,"mobile":"9205262452"},
    {"Id":3,"Name":"Manish","age":27,"mobile":"9205262453"},
    {"Id":4,"Name":"Pooja","age":22,"mobile":"9205262453"},
    {"Id":5,"Name":"Jitender","age":25,"mobile":"9205262453"},
    {"Id":6,"Name":"Riyaz","age":25,"mobile":"9205262454"},
    {"Id":7,"Name":"abhilash","age":24,"mobile":"9205262454"}
  ];
}
  constructor() { }
}
