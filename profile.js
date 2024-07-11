
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

document.getElementById('edit-button').addEventListener('click', function(){
    const editables = document.querySelectorAll('.editable');
    editables.forEach(el => el.setAttribute('contenteditable', 'true'));
    document.getElementById('edit-button').classList.add('hidden');
    document.getElementById('confirm-button').classList.remove('hidden');
})

document.getElementById('submit-button').addEventListener('click', function() {
    const editables = document.querySelectorAll('.editable');
    editables.forEach(el => el.setAttribute('contenteditable', 'false'));
    document.getElementById('edit-button').classList.remove('hidden');
    document.getElementById('confirm-button').classList.add('hidden');
});
}

function editSection(sectionPart){
    const editables = document.querySelectorAll( `.editable-${sectionPart}`);
    editables.forEach(el => {
        document.getElementsByClassName(`${sectionPart}-pencil`)[0].classList.add('hidden')

        let checkElement = document.getElementsByClassName(`check-${sectionPart}`)[0];
        checkElement.classList.remove('hidden');
        checkElement.classList.add("pencil-margin")

        el.setAttribute('contenteditable', 'true');
        el.classList.add('underline')
    
    });
    
}

function finishEditingSection(sectionPart){
    const editables = document.querySelectorAll( `.editable-${sectionPart}`);
    console.log(editables)
    editables.forEach(el => {
        document.getElementsByClassName(`${sectionPart}-pencil`)[0].classList.remove('hidden')

        let checkElement = document.getElementsByClassName(`check-${sectionPart}`)[0];
        checkElement.classList.add('hidden');
        checkElement.classList.add("pencil-margin")

        el.setAttribute('contenteditable', 'false');
        el.classList.remove('underline')
    
    });
    
}


