var recipes = {flour: '3 cups'};

function updateObjectWithKeyAndValue(object,key,value) {
  Object.assign({},object)
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object,key) {
  
}