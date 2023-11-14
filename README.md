# unicorn_sw_development_homework_3

# Assignment

Design and develop a program in the JavaScript programming language that generates a list of employees. Your program will contain function main() with one argument that will contain the dtoIn input data. The main function will return dtoOut output data.

Part of the solution is the design of the program described using the Algorithm component.

Each employee has a first name, surname, gender, birthdate and workload. Persons can be either men (male) or women (female), working hours are either 10, 20, 30 or 40 hours/week. Full time corresponds to 40 hours/week. Individual data will be generated randomly, i.e. you will randomly generate frist name, surname, date of birth, etc.

In the input data, on the basis of which the script will generate the list of employees, the following data will be entered:

Number of employees.
Age range in which persons are to be represented.


To randomly generate a name and surname, use an array of e.g. 50 Czech names and surnames, from which your program will randomly select a name and surname for the givne person.


Example of input data (dtoIn):

const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35
  }
}


Example of output data (dtoOut):

const dtoOut = [
  {
    gender: "male",
    birthdate: "1993-08-07T00:00:00.000Z",
    name: "Vratislav",
    surname: "Sýkora",
    workload: 40
  },
  {
    gender: "female",
    birthdate: "2000-01-03T00:00:00.000Z",
    name: "Jiřina",
    surname: "Ptáčková",
    workload: 20
  }
]


The main() function must return the correct data in the correct structure. So follow the dtoOut structure (key names, data types) that the main() function returns.
birthdate must contain a date in ISO Date-Time format - YYYY-MM-DDTHH:mm:ss.sssZ (e.g. 1981-10-28T23:00:00.000Z)
gender must contain the value male or female.

