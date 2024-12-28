const searchDataBase=["batman","spiderman","superman","ironman","batman 2","batman and robin"]
const search=(input,Db)=>{
    const matches=Db.filter((el)=>{

        return el.includes(input)
    })
    return matches.length >3 ? matches.slice(0.3):matches

}
console.log(search('bat',searchDataBase));

module.exports=search
