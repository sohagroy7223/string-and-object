const school = {
    name: "chamta hat high school",
    class: ["8", "9", "10"],
    events: ["science fair", "bijoy debos", "21 feb"],
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            merit: "top",
        },
    },
};
// console.log(school.unifrom.color);
// console.log(school.unique.result.merit);
// const dibos = school.events;
// dibos[1] = "16 december";
school.events[1] = "16 december";
console.log(school.events[1]);
school.unique.result.merit = "top top most";
console.log(school.unique.result.merit);
delete school.unique.color;
console.log(school);
