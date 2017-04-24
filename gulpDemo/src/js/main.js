require.config({
		    paths : {
		        "b" : "b",
		        "c" : "c",
		        "d" : "d",
		        "e" : "e",
		        "f" : "f"
		    }
});

require(["b","c","d","e","f"]);