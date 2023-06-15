# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.

# PSEUDO CODE:
# Inputs - length, moral_lesson, age_group
# Output - Oral Stories translated into different languages
# Process - Create a class Ancestral_stories.Its attributes include length,moral_lesson,age_group
            # Create sub classes story,story_teller that inherit from Ancestral stories and for each
            # create methods;story_teller methods;add_story,narrate_story,translator methods:
            # translate story,story_method: added_stories


class Ancestral_stories:
    def __init__(self, length, moral_lesson, age_group):
        self.length = length
        self.moral_lesson = moral_lesson
        self.age_group = age_group


class Story_teller:
    def __init__(self, story_name, age, language):
        self.story_name = story_name
        self.age = age
        self.language = language
        
        self.stories = []
    def add_story(self, story):
        self.stories.append(story)

    def narrate_story(self, title):
        for story in self.stories:
            if story.title == title:
                return story.content
        return "Story missing."
    

class Story:
    def __init__(self, plot, character, setting):
        self.plot = plot
        self.character = character
        self.setting = setting

    def added_stories(self, story):
            self.story = story



class Translator:
    def __init__(self, name, original_language, new_language):
        self.name = name
        self.original_language = original_language
        self.new_language = new_language

    def translate_story(self, story, new_language):
        translated_stories = translate(story.content, story.language, new_language)
        translated_story = Story(story.title, translated_stories, story.length, story.moral_lesson)
        return translated_story
    


# 2.**African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.

# // PSEUDO-CODE
# // Input - uniqueIngredients,preparationTime,cookingMethod
# // Output - African Recipies
# // Process - Create a class Recipies which has attributes as folows;name,unique ingredients,
# // preparation time, cooking method, nutritional information.Create subclasses as follows; MorrocanRecipe,
# // EthiopianRecipe, NigerianRecipe.

class Recipe:
    def __init__(self, name, unique_ingredients, preparation_time, cooking_method, nutritional_information):
        self.name = name
        self.unique_ingredients = unique_ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method
        self.nutritional_information = nutritional_information

    def display_recipe(self):
        print(f"Recipe: {self.name}")
        print("Ingredients:")
        for ingredient in self.unique_ingredients:
            print(" " + ingredient)
        print("Preparation Time:", self.preparation_time)
        print("Cooking Method:", self.cooking_method)
        print("Nutritional Information:", self.nutritional_information)


class MoroccanRecipe(Recipe):
    def __init__(self, name, unique_ingredients, preparation_time, cooking_method, nutritional_information, beef_masala):
        super().__init__(name, unique_ingredients, preparation_time, cooking_method, nutritional_information)
        self.beef_masala = beef_masala

    def display_recipe(self):
        super().display_recipe()
        print("Spice Level:", self.spice_level)


class EthiopianRecipe(Recipe):
    def __init__(self, name, unique_ingredients, preparation_time, cooking_method, nutritional_information, curry_required):
        super().__init__(name, unique_ingredients, preparation_time, cooking_method, nutritional_information)
        self.curry_required = curry_required

    def display_recipe(self):
        super().display_recipe()
        print("Curry Required:", self.curry_required)


class NigerianRecipe(Recipe):
    def __init__(self, name, unique_ingredients, preparation_time, cooking_method, nutritional_information, soya_sauce_required):
        super().__init__(name, unique_ingredients, preparation_time, cooking_method, nutritional_information)
        self.soya_sauce = soya_sauce_required

    def display_recipe(self):
        super().display_recipe()
        print("Soya sauce Required:", self.soya_sauce_required)




# **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to

# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.

class Species:
    def __init__(self, name, diet, typical_lifespan,migrationPatterns):
        self.name = name
        self.diet = diet
        self.typical_lifespan = typical_lifespan
        self.migrationPatterns = migrationPatterns


class Predator(Species):
    def __init__(self, name, diet, typical_lifespan, hunting_method):
        super().__init__(name, diet, typical_lifespan)
        self.hunting_method = hunting_method


class Prey(Species):
    def __init__(self, name, diet, typical_lifespan, migration_patterns):
        super().__init__(name, diet, typical_lifespan)
        self.migration_patterns = migration_patterns



leopard = Predator("Lion", "Carnivore", 5, "Fast hunting")
gazelle = Prey("Zebra", "Herbivore", 15, "Seasonal migration")

print(leopard.name) 
print(gazelle.typical_lifespan)  
print(leopard.hunting_method) 
print(gazelle.migration_patterns)

