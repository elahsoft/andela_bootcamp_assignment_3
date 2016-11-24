module.exports = {

aritGeo:function(array){
	var response =0;
	var sumO = 0;
	var sumFA = 0;
	var sumFG = 0;
	var ratio = 0;
	if(array.length > 0){
		ratio = array[1]/array[0];

		for(var i = 0; i < array.length; i++){
			sumO = sumO+array[i];
		}

		sumFA = (0.5 * array.length) * (array[0] + array[array.length - 1]);

		if(ratio > 1)
			sumFG = array[0] * (Math.pow(ratio, array.length) - 1)/(ratio - 1);
		else
			sumFG = array[0] * (1 - Math.pow(ratio, array.length))/(1- ratio);
	

	if(sumO == sumFA)
		response = 'Arithmetic';
	else if(sumO == sumFG)
		response = 'Geometric';
	else
		response = -1;

	return response;
	
	}
	else
		return 0;
}

}

