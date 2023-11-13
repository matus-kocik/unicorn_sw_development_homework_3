const names = ["Jozef", "Peter", "Martin", "Marek", "Michal",
"Pavel", "Jan", "Lukáš", "Roman", "Tomáš",
"Jakub", "Vladimír", "František", "Jiří", "Radoslav",
"Václav", "Zdeněk", "Karel", "Stanislav", "Josef",
"Ondřej", "Milan", "Daniel", "Patrik", "Filip",
"Dušan", "Ivan", "Emil", "Ladislav", "David",
"Andrej", "Miroslav", "Jaroslav", "Luboš", "Radomír",
"Vít", "Bohumil", "Dalibor", "Eduard", "Gustav",
"Hynek", "Igor", "Jaromír", "Kamil", "Leoš",
"Marian", "Norbert", "Oldřich", "Petr", "Radovan", "Anna", 
"Jana", "Martina", "Eva", "Michaela",
"Pavla", "Lucie", "Tereza", "Barbora", "Veronika",
"Lenka", "Klára", "Petra", "Monika", "Alena",
"Simona", "Helena", "Iva", "Kristýna", "Hana",
"Jitka", "Nikola", "Renata", "Karolína", "Denisa",
"Dana", "Ludmila", "Libuše", "Vlasta", "Růžena",
"Milena", "Božena", "Dagmar", "Edita", "Gabriela",
"Irena", "Jarmila", "Květa", "Lada", "Magdaléna",
"Naděžda", "Olga", "Pavlína", "Radka", "Šárka",
"Tatiana", "Věra", "Zdenka", "Zuzana", "Agáta"];
const surnames = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
"Procházka", "Kučera", "Veselý", "Horák", "Němec",
"Marek", "Pospíšil", "Hrubý", "Král", "Janda",
"Bartoš", "Holub", "Kříž", "Jelínek", "Růžička",
"Beneš", "Fiala", "Sedláček", "Doležal", "Zeman",
"Kolář", "Navrátil", "Čermák", "Urban", "Vaněk",
"Polák", "Kopecký", "Konečný", "Malý", "Holý",
"Bláha", "Hájek", "Jirka", "Krejčí", "Krátký",
"Šimánek", "Kadlec", "Soukup", "Šimek", "Pešek",
"Matoušek", "Pavlík", "Vlček", "Kubík", "Richter"];
const genders = ['male', 'female'];
const workloads = [10, 20, 30, 40];

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBirthdate(ageMin, ageMax) {
    const currentYear = new Date().getFullYear();
    const year = randomInt(currentYear - ageMax, currentYear - ageMin);
    const month = randomInt(1, 12);
    let day;

    if (month === 2) {
        day = isLeapYear(year) ? randomInt(1, 29) : randomInt(1, 28);
    } else if ([4, 6, 9, 11].includes(month)) {
        day = randomInt(1, 30);
    } else {
        day = randomInt(1, 31);
    }

    const birthdate = new Date(year, month - 1, day);
    return birthdate.toISOString();
}

function randomEmployee(ageMin, ageMax) {

    return {
        name: names[randomInt(0, names.length - 1)],
        surname: surnames[randomInt(0, surnames.length - 1)],
        gender: genders[randomInt(0, genders.length - 1)],
        birthdate: randomBirthdate(ageMin, ageMax),
        workload: workloads[randomInt(0, workloads.length - 1)]
    };
}

function main(dtoIn) {
    const employees = [];
    for (let i = 0; i < dtoIn.count; i++) {
        employees.push(randomEmployee(dtoIn.age.min, dtoIn.age.max));
    }
    return employees;
}

const dtoIn = {
    count: 3,
    age: {
        min: 19,
        max: 35
    }
};

const dtoOut = main(dtoIn);
console.log(dtoOut);
