"use strict";

function getPercentage(arrayOfDataValue) {
	const sumTotal = arrayOfDataValue.reduce((currentTotalValue, currentValue) => {
		return currentTotalValue + currentValue;
	});
	return arrayOfDataValue.map((eachDatavalue) => {
		// this returns a float insted of percentage cos chartjs can't render percentage directly inside the pie chart,so I used decimals
		return parseFloat(Math.fround(eachDatavalue / sumTotal)).toFixed(2);
	});
}

function getVariationOfMainColor(opacity = 1) {
	return `rgb(255, 74, 0, ${opacity})`;
}

function usePieChart({ element, arrayOfdata, labelTitle }) {
	let numOfItems = 0,
		colorVariationArray = [],
		data;

	data = arrayOfdata.map((eachData) => {
		return {
			...eachData,
			bgColor: "", //add new property called bgColor
		};
	});

	if (data) {
		while (data.length >= numOfItems) {
			const result = data.length * 20 - numOfItems * 20;

			colorVariationArray.push(result / 100);
			numOfItems++;
		}
	}

	if (colorVariationArray.length) {
		data = data.map((eachData, index) => {
			const colorOpacity = colorVariationArray.at(index);
			return {
				...eachData,
				bgColor: getVariationOfMainColor(colorOpacity),
			};
		});
	}

	const options = {
		type: "pie",
		data: {
			datasets: [
				{
					label: labelTitle ?? "Label",
					data: getPercentage(data.map(({ value }) => value)), //an array
					backgroundColor: data.map(({ bgColor }) => (bgColor !== "" ? bgColor : "")),
					hoverOffset: 10,
				},
			],
		},
	};
	new Chart(element, options);

	//finally we return the received the data to contain the actual data, and other necessary type of data such as decimal
	data = data.map((eachData) => {
		return {
			...eachData,
			valueAsDecimal: (eachData.value / 100).toFixed(2),
		};
	});

	return { data };
}

export { usePieChart };
