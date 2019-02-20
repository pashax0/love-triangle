/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
  	for (var i = 0; i < preferences.length; i++) {
  		var k = preferences[i];
  		var j = preferences[k - 1];
  		if (preferences[j - 1] == i + 1 && k != j) {
  			count++;
  		}
  	}
  	return count / 3;
};
