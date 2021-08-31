//Add user if it does not exist
function addUser(users,newUser)
{
    let existUser = users.find(existUser=> existUser.name===newUser.name)
    if(existUser===undefined)
    {
        users.push(newUser)
    }
}

// Filter users who has scoresGreaterThan85
function scoresGreaterThan85(users)
{
    let userScore = users.filter(userScore => userScore.scores>85)
    console.log(userScore)
}

//addUserSkill which can add skill to a user only if the user exist.
function addUserSkill(users,skills)
{
    let existUser = users.find(existUser=> existUser.name===skills.name)
    console.log(existUser)
    existUser.skills.push(skills.skills[0])
    existUser.skills.push(skills.skills[1])
    console.log(existUser)
}

//editUser if the user exist in the users array
function editUser(users,editUser)
{
    let existUser = users.find(existUser=> existUser.name===editUser.name)
    console.log(existUser)
    if(existUser!=undefined)
    {
        existUser.scores=editUser.scores
        existUser.age=editUser.age
    }
    console.log(users)
}

//Given Data---------------------------------------
const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];
scoresGreaterThan85(users)                          //  Displaying all user whoever has scores > 85
addUser(users,{name:"Amrendra", scores:88, skills:['HTM','CSS','JS'],age:30}) // Adding new user if not exist
scoresGreaterThan85(users)                          
addUserSkill(users,{name:'John',skills:['CSS','JS']}) // adding new skills like CSS and JS
editUser(users,{name:"Amrendra", scores:92, age:28})  //Editing user data of scores and age field