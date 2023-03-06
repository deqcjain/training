let obj={
    fName:'Chahat',
    lName:'Jain'
}

let printFullName= function(city,state){
    console.log(this.fName+' '+this.lName+ ' '+ city + ' '+state);
}

printFullName.call(obj,'Indore',"MP");
printFullName.apply(obj,['Indore',"MP"]);

let bindFunc=printFullName.bind(obj,'Indore',"MP");
bindFunc()