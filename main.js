/*
    Goal - Kranky's Kennels
    ======================
    * Steps:
        1. Function that assigns an animal to a kennel
        2. Function that determines whether an animal is healthy
            or unhealthy.
        3. Function to either feed or give medicine to an animal,
            depending on whether they are healthy or unhealthy, as long
            as they are in a kennel.
        4. Function to move an animal into a different kennel.
        5. Function to remove an animal from a kennel.
*/
// An array of animals as objects
    // Animal object properties:
        // id
        // name
        // gender
        // health
        // diet
        // size
        // kennel: number
        const animalArray = [
            {
                id: 1,
                name: "lion",
                gender: "male",
                diet: "carnivore",
                size: "large"
            },
            {
                id: 2,
                name: "cow",
                gender: "female",
                diet: "herbivore",
                size: "large"
            },
            {
                id: 3,
                name: "dog",
                gender: "female",
                diet: "carnivore",
                size: "medium"
            },
            {
                id: 4,
                name: "rat",
                gender: "male",
                diet: "herbivore",
                size: "small"
            },
            {
                id: 5,
                name: "ostrich",
                gender: "female",
                diet: "herbivore",
                size: "medium"
            },
        ]
        // Array of kennel objects
            // Kennel object properties:
                // Indoor or outdoor
                // size
                // air conditioned
                // id
                // vacanacy -- boolean
        const kennelArray = [
            {
                id: 1,
                location: "indoor",
                size: "large",
                airConditioned: true,
                vacancy: true
            },
            {
                id: 2,
                location: "indoor",
                size: "small",
                airConditioned: true,
                vacancy: true
            },
            {
                id: 3,
                location: "outdoor",
                size: "large",
                airConditioned: false,
                vacancy: true
            },
            {
                id: 4,
                location: "indoor",
                size: "medium",
                airConditioned: true,
                vacancy: true
            },
            {
                id: 5,
                location: "outdoor",
                size: "medium",
                airConditioned: false,
                vacancy: true
            },
        ]
        // Function that assigns an animal to a kennel
            // Paramaters: animal object
        const assignAnimal = (animalObject) => {
            for(const kennel of kennelArray) {
                if(kennel.vacancy === true) {
                    if(animalObject.size === kennel.size) {
                        animalObject.kennel = kennel.id
                        kennel.vacancy = false
                        break
                    }
                }
            }
            return animalObject
        }
        /*
                Step 1: iterate the array of kennels
                    Step 2: conditional to check if kennel is vacant
                        Step 3: Check if animal size is equal to kennel size
                            Step 4: Add kennel property to animal object
            */
        // Function that determines health of an animal
            // Paramaters: animal object
        const healthCheck = (animalObject) => {
            if(Math.random() > .5) {
                animalObject.health = "healthy"
            } else {
                animalObject.health = "sick"
            }
            return animalObject
        }
            /*
                Step 1: randomly decide healthy or unhealthy
                Step 2: Set health property on animal object
            */
        for(const animalObject of animalArray) {
            let updatedAnimal = assignAnimal(animalObject)
            updatedAnimal = healthCheck(animalObject)
            console.log(updatedAnimal)
        }
        // Function to feed or give medicine to animal
            // Paramaters: animal object
        const feedOrGiveMedicine = (animalObject) => {
            if(animalObject.kennel) {
                if(animalObject.health === "healthy") {
                    animalObject.fed = true
                } else {
                    animalObject.giveMedicine = true
                    animalObject.health = "healthy"
                    animalObject.fed = true
                }
            }
            return animalObject
        }
        // let testSubject = feedOrGiveMedicine(animalArray[0])
        // console.log(testSubject)
        for(let i = 0; i < animalArray.length; i++){
            feedOrGiveMedicine(animalArray[i])
        }
            /*
                Step 1: A conditional to check if animal is in a kennel
                    Step 2: A condtional to check if animal is healthy
                        Step 3: Add a property called "fed" to animal object
                    Step 4: Else
                        Step 5: Add a property called "giveMedicine" to animal object
                        Step 6: Change health property on animal to "healthy"
            */
        // Function that moves an animal
            // Paramaters: animal object, kennel object
        const moveAnimal = (animalObject, kennelObject) => {
            if(animalObject.kennel != kennelObject.id) {
                animalObject.kennel = kennelObject.id
            }
        }
            /*
                Step 1: A conditional to check if the animal's kennel property
                        is NOT equal to the id of the kennel object
                    Step 2: Change animal kennel property to match kennel object's
                            id
            */
        // Function that removes an animal
            // Paramaters: animal object
        const removeAnimal = (animalObject) => {
            delete animalObject.kennel
        }
            /*
                Step 1: Change animal's kennel property to null
            */