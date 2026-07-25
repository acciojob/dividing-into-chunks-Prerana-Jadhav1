const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	n=Number(n);

	let res=[];
	let curr=[];

	let sum=0;
	for(let num of arr){
		if(sum+num<=n){
			curr.push(num);
			sum+=num;
		}
		else{
			res.push(curr);
			curr=[num];
			sum=num;
		}
	}

	if (curr.length>0) {
		res.push(curr);
	}

	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n))); 
