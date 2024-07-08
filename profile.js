
const apiKey = 'patKw9UMq2VUijzUK.e190422da0b9c4e3c2a81769060dc83442857b2501bd349318d0f2658d008c92'; 
const url = 'https://api.airtable.com/v0/appffEzv2epXU7OX7/tbluhJUTTuBa3DlP0/rec38MC19Mxw2Gvbl';

window.onload = function(){
  

axios.get(url, {
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
}).then(response =>{

    document.getElementById('broker-name').textContent = response.data.fields["Last Modified By"].name;
    document.getElementById('broker-email').textContent = response.data.fields["Last Modified By"].email;
    document.getElementById('position').textContent = response.data.fields["PositionName"];
    document.getElementById('loading-spinner').remove();

})
}