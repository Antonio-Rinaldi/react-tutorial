/*
   --------------------- Let/Const (only visible in the scope where they're created) ---------------------------
*/
const var1 = "Can't change this reference assignment";
let va2 = "Can change this reference assignment";


/*
   -------------------------------------------- Object assignment ----------------------------------------------
*/
const customKey = "Custom-Key";
const customValue = "value2";
const item = {
  key: "value1",
  [customKey]: customValue
};

//value1 = "value1", value2 = "value2"
const value1 = item.key;
const value2 = item[customKey];


/*
   ----------------------------------------- Object and array destructuring ---------------------------------------
 */
const array = [1, 2];
const object = {
    key1: "value1",
    key2: "value2"
};

//element1 = 1, element2 = 2
const [element1, element2] = array;
//key1 = "value1", kay2 = "value2"
const {key1, key2} = object;


/*
   ------------------------------------------- Rest and Spread operators -------------------------------------------
 */
const spread1 = [1, 2];
const spread2 = {
    key1: "value1",
    key2: "value2"
};

//Separates an object or array in their elements/fields
const result = {
    ...spread1,
    ...spread2
};

//Can pass unlimited params to this method,
function rest(...rest) {
    const var1 = rest[0];
    const var2 = rest[1];
    const [element1, element2] = rest;
}

/*
    --------------------------------------------- Optional Chaining -------------------------------------------------
 */
const optional = {
    field: "value",
    array: [],
    object: {}
};
const present = optional?.field; //value
const undefinedArrayElement = optional?.array?.[0]; //undefined
const undefinedObjectElement = optional?.object?.absent; //undefined


/*
    --------------------------------------------- Template Literals ------------------------------------------------
 */
const string = "Value";
const templateString = `The value is: ${string}`;


/*
    ----------------------------------------------- Arrow Function -------------------------------------------------
 */
const emptyArrow = () => doSomething();
const oneParamArrow = param => doSomething(param);
const moreParamsArrow = (param1, param2) => doSomething(param1, param2);
function doSomething(param1, param2) {
    return param1 + param2;
}


/*
    --------------------------------------------------- Exports ---------------------------------------------------
 */
export const namedExport = "";
export default function defaultExport() {};


/*
    -------------------------------------------- Default Function Params -------------------------------------------
 */
const defaultParams1 = (param1, param2 = "defaultParam", ) => {};
function defaultParams2(param = "defaultParam") {}
