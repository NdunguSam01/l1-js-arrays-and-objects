// Utility
function print(tag, value)
{
    console.info(tag, value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores ()
{
    // create array with 10 elements
    const myScores=[90,27,61,89,51,45,28,52,92,17]

    return myScores

}
print(`Scores Array:`, scores())

// TODO: Access an element from the array
function accessScore()
{
    // using array above access the 3rd element
    let thirdElement=scores()[2]
    return thirdElement
}
print(`Third Score:`, accessScore())


// TODO: Create an array that has multiple nested arrays
function nestedScores()
{
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    let nest=[[6,7], [9,10],[8,20,19,203]]
    return nest
}
print(`Nested Score Array:`, nestedScores()[2][3])

// TODO: Some array methods (length)
function getNumberOfScores()
{
    // using either of the two arrays created above get the length of the array
    return scores().length
}
print(`Number of elements:`, getNumberOfScores())

// TODO: Some array methods
function addElement()
{
    // using either of the two arrays created above, add two new elements of your choice
    let newScores=scores()
    let newElement=8
    newScores.push(newElement)
    
    return newScores
}
// display value
print(`Added elements:`, addElement())

// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student()
{
    // create student object
    let student=
    {
        name: "Samuel Muigai",
        age: 22,
        email: "samuel.muigai@student.moringaschool.com",
        studentNumber: "SDF-FT07-001",
        isKenyan: true
    }
    return student
}
print(`Student:`, student())

// TODO: Access student's age
function studentAge()
{
    // access student age using key
    return student()["age"]
}
print(`Student Age:`, studentAge())

// TODO: Access student's age
function studentEmail()
{
    // access student email using dot operator
    return student().email
}
print(`Student Email:`, studentEmail())

// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user()
{
    // create user object
    let userObject=
    {
        user:
        {
            id: "1234abcd",
            name: "Samuel Muigai",
            course: "Software Engineering"
        },
        course:
        {
            name: "Software Engineering",
            number: "SDF-FT-07"
        }
    }
    console.log(userObject.user.name)
    return userObject
}
print(`User:`, user())

// TODO: Some object methods (entries)
function getUserEntries()
{
    // get user entries
    return Object.entries(user())
}
print(`User Entries:`, getUserEntries())

// TODO: Some object methods (keys)
function getUserKeys()
{
    // get user keys
    return Object.keys(user())
}
print(`User Keys:`, getUserKeys())