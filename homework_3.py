import random
from datetime import datetime
from pprint import pprint

names = ["Jozef", "Peter", "Martin", "Marek", "Michal",
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
    "Tatiana", "Věra", "Zdenka", "Zuzana", "Agáta"]

surnames = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
    "Procházka", "Kučera", "Veselý", "Horák", "Němec",
    "Marek", "Pospíšil", "Hrubý", "Král", "Janda",
    "Bartoš", "Holub", "Kříž", "Jelínek", "Růžička",
    "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman",
    "Kolář", "Navrátil", "Čermák", "Urban", "Vaněk",
    "Polák", "Kopecký", "Konečný", "Malý", "Holý",
    "Bláha", "Hájek", "Jirka", "Krejčí", "Krátký",
    "Šimánek", "Kadlec", "Soukup", "Šimek", "Pešek",
    "Matoušek", "Pavlík", "Vlček", "Kubík", "Richter"]

def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def random_birthdate(age_min, age_max):
    current_year = datetime.now().year
    year = random.randint(current_year - age_max, current_year - age_min)
    
    month = random.randint(1, 12)
    
    if month == 2:
        if is_leap_year(year):
            day = random.randint(1, 29)
        else:
            day = random.randint(1, 28)
    elif month in [4, 6, 9, 11]:
        day = random.randint(1, 30)
    else:
        day = random.randint(1, 31)

    birthdate = datetime(year, month, day)
    return birthdate.isoformat() + 'Z'

def random_employee(age_min, age_max):
    return {
        'name': random.choice(names),
        'surname': random.choice(surnames),
        'gender': random.choice(['male', 'female']),
        'birthdate': random_birthdate(age_min, age_max),
        'workload': random.choice([10, 20, 30, 40])
    }

def main(dtoIn):
    employees = [random_employee(dtoIn['age']['min'], dtoIn['age']['max']) for _ in range(dtoIn['count'])]
    return employees

dtoIn = {
  'count': 2,
  'age': {
    'min': 19,
    'max': 35
  }
}

dtoOut = main(dtoIn)

for employee in dtoOut:
    pprint(employee)
