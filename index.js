const records = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "N/A"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "N/A"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},
    { year: "2007", result: "N/A"},
    { year: "2006", result: "N/A"},
    { year: "2005", result: "N/A"},
    { year: "2004", result: "N/A"},
    { year: "2003", result: "N/A"},
    { year: "2002", result: "N/A"},
    { year: "2001", result: "N/A"},
    { year: "2000", result: "N/A"},
    { year: "1999", result: "N/A"},
    { year: "1998", result: "N/A"},
    { year: "1997", result: "N/A"},
    { year: "1996", result: "N/A"},
    { year: "1995", result: "N/A"},
    { year: "1994", result: "N/A"},
    { year: "1993", result: "N/A"},
    { year: "1992", result: "N/A"},
    { year: "1991", result: "N/A"},
    { year: "1990", result: "N/A"},
    { year: "1989", outcome: "N/A"},
    { year: "1988", outcome: "N/A"},
    { year: "1987", outcome: "N/A"},
    { year: "1986", outcome: "N/A"},
    { year: "1985", outcome: "N/A"},
    { year: "1984", outcome: "N/A"},
    { year: "1983", outcome: "N/A"},
    { year: "1982", outcome: "N/A"},
    { year: "1981", outcome: "N/A"},
    { year: "1980", outcome: "N/A"},
    { year: "1979", outcome: "N/A"},
    { year: "1978", outcome: "N/A"},
    { year: "1977", outcome: "N/A"},
    { year: "1976", outcome: "N/A"},
    { year: "1975", outcome: "N/A"},
    { year: "1974", outcome: "N/A"},
    { year: "1973", outcome: "N/A"},
    { year: "1972", outcome: "N/A"},
    { year: "1971", outcome: "N/A"},
    { year: "1970", outcome: "N/A"},
    { year: "1969", outcome: "W"},
    { year: "1968", outcome: "N/A"},
    { year: "1967", outcome: "N/A"},
    { year: "1966", outcome: "L"},
    { year: "1965", outcome: "N/A"},
    { year: "1964", outcome: "N/A"},
    { year: "1963", outcome: "N/A"},
    { year: "1962", outcome: "N/A"},
    { year: "1961", outcome: "N/A"},
    { year: "1960", outcome: "N/A"}
  ]

 
// 

function findTestFunc(item, index, array){
    // Takes the item, and if the item is 'W' returns True
    if (item.result === "W"){
        return true
    } 
}

function superbowlWin(teamRecord){
    // Use the find function to return the year of the object with result W
    // check if no win then undefined
   let teamRecordWin = teamRecord.find(findTestFunc)
   if (teamRecordWin){
       return teamRecordWin.year
   } else {
        return undefined;
   }
}


// function superbowlYear(teamRecord, year){
//     // the input is teamRecord = is array called record and a year
//     // the output is what is the result of the year 
//     // for example if the year is defined as 1968 it should return N/A

//     // using find to get the object of the specified year
//     // To use find, we need a test function, that returns true for the item whose year is the specified year
//     function find_object_with_specified_year(item, index, array){
//         // the input is item (item = a single object within teamRecord)
//         // the output is the result of the item
//         if (item.year === year)
//         return true
//     }
//     //Use find and find_object_with_specified_year to get object with specified year
//     let teamresult = teamRecord.find(find_object_with_specified_year)
//     // get the result of that object 
//     return teamresult.result

//     // how to use find
//         // find takes a function 
//         // gives the first return of the function
//     // find will return the year's result

// }



