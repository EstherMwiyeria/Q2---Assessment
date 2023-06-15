// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.


// # PSEUDO CODE:
// # Inputs - length, moral_lesson, age_group
// # Output - Oral Stories translated into different languages
// # Process - Create a class Ancestralstories.Its attributes include length,morallesson,agegroup
//             # Create sub classes story,storyTeller that inherit from Ancestral stories and for each
//             # create methods;storyteller methods;addStory,narrateStory,translator methods:
//             # translate story,story method: addedStories

class AncastralStories {
    constructor(length, moralLesson, ageGroup) {
      this.length = length;
      this.moralLesson = moralLesson;
      this.age_group = ageGroup
    }
  }
  
  class StoryTeller {
    constructor(name, age, language) {
      this.name = name;
      this.age = age;
      this.language = language;
      this.stories = [];
    }
  
    addStory(story) {
      this.stories.push(story);
    }
  
    narrateStory(title) {
      for (let story of this.stories) {
        if (story.title === title) {
          return story.content;
        }
      }
      return "Story missing.";
    }
  }
  class Story {
    constructor(plot, character, setting){
        this.plot = plot
        this.character = character
        this.setting = setting

  }
  added_stories(storis){
    storyAddition = []
    this.storyAddition.push(storis)
            

  }
}
    

  
  class Translator {
    constructor(name, originalLanguage, newLanguage) {
      this.name = name;
      this.originalLanguage = originalLanguage;
      this.newLanguage = newLanguage;
    }
  
    translateStory(story, newLanguage) {
      const translatedContent = translate(story.content, story.language, newLanguage);
      const translatedStory = new AncastralStories(story.title, translatedContent, story.length, story.moralLesson);
      return translatedStory;
    }
  }


//   **African Cuisine:** You're creating a recipe app specifically for African cuisine.
//   The app needs to handle recipes from different African countries, each with its
//   unique ingredients, preparation time, cooking method, and nutritional
//   information. Consider creating a `Recipe` class, and think about how you might
//   create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
//   `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
//   methods.

// PSEUDO-CODE
// Input - uniqueIngredients,preparationTime,cookingMethod
// Output - African Recipies
// Process - Create a class Recipies which has attributes as folows;name,unique ingredients,
// preparation time, cooking method, nutritional information.Create subclasses as follows; MorrocanRecipe,
// EthiopianRecipe, NigerianRecipe.

  class Recipe {
    constructor(name, uniqueIngredients, preparationTime, cookingMethod) {
      this.name = name;
      this.uniqueIngredients = uniqueIngredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
    }
  
    showcaseRecipe() {
      console.log(`Name: ${this.name}`);
      console.log(`Unique Ingredients: ${this.uniqueIngredients.join(', ')}`);
      console.log(`Preparation Time: ${this.preparationTime}`);
      console.log(`Cooking Method: ${this.cookingMethod}`);
    }
  
    calculateNutritionalInformation() {

    }
  }
  
  class MorrocanRecipe extends Recipe {
    constructor(name, uniqueIngredients, preparationTime, cookingMethod) {
      super(name, 'Morocco', uniqueIngredients, preparationTime, cookingMethod);
    }
  
    
  }
  
  class EthiopianRecipe extends Recipe {
    constructor(name, uniqueIngredients, preparationTime, cookingMethod) {
      super(name, 'Ethiopia', uniqueIngredients, preparationTime, cookingMethod);
    }
  

  }
  
  class NigerianRecipe extends Recipe {
    constructor(name, uniqueIngredients, preparationTime, cookingMethod) {
      super(name, 'Nigeria', uniqueIngredients, preparationTime, cookingMethod);
    }
  
    
  }
  
  let morrocanRecipe = new MorrocanRecipe('Chicken curry', ['chicken', 'salt', 'garlic', 'spices'], '3 hour', 'Boiling then frying');
  morrocoRecipe.showcaseRecipe();
  
  let ehiopianRecipe = new EthiopianRecipe('Tortillas', ['Baking powder', 'water', 'salt'], '3 hours', 'Put in the oven');
  rwandaRecipe.showcaseRecipe();

  let nigerianRecipe = new NigerianRecipe('Tortillas', ['Baking powder', 'water', 'salt'], '3 hours', 'Put in the oven');
  tanzaniaRecipe.showcaseRecipe();


//   **Wildlife Preservation:** You're a wildlife conservationist working on a
//   program to track different species in a national park. Each species has its own
//   characteristics and behaviors, such as its diet, typical lifespan, migration
//   patterns, etc. Some species might be predators, others prey. You'll need to
  
//   create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//   these classes might relate to each other through inheritance.

  class Species {
    constructor(name, diet, typicalLifespan,migrationPatterns) {
      this.name = name;
      this.diet = diet;
      this.typicalLifespan = typicalLifespan;
      this.migrationPatterns = migrationPatterns
    }
  }
  
  class Predator extends Species {
    constructor(name, diet, typical_lifespan, hunting_method) {
      super(name, diet, typical_lifespan);
      this.hunting_method = hunting_method;
    }
  }
  
  class Prey extends Species {
    constructor(name, diet, typical_lifespan, migration_patterns) {
      super(name, diet, typical_lifespan);
      this.migration_patterns = migration_patterns;
    }
  }
  
  const leopard = new Predator("Lion", "Carnivore", 5, "Fast hunting");
  const gazelle = new Prey("Zebra", "Herbivore", 15, "Seasonal migration");
  
  console.log(leopard.name);  
  console.log(gazelle.typical_lifespan);  
  console.log(leopard.hunting_method);  
  console.log(gazelle.migration_patterns); 
  
  