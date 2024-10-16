const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];

  ////////////////////////////////////////////////////////////////////
                    //loop//
////////////////////////////////////////////////////////////////////


//setting location
  const targetingApp = document.querySelector("#app");

  //empty string and making fx for filter
  const cardsOnDom = (array) => { //cards on dom (pets)

  let domString = "";

  //filling in empty string
  //includes delete button containing "--" for splitting
for (const pet of array) {
  domString+= 
  `<div class="card" style="width: 18rem;">

    <div class="card-body">
      <h5 class="pet-name">${pet.name}
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}> </h5>
      <p class="pet-color">${pet.color}</p>
      <p class="pet-skill">${pet.specialSkill}</p>
      <p class="pet-type">${pet.type}</p>
  
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`;
};
 targetingApp.innerHTML = domString;
  }; 

  //make default view all pets

cardsOnDom(pets);

////////////////////////////////////////////////////////////////////
                    //filter for buttons//
////////////////////////////////////////////////////////////////////

//1. function to filter by pet type
const filter = (array, petType) => {
  const petArray = [];

  for (const member of array) {
    if (member.type === petType) {
      petArray.push(member);
    }
  }

  return petArray;
};


//2. connect html buttons to js 2
const allButton = document.querySelector("#all");
const catButton = document.querySelector("#cat");
const dogButton = document.querySelector("#dog");
const dinoButton = document.querySelector("#dino");


//3. 1 + 2 use event listener so when they click button, we trigger step 1

//show all button 
allButton.addEventListener("click", () => {
cardsOnDom(pets);
});
//filter buttons
  //cat
catButton.addEventListener("click", () => {
  const catMembers = filter(pets, "cat");
  cardsOnDom(catMembers);
});
 //dog
dogButton.addEventListener("click", () => {
  const dogMembers = filter(pets, "dog");
  cardsOnDom(dogMembers);
});
  //dino
dinoButton.addEventListener("click", () => {
    const dinoMembers = filter(pets, "dino");
    cardsOnDom(dinoMembers);
  });
  
// ******************** //
// ****** CREATE ****** //
// ******************** //

/////////1. Select/target the form on the DOM
const form = document.querySelector("form");

/////////2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate

const createPet = (e) => {
  //preventDefaults prevents the default bx of forms, which is to reload the page when submit form
  e.preventDefault();

  const newPetObj = {
    id: pets.length +1,
    name: document.querySelector("#name").value,
                            //.value is when there is a user input. In this case it's the form they fill out
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#image").value
  };

  pets.push(newPetObj);

  //refresh this website with this added object. and clear the form.
  cardsOnDom(pets);
  form.reset();
};

// 3. Add an event listener for the form submit and pass it the function (callback)
form.addEventListener("submit", createPet);



// ******************** //
// ****** DELETE ****** //
// ******************** //


// Here we will be using event bubbling
// 1. Target the app div
// 2. Add an event listener to capture clicks
// 3. check e.target.id includes "delete"
// 4. add logic to remove from array
// 5. Repaint the DOM with the updated array
// 6. Organize code so that everything is in a function except selectors

// 1. target the app div

const app = document.querySelector("#app");

// 2. add an event listener to capture clicks

//think about 'e' as HERE the click is happening
app.addEventListener('click', (e) => {
  //3. check e.target.id includes "delete"
        //"target" finds that specific delete button (since there are multiple delete buttons)
        //The includes() method returns true if an array contains a specified value.
  if (e.target.id.includes("delete")) {
    //destructuring
    const [, id] = e.target.id.split("--");
                          //splits everything before and after the "--" (in the delete button of the interpolated card above) into 2 parts so like X--Y becomes [X, Y]
                          //from card's delete button: ...id="delete--${member.id}">Delete</button>
                          // The comma (,) in [, id] is a placeholder, meaning that the first value of the array is ignored. The second value from the array is assigned to the variable id. so basically this assigns the seconds part (whatever is after "--" to const id (so yes it is also declaring const id).)

    // 4. add logic to remove from array

    //find where e.id(the location where we clicked delete) is equal to the index position, and set that equal to the variable 
    //aka, which index did we click delete? which card's delete button? which object in the pets array?
    const index = pets.findIndex(e => e.id === Number(id));
                        //The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. 
                        //Number(id) just makes sure id is converted to a number (if it's not already)
    pets.splice(index, 1);
    //removes that index from the pets array
      //splice can do other stuff. but here it is removing an item from the pets array.... index is the position of the item to remove (in this case, found using findIndex above). 1 is the number of elements to remove, starting from the index.


    // 5. Repaint the DOM with the updated array
    cardsOnDom(pets);           
  }
});

const startApp = () => {
  cardsOnDom(pets);
  //events(); //ALWAYS LAST *****idk what this means?? ohhh wait. bc none of this stuff will show up until the events (clicks, submit) occur? maybe that's what it means? so this is getting our cards to actually appear when the page first loads?
};

startApp();
