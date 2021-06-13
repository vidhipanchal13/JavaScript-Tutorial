let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let filter  = []

itCompanies.forEach(comp => {
    let split_company = comp.split('');
    console.log(split_company)
    let counter = 0
    split_company.forEach(a => {
        if(a.toLowerCase() === "o"){
            counter++;
            if(counter > 1){
                filter.push(comp)
            }
        }
    })
})


setTimeout(function(){
    console.log(filter)
},3000)