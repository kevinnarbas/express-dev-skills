var skills = [
    {skill: 'HTML', level: true},
    {skill: 'CSS', level: true},
    {skill: 'JS', level: true},
    {skill: 'Node.JS', level: false},
    {skill: 'Express', level: false},

]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};



function update(id, skill) {
    skills[id] = skill;
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills;
}