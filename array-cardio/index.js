const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// filter - born in 1500's
const inventor1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);
console.table(inventor1500s);

// map - get inventors fullname
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullNames)

// sort - inventors oldest to youngest
const orderedInventors = inventors.sort((a, b) => a.year < b.year ? -1 : 1)
console.table(orderedInventors)

// sort - inventors by year lived
const ordered = inventors.sort((first, second) => 
(first.passed - first.year) < (second.passed - second.year) ? -1 : 1
)
console.table(ordered)

// sort - sort inventors by last name
const sorted = inventors.sort((a, b) => a.last < b.last ? -1 : 1)
console.table(sorted)

// reduce - total years all inventors live
const totalYear = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0)
console.log(totalYear)

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
// reduce - get total item count
const totalCount = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] += 1
    }
    return obj
}, {})
console.table(totalCount)

// some | every - check is some or every people adult
const isSomeAdult = people.some(person => ((new Date()).getFullYear() - person.year) >= 18)
console.log(isSomeAdult)

const isAllAdult = people.every(person => ((new Date()).getFullYear() - person.year) >= 18)
console.log(isAllAdult)

// find - comment with id 823423
const comment = comments.find(comm => comm.id === 823423)
console.log(comment)

// findIndex - comment with id 823423
const commentIdx = comments.findIndex(comm => comm.id === 823423)
console.log(commentIdx)

// splice - delete comment with id 823423
comments.splice(commentIdx, 1)
console.table(comments);