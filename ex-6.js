let height = undefined;
let result;
function definedItem(height) {
  return height ?? "Height is not defined";
}
result = definedItem(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
