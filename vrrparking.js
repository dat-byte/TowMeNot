const license_plate = 'Nigga';
const vehicle_make  = 'TOYOTA';
const vehicle_model = 'CAMRY';
const vehicle_color = 'WHITE';
const email         = 'gaynigga@gmail.com';
const resident_name = 'Nigga What';
const unit_number   = '1301';

const url = 'https://api.vrrparking.com/api/v1/visitors';
const data = {
    property_id: 470,
    vehicle_number: license_plate, 
    vehicle_brand: vehicle_make, 
    vehicle_model: vehicle_model, 
    vehicle_color: vehicle_color, 
    email: email, 
    resident_name: resident_name, 
    resident_unit_number: unit_number, 
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
