'use strict';

module.exports=(sequelize,Datatypes)=>{
    return sequelize.define('file',{
        tag:{type:Datatypes.STRING,},
        name:{type:Datatypes.STRING},
        path_lower:{type:Datatypes.STRING,unique:true},
        id:{type:Datatypes.STRING,unique:true,primaryKey:true},
        date_modified:{type:Datatypes.DATE,defaultValue:Datatypes.NOW},
        size:{type:Datatypes.INTEGER}
       });
}
