fetch(url)
.then res.stringify
.then(data=>{})

async function bla(){
    const res = await fetch(url)
    const data = await res.json()
    return data
}