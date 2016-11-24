var filterKeys = [
	"locationId",
	"propertyType",
	"operation",
	"rooms",
	"minPrice",
	"maxPrice",
	"exterior",
	"photos",
	"hasMultimedia",
	"center",
	"distance",
	"micrositeShortName",
	"maxItems",
	"numPage",
	"sinceDate"
];
function filtersFrom(optons) {
	return Object.keys(options)
		.filter((v) => filterKeys.indexOf(v) !== -1)
		.reduce((k, v) => {
			k[v] = options[v];
			return k;
		}, {});
}



module.exports = filtersFrom;
