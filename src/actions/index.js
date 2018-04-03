export const SET_RECIPES = 'SET_RECIPES';

export function setRecipe(items) {

    return{
        type: SET_RECIPES,
        items
    }

}