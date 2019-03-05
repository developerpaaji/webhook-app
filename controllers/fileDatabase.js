const path=require('path');
const fetch = require('isomorphic-fetch'); // or another library of choice.
const Dropbox = require('dropbox').Dropbox;
const dbx = new Dropbox({ accessToken: 'HY6NXsLfKkAAAAAAAAAAS9nN0lE-XwvIJGZGToQgWDnMeQ-TNLt6hCZEgQYDOMtX', fetch: fetch });
const Sequelize=require('sequelize');

const sequelize= new Sequelize('gkuwawwk', 'gkuwawwk', 'YfcG11LiUty1aSeC5DG7YDJYFn-uu3SK', {
    dialect: 'postgres',
    host: "baasu.db.elephantsql.com",
    port:5432
  });
const File=sequelize.import(path.join('../','models','file'));
File.sync({force:true});

function update(){
  dbx.filesListFolder({path:"/researchshala"})
  .then((value)=>{
    var entries=value.entries;
    entries.forEach((entry,index,arr)=>{
      entry.tag=entry[".tag"];
      File
        .findOrCreate({where: {path_lower: entry.path_lower}, defaults:entry})
        .spread((file, created) => {
          console.log(file.get({
            plain: true
          }))
          console.log(created)
    
        })
        }
      )
    }).catch((err)=>console.log(err));
}
;
module.exports.update=update;