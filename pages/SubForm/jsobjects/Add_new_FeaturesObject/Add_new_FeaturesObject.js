export default {
	
	
	logout: ()=> {
    storeValue("user", undefined);
		storeValue("pass", undefined);
},
   

		handleAdded: (response) => {
			console.log(response);
        document.getElementById("result-add").textContent = JSON.stringify(response, null, 2);
        if (!response.addResults[0].success) {
          // stop early if adding a new feature was not successful
          return;
				}
		},
	
		atable: () => {Create_Records.run();},
		save: () => {
		//Create_Records.run();
		//const featureToAdd = Airtable_All_Features.selectedRow;
			const featureToAdd = 
        {
      attributes: {
        OBJECTID: ObjectID.text,
        InspectorName: inspectorname.text,
        Location: Location.text,
        DamageType: Damagetype.text
      }
     
};
	const featureServiceLayerUrl ="https://services7.arcgis.com/2W8lpZwpSVmtY9Tc/arcgis/rest/services/TEST_SIMPLE_FEMO/FeatureServer/0";
			
		
	
			ADD_SERVICE_token.run({url: featureServiceLayerUrl,
  features: [featureToAdd]
}).then(this.handleAdded)
				.then((response) => showAlert(response) )
    .catch((error) => showAlert(error, 'error'));
			
			GET_SERVICE_token.run();
			
	},
	
    }
    
    
    