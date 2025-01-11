const plate  = 'Nigga';
const vmake  = 'TOYOTA';
const vmodel = 'CAMRY';
const vcolor = 'WHITE';
const rname  = 'Nigga What';
const number = '1301';
const email  = 'gaynigga@gmail.com';

// DO NOT TOUCH
const url = 'https://api.vrrparking.com/api/v1/visitors';
const data = {
    property_id: 470,
    vehicle_number: plate, 
    vehicle_brand: vmake, 
    vehicle_model: vmodel, 
    vehicle_color: vcolor, 
    email: email, 
    resident_name: rname, 
    resident_unit_number: number, 
    device_type: "web"
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
    })
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
