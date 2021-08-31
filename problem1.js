  
function createArrayOfArrays(countries)
{
    let countries2d=[],i
    for(i=0;i<countries.length;i++)
        {
            countries2d.push([countries[i],countries[i].substring(0,3),countries[i].length])
        }
    return countries2d
}

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

console.log(createArrayOfArrays(countries))